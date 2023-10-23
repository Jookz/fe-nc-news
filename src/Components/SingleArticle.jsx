import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import myApi from "./api";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    myApi
      .get(`https://nc-news-6m81.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
      });
  }, []);

  return (
    <div>
      <h1>{article.title}</h1>
      <img className="article-image" src={article.article_img_url} alt="" />
      <p>Published: {Date(article.created_at)}</p>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <h3>Comments</h3>
      <ul id="comments"></ul>
      <h3>
        Like this article? Upvote <button>HERE 👍</button>
      </h3>
    </div>
  );
}
