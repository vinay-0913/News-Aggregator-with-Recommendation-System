aaaaimport React, { useState } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";
import { format } from "date-fns";

function Card(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  function handleArticleClick() {
    const clickedArticle = props.title;
    if (!clickedArticle) return;

    let storedArticles = JSON.parse(localStorage.getItem("clickedArticles")) || [];
    if (!storedArticles.includes(clickedArticle)) {
      storedArticles.push(clickedArticle);
      localStorage.setItem("clickedArticles", JSON.stringify(storedArticles));
    }
  }

  // Format the published date
  const formattedDate = props.publishedAt
    ? format(new Date(props.publishedAt), "MMM d, yyyy")
    : "Unknown date";

  // Use placeholder image if article image is null or loading fails
  const placeholderImage = "/placeholder.svg";

  return (
    <div className="group bg-white h-full flex-1 flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all transform hover:-translate-y-0.5 hover:shadow-lg">
      {/* Image Section */}
      <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleArticleClick}
      className="relative aspect-[16/9] overflow-hidden bg-gray-100 block"
      >
        {props.imgUrl && !imageError ? (
      <>
      {!imageLoaded && <div className="absolute inset-0 bg-gray-200 shimmer" />}
      <img
        src={props.imgUrl}
        alt={props.title}
        className={`w-full h-full object-cover transition-all duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } group-hover:scale-105`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
      </>
    ) : (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <img src={placeholderImage} alt="No image available" className="w-16 h-16 opacity-30" />
    </div>
  )}

  {/* Source Badge */}
  {props.source && (
    <div className="absolute top-2 left-2 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-lg ">
      {props.source}
    </div>
  )}
</a>


      {/* Content Section */}
      <div className="p-4">
        {/* Date above title */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>

        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleArticleClick}
          className="title text-lg font-semibold text-gray-900 transition-all line-clamp-2 min-h-[3rem]"
        >
          {props.title}
        </a>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {props.description || "No description available."}
        </p>

        {/* Read More below description */}
        <div className="mt-2">
        <a href={props.url} target="_blank" rel="noopener noreferrer" 
          className="flex items-center gap-1 hover:underline transition-all duration-500 ease-in-out">
          Read More 
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        </div>
      </div>
    </div>
  );
}

export default Card;
