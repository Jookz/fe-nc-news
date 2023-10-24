import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-6m81.onrender.com/api/",
});

const getArticles = () => {
  return myApi
    .get("https://nc-news-6m81.onrender.com/api/articles")
    .then((response) => {
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

export { getArticles, getSingleArticle, getArticleComments, incrementArticle };
