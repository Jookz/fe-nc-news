import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route path="/articles" element={<Articles />}></Route>
      </Routes>
    </>
  );
}

export default App;
