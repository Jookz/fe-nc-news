import { useState, useEffect, useContext } from "react";
import { incrementArticle, incrementComment } from "./api";
import { LoginContext } from "../Contexts/LoginContext";

export default function Voter({ votes, commentId, articleId }) {
  const [userVotes, setUserVotes] = useState(0);
  const [err, setErr] = useState(null);
  const { user } = useContext(LoginContext);

  const updateVotes = (value) => {
    if (user) {
      setUserVotes((currentVotes) => {
        return currentVotes + value;
      });
    } else {
      alert("You must be logged in to vote");
    }
  };

  useEffect(() => {
    if (articleId) {
      incrementArticle(articleId, userVotes).catch((error) => {
        setUserVotes(0);
        setErr(error);
      });
    }
  }, [userVotes]);

  useEffect(() => {
    if (commentId) {
      incrementComment(commentId, userVotes).catch((error) => {
        setUserVotes(0);
        setErr(error);
      });
    }
  }, [userVotes]);

  return (
    <div className="voter">
      <p>
        Votes: {votes + userVotes}
        <button
          className="vote"
          disabled={userVotes === 1}
          onClick={() => {
            updateVotes(1);
          }}
        >
          ↑
        </button>
        <button
          className="vote"
          disabled={userVotes === -1}
          onClick={() => {
            updateVotes(-1);
          }}
        >
          ↓
        </button>
      </p>
      {err && <p>Voting unavailable</p>}
    </div>
  );
}
