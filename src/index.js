/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router, Redirect } from "@reach/router";
import { jsx, Global } from "@emotion/core";
import Home from "./views/home";
import Debate from "./views/debate";
import Login from "./views/login";
import Navbar from "./components/navbar";
import { DiscussionProvider } from "./contexts/discussions";

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

const initialDiscussion = JSON.parse(
  localStorage.getItem("discussions") ||
    JSON.stringify([
      {
        id: new Date("2019-06-13T21:50:18.315Z").getTime(),
        title: "How kill to Christopher",
        body: "Some body in the sky",
        author: "condef5",
        date: "2019-06-13T21:50:18.315Z"
      },
      {
        id: new Date("2019-06-13T22:50:18.315Z").getTime(),
        title: "How to build the future today",
        body: "Some body in the sky",
        author: "condef5",
        date: "2019-06-13T22:50:18.315Z"
      },
      {
        id: new Date("2019-06-13T23:50:18.315Z").getTime(),
        title: "Learn react like a professional",
        body: "Some body in the sky",
        author: "condef5",
        date: "2019-06-13T23:50:18.315Z"
      },
      {
        id: new Date("2019-06-13T13:50:18.315Z").getTime(),
        title: "The best reply in the history",
        body: "Some body in the sky",
        author: "condef5",
        date: "2019-06-13T13:50:18.315Z"
      }
    ])
);

function App() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const [discussions, setDiscussions] = React.useState(initialDiscussion);

  function createUser(value) {
    localStorage.setItem("user", JSON.stringify(value));
    setUser(value);
  }

  React.useEffect(() => {
    localStorage.setItem("discussions", JSON.stringify(discussions));
  }, [discussions]);

  return (
    <DiscussionProvider
      discussions={discussions}
      setDiscussions={setDiscussions}
    >
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
    </DiscussionProvider>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
