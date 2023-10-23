import { useEffect, useState } from "react";
import axios from "axios";

export default function Articles() {
  const [articleList, setArticleLsit] = useState([]);

  useEffect(() => {
    axios
      .get("https://nc-news-6m81.onrender.com/api/articles")
      .then((response) => {
        setArticleLsit(response.data);
      });
  }, []);
  return (
    <div>
      <h1>Articles</h1>
      <ul className="article-container">
        {articleList.map((article) => {
          return (
            <li className="article-card">
              <p>{article.votes} 👍</p>
              {article.title}
              <p>Author: {article.author}</p>
              <img
                className="card-image"
                src={article.article_img_url}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
