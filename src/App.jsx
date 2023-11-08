import "./App.css";
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { LoginProvider } from "./Contexts/LoginContext";
import { DarkModeProvider } from "./Contexts/DarkModeContext";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";
import Home from "./Components/Home";
import CommentsList from "./Components/CommentsList";
import FeaturedArticle from "./Components/FeaturedArticle";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <LoginProvider>
        <DarkModeProvider>
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
          </Routes>
          <div>
            {useParams.length === 0 ? (
              <FeaturedArticle id="conditional-article" />
            ) : (
              <p></p>
            )}
          </div>
          <Footer />
        </DarkModeProvider>
      </LoginProvider>
    </>
  );
}

export default App;
