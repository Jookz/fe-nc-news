import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-6m81.onrender.com/api/",
});

export default myApi;
