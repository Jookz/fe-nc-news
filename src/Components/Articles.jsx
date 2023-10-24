import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "./api.js";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articles) => {
      setIsLoading(false);
      setArticleList(articles);
    });
  }, []);

  if (isLoading) return <p>Loading articles...</p>;
  return (
    <section>
      <h1>Articles</h1>
      <ul className="article-container">
        {articleList.map((article) => {
          return (
            <li className="article-card" key={article.title}>
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
              <img
                className="card-image"
                src={article.article_img_url}
                alt=""
              />
              <p>Author: {article.author}</p>
              <p>{article.votes} 👍</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
