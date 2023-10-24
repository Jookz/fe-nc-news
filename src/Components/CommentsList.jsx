import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleComments } from "./api";

export default function CommentsList() {
  const { article_id } = useParams();
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    getArticleComments(article_id).then((comments) => {
      setCommentsList(comments.data);
    });
  }, []);

  if (commentsList.length === 0) {
    return <h3>No comments yet.</h3>;
  }

  return (
    <article>
      <h1>Comments</h1>
      <ul>
        {commentsList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <p>Published: {comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
              <button>↑</button>
              <button>↓</button>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
