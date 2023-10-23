import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import SingleArticle from "./Components/SingleArticle";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles/*" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
      </Routes>
    </>
  );
}

export default App;
