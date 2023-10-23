import { useParams } from "react-router-dom";
import myApi from "./api";
import { useState } from "react";

export default function CommentsList() {
  const { article_id } = useParams();
  const [commentsList, setCommentsList] = useState([]);

  myApi
    .get(
      `https://nc-news-6m81.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      setCommentsList(response.data);
    });
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
