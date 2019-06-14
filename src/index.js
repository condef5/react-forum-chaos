// src/index.js
import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./views/home";
import Debate from "./views/debate";
import Login from "./views/login";
import Logout from "./views/logout";
import Navbar from "./components/navbar";
import { navigate } from "@reach/router";

function App() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );

  if (!user) {
    navigate("/login");
  }

  function createUser(value) {
    localStorage.setItem("user", JSON.stringify(value));
    setUser(value);
  }

  return (
    <main>
      <Navbar user={user} />
      <Router>
        <Home path="/" />
        <Debate path="discussion/:id" />
        <Login createUser={createUser} path="login" />
        <Logout path="logout" />
      </Router>
    </main>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
