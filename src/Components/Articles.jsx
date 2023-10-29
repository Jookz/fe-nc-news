import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getArticles } from "./api.js";

export default function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  function setTopicQuery(topic) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams);
    setTopic(topic);
  }

  function setSortQuery(sortBy) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sortBy);
    setSearchParams(newParams);
    setSortBy(sortBy);
  }

  function setSortOrder(order) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", order);
    setSearchParams(newParams);
    setOrder(order);
  }

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, sortBy, order)
      .then((articles) => {
        setIsLoading(false);
        setArticleList(articles);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  }, [topicQuery, sortQuery, searchParams, topic]);

  if (isLoading) return <p>Loading articles...</p>;
  return (
    <section>
      <h1>Articles</h1>
      <select
        name="topics-select"
        onChange={(e) => setTopicQuery(e.target.value)}
      >
        <option value="View by topic">View by topic</option>
        <option value="cooking">Cooking</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
      </select>
      <select
        name="sort-by-select"
        onChange={(e) => {
          setSortQuery(e.target.value);
        }}
      >
        <option value="Sort by">Sort by</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <button onClick={() => setSortOrder("asc")}>Ascending</button>
      <button onClick={() => setSortOrder("desc")}>Descending</button>
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
              <p>{article.created_at}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
