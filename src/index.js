// src/index.js
import React from "react";
import { render } from "react-dom";
import { Router, Redirect } from "@reach/router";
import Home from "./views/home";
import Debate from "./views/debate";
import Login from "./views/login";
import Navbar from "./components/navbar";

function App() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  function createUser(value) {
    localStorage.setItem("user", JSON.stringify(value));
    setUser(value);
  }

  return (
    <main>
      <Navbar user={user} setUser={createUser} />
      <Router>
        {user.username ? (
          <Redirect from="/login" to="/" noThrow />
        ) : (
          <Redirect from="/" to="/login" noThrow />
        )}
        <Home path="/" />
        <Debate path="discussion/:id" />
        <Login createUser={createUser} path="login" />
      </Router>
    </main>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
