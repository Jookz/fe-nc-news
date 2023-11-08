import { useState, useEffect } from "react";
import { getFeaturedArticle } from "./api";
import { useParams } from "react-router-dom";

export default function FeaturedArticle() {
  const [article, setArticle] = useState({});

  useEffect(() => {
    getFeaturedArticle().then((article) => {
      setArticle(article.data.article);
    });
  }, []);

  return (
    <article className="featured">
      <h2>Featured Article</h2>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <img src={article.article_img_url} className="featured-img" />
    </article>
  );
}
