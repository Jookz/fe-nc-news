import { useEffect, useState } from "react";
import { getTopics } from "./api";

export default function Topics() {
  const [articles, articleList] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {});
  });
  return (
    <section>
      <h1>Topics</h1>
      <h3>Select a topic to view related articles</h3>
      <button>Coding</button>
      <button>Football</button>
      <button>Cooking</button>
    </section>
  );
}
