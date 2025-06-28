# News Aggregator

This is a **News Aggregator** project built using the **Express, React, Node.js**, **Flask** and **NewsAPI.org API**. The project allows users to view news articles from various sources at one place. They can view default news, Category news, Country News. This project also has Recommendation System which recommend news articles based on your interaction. 

![Website Screenshot](./client/public/Screenshot.png)

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
3. **Set API KEY**:    
   - Add your NewsAPI.org API key in the following format: `API_KEY=your_news_api_key`.

4. **To run on local machine**:
   - Change my deployed urls to :
    - ***For client*** : http://localhost:5173
    - ***For recommen_backend*** : http://127.0.0.1:5000/recommendations
      
5. **Start the development server**:
   - Run the recommend_backend server:
    ```bash
    python app.py
    ```
    - Run the backend server:
    ```bash
    node server.js
    ```
   - Run the frontend React application:
    ```bash
    npm run dev
    ```

#### Note - Currently NewsAPI.org only support `us` country news. So in Country Section, other country news are not returning any news articles. You can also use other APIs instead. 
