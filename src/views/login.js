/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Button, Card, Input } from "../components/ui";

function Login({ createUser }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const user = { email: email, username: username };
    createUser(user);
  }

  return (
    <>
      <Card
        css={{
          backgroundColor: "white",
          borderRadius: ".5rem",
          padding: "2rem 1rem",
          width: "50%",
          maxWidth: 360,
          margin: "auto"
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1 css={{ margin: 0, fontWeight: "500", textAlign: "center" }}>
            Welcome to Chaos
          </h1>
          <div css={{ margin: "2.5rem 1rem" }}>
            <Input
              aria-label="Enter your username"
              placeholder="Enter your username"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleChangeUsername}
              autoFocus
            />
          </div>

          <div css={{ margin: "2.5rem 1rem" }}>
            <Input
              aria-label="Enter your email"
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              autoFocus
            />
          </div>

          <Button type="submit">Enter</Button>
        </form>
      </Card>
    </>
  );
}

export default Login;
