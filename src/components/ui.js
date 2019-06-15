/** @jsx jsx */
import { jsx } from "@emotion/core";

const styleInput = {
  background: "none",
  border: "1px solid #eaeaea",
  borderRadius: ".25rem",
  boxSizing: "border-box",
  display: "block",
  fontSize: "1rem",
  padding: ".5rem",
  width: "100%",
  "&:focus": {
    outline: "none",
    borderColor: "#444444"
  }
};

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        backgroundColor: "black",
        border: "1px solid black",
        borderRadius: ".25rem",
        color: "white",
        cursor: "pointer",
        fontSize: ".8rem",
        padding: ".75rem 0",
        transition: "all 200ms ease",
        textAlign: "center",
        textTransform: "uppercase",
        width: "100%",
        "&:hover": {
          backgroundColor: "white",
          color: "black"
        },
        ...styles
      }}
    />
  );
}

function Card({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        background: "white",
        borderRadius: ".5em",
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, .12)",
        boxSizing: "border-box",
        padding: "2rem",
        width: "100%",
        ...styles
      }}
    />
  );
}

function Input({ styles, ...props }) {
  return (
    <input
      {...props}
      css={{
        ...styleInput,
        ...styles
      }}
    />
  );
}

function TextArea({ styles, ...props }) {
  return <textarea {...props} css={{ ...styleInput, ...styles }} />;
}

export { Button, Card, Input, TextArea };
