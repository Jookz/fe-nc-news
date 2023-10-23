import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myApi from "./api";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    myApi
      .get("https://nc-news-6m81.onrender.com/api/articles")
      .then((response) => {
        setIsLoading(false);
        setArticleList(response.data);
      });
  }, []);

  if (isLoading) return <p>Loading articles...</p>;
  return (
    <div>
      <h1>Articles</h1>
      <ul className="article-container">
        {articleList.map((article) => {
          return (
            <li className="article-card" key={article.title}>
              <p>{article.votes} 👍</p>
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
              <img
                className="card-image"
                src={article.article_img_url}
                alt=""
              />
              <p>Author: {article.author}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
