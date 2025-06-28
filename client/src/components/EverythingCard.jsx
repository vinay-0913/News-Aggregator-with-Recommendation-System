import React, { useState } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";
import { format } from "date-fns";

function Card(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const placeholderImage = "/placeholder.svg";

  function handleArticleClick() {
    const clickedArticle = props.title;
    if (!clickedArticle) return;

    let storedArticles = JSON.parse(localStorage.getItem("clickedArticles")) || [];
    if (!storedArticles.includes(clickedArticle)) {
      storedArticles.push(clickedArticle);
      localStorage.setItem("clickedArticles", JSON.stringify(storedArticles));
    }
  }

  const formattedDate = props.publishedAt
    ? format(new Date(props.publishedAt), "MMM d, yyyy")
    : "Unknown date";

  return (
    <div
      className="group h-full flex-1 flex-col rounded-xl overflow-hidden shadow-sm border transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--txt)",
        borderColor: "rgba(100, 100, 100, 0.1)"
      }}
    >
      {/* Image */}
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleArticleClick}
        className="relative aspect-[16/9] overflow-hidden block"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        {props.imgUrl && !imageError ? (
          <>
            {!imageLoaded && <div className="absolute inset-0 bg-gray-200 shimmer" />}
            <img
              src={props.imgUrl}
              alt={props.title}
              className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"
                } group-hover:scale-105`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <img src={placeholderImage} alt="No image available" className="w-16 h-16 opacity-30" />
          </div>
        )}

        {props.source && (
          <div
            className="absolute top-2 left-2 text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--txt)",
              border: "var(--btn-background)",
            }}
          >
            {props.source}
          </div>
        )}

      </a>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1 text-sm mb-2" style={{ color: "var(--txt)" }}>
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>

        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleArticleClick}
          className="title text-lg font-semibold transition-all line-clamp-2 min-h-[3rem]"
          style={{ color: "var(--txt)" }}
        >
          {props.title}
        </a>

        <p className="text-sm mt-2 line-clamp-2" style={{ color: "var(--txt)" }}>
          {props.description || "No description available."}
        </p>

        <div className="mt-2">
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:text-[var(--heading)] flex items-center gap-1 transition-all duration-500 ease-in-out text-[var(--txt)]"
          >
            Read More
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Card;
