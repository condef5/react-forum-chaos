/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const container = {
  margin: "5px",
  borderBottom: "2px dashed #34495e"
};

const title = {
  fontSize: "3em",
  margin: "10px 0"
};

const info = {
  fontSize: "1em",
  color: "#34495e"
};

const content = { ...info, fontSize: "1.3em" };

function Header({ question }) {
  return (
    <div css={container}>
      <h1 css={title}>{question.title}</h1>
      <span css={info}>
        {question.author} - {question.date}
      </span>
      <p css={content}>{question.body}</p>
    </div>
  );
}

export default Header;
