// src/index.js
import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./views/home";
import Debate from "./views/debate";
import Login from "./views/login";
import Logout from "./views/logout";
import Navbar from "./components/navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Router>
        <Home path="/" />
        <Debate path="discussion/:id" />
        <Login path="login" />
        <Logout path="logout" />
      </Router>
    </main>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
