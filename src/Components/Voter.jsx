import { useState, useEffect } from "react";
import { incrementArticle } from "./api";

export default function Voter({ votes, article_id }) {
  const [userVotes, setUserVotes] = useState(0);
  const [err, setErr] = useState(null);

  const updateVotes = (value) => {
    setUserVotes((currentVotes) => {
      return currentVotes + value;
    });
  };

  useEffect(() => {
    incrementArticle(article_id, userVotes).catch((error) => {
      setUserVotes(0);
      setErr(error);
    });
  }, [userVotes]);

  return (
    <div>
      <p>
        Votes: {votes + userVotes}
        <button
          disabled={userVotes === 1}
          onClick={() => {
            updateVotes(1);
          }}
        >
          ↑
        </button>
        <button
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
