import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import { getSingleArticle } from "./api";
import Voter from "./Voter";
import moment from "moment";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then((response) => {
        setIsLoading(false);
        setArticle(response.data.article);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  if (err)
    return (
      <h3>
        {err.response.status}: {err.response.data.msg}
      </h3>
    );
  if (isLoading) return <p>Loading articles...</p>;

  return (
    <section>
      <article className="single-article">
        <h1>{article.title}</h1>
        <img className="article-image" src={article.article_img_url} alt="" />
        <p>
          Published:{" "}
          {moment(article.created_at).utc().format("DD-MM-YYYY, hh:mm")} |
          Author: {article.author} | Topic: {article.topic}
        </p>
        <p>{article.body}</p>
        <h3>Like this article?</h3>
        <Voter article_id={article.article_id} votes={article.votes} />
      </article>
      <CommentsList />
    </section>
  );
}
