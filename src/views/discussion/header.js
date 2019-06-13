/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Header({ question }) {
  return (
    <>
      <h1>{question.title}</h1>
      <span>{question.author}</span>
      <span>{question.date}</span>
      <p>{question.body}</p>
      <span>-------------------</span>
    </>
  );
}

export default Header;
