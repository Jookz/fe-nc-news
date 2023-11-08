import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleComments, postComment, deleteComment } from "./api";
import moment from "moment";

export default function CommentsList() {
  const { article_id } = useParams();
  const [commentsList, setCommentsList] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setNewComment(value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setIsDeleting(true);
    const deleteId = e.target.value;
    const commentText = e.target.parentElement.innerText;
    const commentUserRegex = /^grumpy19/;
    if (commentUserRegex.test(commentText)) {
      deleteComment(deleteId).then((response) => {
        if (response.status === 204) {
          setIsDeleting(false);
          alert("Comment deleted");
        }
      });
    } else {
      setIsDeleting(false);
      alert("Error: You can only delete your own comments.");
    }
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
  }, [isCommenting, handleDelete]);

  if (isCommenting) {
    return <p>Commenting...</p>;
  }

  if (isDeleting) {
    return <p>Deleting comment...</p>;
  }

  if (commentsList.length === 0) {
    return <h3>No comments yet.</h3>;
  }

  return (
    <article>
      <h2>Comments</h2>
      <br></br>
      <form
        className="comment-form"
        action="/"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label className="comment-label" htmlFor="comment-input">
          Add a comment:
        </label>
        <textarea
          value={newComment}
          id={`comment-input__${isErr}`}
          cols="40"
          rows="2"
          onChange={handleChange}
          required
        ></textarea>
        <button className="comment-button">💬</button>
      </form>
      <ul>
        {commentsList.map((comment) => {
          return (
            <li className="comment-card" key={comment.comment_id}>
              <div className="comment-top">
                <h3 className="comment-author">{comment.author}</h3>{" "}
                <p className="comment-date">
                  {moment(comment.created_at).fromNow()}
                </p>
              </div>

              <p className="comment-body">{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              <button className="vote">↑</button>
              <button className="vote">↓</button>
              <button
                className="vote"
                value={comment.comment_id}
                onClick={handleDelete}
              >
                🗑️
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
