import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import { getSingleArticle } from "./api";
import Voter from "./Voter";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id).then((response) => {
      setIsLoading(false);
      setArticle(response.data.article);
    });
  }, []);

  if (isLoading) return <p>Loading articles...</p>;

  return (
    <section>
      <article>
        <h1>{article.title}</h1>
        <img className="article-image" src={article.article_img_url} alt="" />
        <p>Published: {article.created_at}</p>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>{article.body}</p>
        <h3>Like this article?</h3>
        <Voter article_id={article.article_id} votes={article.votes} />
      </article>
      <CommentsList />
    </section>
  );
}
