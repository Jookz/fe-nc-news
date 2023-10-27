import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getArticles } from "./api.js";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState("View by topic");
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("Sort by");

  function setQuery(topic) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams);
  }

  useEffect(() => {
    setIsLoading(true);
    setQuery(topic);
    getArticles(topic).then((articles) => {
      setIsLoading(false);
      setArticleList(articles);
    });
  }, [topic]);

  if (isLoading) return <p>Loading articles...</p>;
  return (
    <section>
      <h1>Articles</h1>
      <select name="topics-select" onChange={(e) => setTopic(e.target.value)}>
        <option value="View by topic">View by topic</option>
        <option value="cooking">Cooking</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
      </select>
      <select
        name="sortby-select"
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <ul className="article-container">
        {articleList.map((article) => {
          return (
            <li className="article-card" key={article.title}>
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
              <img
                className="card-image"
                src={article.article_img_url}
                alt=""
              />
              <p>Author: {article.author}</p>
              <p>{article.votes} 👍</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
