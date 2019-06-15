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

function Header({ discussion }) {
  return (
    <div css={container}>
      <h1 css={title}>{discussion.title}</h1>
      <span css={info}>
        {discussion.author} - {discussion.date}
      </span>
      <p css={content}>{discussion.body}</p>
    </div>
  );
}

export default Header;
