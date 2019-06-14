/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router, Redirect } from "@reach/router";
import { jsx, Global } from "@emotion/core";
import Home from "./views/home";
import Debate from "./views/debate";
import Login from "./views/login";
import Navbar from "./components/navbar";

const globalStyles = {
  body: {
    margin: 0,
    fontFamily: "Roboto, sans-serif",
    background: "#f2f3f5",
    color: "#34495e",
    fontSize: "15px"
  },
  a: {
    color: "#34495e"
  }
};

function App() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  function createUser(value) {
    localStorage.setItem("user", JSON.stringify(value));
    setUser(value);
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Navbar user={user} setUser={createUser} />
      <main
        css={{
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
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
    </>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
