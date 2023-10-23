import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import myApi from "./api";
import { Link } from "react-router-dom";
import CommentsList from "./CommentsList";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    myApi
      .get(`https://nc-news-6m81.onrender.com/api/articles/${article_id}`)
      .then((response) => {
        setArticle(response.data.article);
      });
  }, []);

  myApi
    .get(
      `https://nc-news-6m81.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      setCommentsList(response.data);
    });

  return (
    <section>
      <article>
        <h1>{article.title}</h1>
        <img className="article-image" src={article.article_img_url} alt="" />
        <p>Published: {article.created_at}</p>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <h3>Like this article?</h3>
        <p>
          Votes: {article.votes} <button>↑</button>
          <button>↓</button>
        </p>
      </article>
      <CommentsList />
    </section>
  );
}
