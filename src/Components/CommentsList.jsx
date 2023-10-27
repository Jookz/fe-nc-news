import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleComments, postComment } from "./api";

export default function CommentsList() {
  const { article_id } = useParams();
  const [commentsList, setCommentsList] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setNewComment(value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCommenting(true);
    postComment(article_id, newComment)
      .then((response) => {
        if (response.status === 201) {
          setIsCommenting(false);
          setIsErr(false);
          setNewComment("");
        }
      })
      .catch((error) => {
        if (error) {
          setIsCommenting(false);
          setIsErr(true);
        }
      });
  };

  useEffect(() => {
    getArticleComments(article_id).then((comments) => {
      setCommentsList(comments.data);
    });
  }, [isCommenting]);

  if (isCommenting) {
    return <p>Commenting...</p>;
  }

  if (commentsList.length === 0) {
    return <h3>No comments yet.</h3>;
  }

  return (
    <article>
      <h1>Comments</h1>
      <form action="/" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="comment-input">Add a comment:</label>
        <textarea
          value={newComment}
          id={`comment-input__${isErr}`}
          cols="40"
          rows="2"
          onChange={handleChange}
          required
        ></textarea>
        <button>💬</button>
      </form>
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
              <button>🗑️</button>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
