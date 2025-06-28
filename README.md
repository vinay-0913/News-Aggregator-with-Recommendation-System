# News Aggregator

This is a **News Aggregator** project built using the **Express, React, Node.js**, **Flask** and **NewsAPI.org API**. The project allows users to view news articles from various sources at one place. They can view default news, Category news, Country News. This project also has Recommendation System which recommend news articles based on your interaction. 

## Tech Stack

- **Frontend**: React.js with modern hooks and context for state management.
- **Backend**: Node.js, Express.js and Flask fro recommendation system.
- **Recommendation System**: NLP, TF-IDF, Cosine Similarity 
- **Hosting**: Vercel for deployment of the frontend and backend.

## Features

- Recommedation System.
- Default, Category, and Country News.
- Realtime news updates (past 24 hours).
- Light and Dark Mode.

## 🖥️ Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/rehmanNRY/SocialMediaApp
    ```
2. **Install dependencies**:
   - Navigate to the client directory and run:
    ```bash
    npm install
    ```
    - Navigate to the server directory and run:
    ```bash
    npm install
    ```
    - Navigate to the recommend_backend directory and run:
    ```bash
    pip install -r requirements.txt
    ```
4. Add your NewsAPI.org API key to the `.env` file in the following format: `API_KEY=your_news_api_key`.
5. In the client directory, run `npm install` to install the necessary dependencies.
6. In the server directory, create python virtual environment by running `python -m venv venv` and then run `.venv\Scripts\activate` to activate (.venv). And then run `python app.py`.
7. Navigate to the client directory and run `npm install` to install the necessary dependencies.
8. Start the client by running `npm run dev`.
Make sure you replace with your API key. So when clicking news articles in AllNews section and Top-Headlines section, related news artilces are shown in Recommendation section (If not, relvent new are not found).

### Note - Currently NewsAPI.org only support `us` country news. So in Country Section, other country news are not returning any news articles. 

## Usage

Once the project is set up and running, you can view news articles from various sources on the client side.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
