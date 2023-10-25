import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginProvider } from "./Contexts/LoginContext";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";
import Home from "./Components/Home";
import CommentsList from "./Components/CommentsList";
import Topics from "./Components/Topics";

function App() {
  return (
    <>
      <LoginProvider>
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles/*" element={<Articles />}></Route>
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
          <Route
            path="/articles/:article_id/comments"
            element={<CommentsList />}
          ></Route>
          <Route path="/topics" element={<Topics />}></Route>
        </Routes>
      </LoginProvider>
    </>
  );
}

export default App;
