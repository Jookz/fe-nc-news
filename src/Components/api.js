import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-6m81.onrender.com/api/",
});

const getArticles = (topic, sortBy) => {
  const params = {};
  if (topic) {
    params.topic = topic;
  }
  if (sortBy) {
    params.sort_by = sortBy;
  }
  return myApi.get("/articles", { params }).then((response) => {
    return response.data;
  });
};

const getSingleArticle = (article_id) => {
  return myApi.get(
    `https://nc-news-6m81.onrender.com/api/articles/${article_id}`
  );
};

const getArticleComments = (article_id) => {
  return myApi.get(
    `https://nc-news-6m81.onrender.com/api/articles/${article_id}/comments`
  );
};

const incrementArticle = (article_id, userVotes) => {
  return myApi.patch(
    `https://nc-news-6m81.onrender.com/api/articles/${article_id}`,
    { inc_votes: userVotes }
  );
};

const postComment = (article_id, comment) => {
  return myApi.post(
    `https://nc-news-6m81.onrender.com/api/articles/${article_id}/comments`,
    { username: "grumpy19", body: comment }
  );
};

const deleteComment = () => {
  return myApi.delete(
    `https://nc-news-6m81.onrender.com/api/articles/${article_id}/comments`
  );
};

export {
  getArticles,
  getSingleArticle,
  getArticleComments,
  incrementArticle,
  postComment,
};
