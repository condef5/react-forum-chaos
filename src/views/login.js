/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { Button, Card, Input, TextArea } from "../components/ui";

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
      <Link to="/">Go to Home</Link>
      <Card
        css={{
          background: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%"
        }}
      >
        <form
          css={{
            backgroundColor: "white",
            borderRadius: ".5rem",
            padding: "2rem 1rem",
            width: "50%",
            maxWidth: 360
          }}
          onSubmit={handleSubmit}
        >
          <h1 css={{ margin: 0, fontWeight: "500", textAlign: "center" }}>
            Welcome to Chaos
          </h1>
          <div css={{ margin: "2.5rem 1rem" }}>
            <input
              css={{
                border: "none",
                borderBottom: "1px solid #ccc",
                padding: ".5rem 1rem",
                fontSize: "1.2rem",
                boxSizing: "border-box",
                width: "100%",
                outline: "none",
                transition: "border-bottom-color 300ms ease",
                ":focus": {
                  borderBottomColor: "#2C3A47"
                }
              }}
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
              css={{
                border: "none",
                borderBottom: "1px solid #ccc",
                padding: ".5rem 1rem",
                fontSize: "1.2rem",
                boxSizing: "border-box",
                width: "100%",
                outline: "none",
                transition: "border-bottom-color 300ms ease",
                ":focus": {
                  borderBottomColor: "#2C3A47"
                }
              }}
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

          <Button
            css={{
              backgroundColor: "#55E6C1",
              borderRadius: ".5rem",
              color: "white",
              width: "100%",
              padding: ".75rem .5rem",
              boxSizing: "border-box",
              fontSize: ".9rem",
              fontWeight: "500",
              textTransform: "uppercase",
              outline: "none"
            }}
            type="submit"
          >
            Enter
          </Button>
        </form>
      </Card>
    </>
  );
}

export default Login;
