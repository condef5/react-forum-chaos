/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Messages({ messages }) {
  return (
    <>
      {messages.map(message => {
        return (
          <>
            <span>{message.author}</span>
            <span>{message.date}</span>
            <p>{message.comment}</p>
          </>
        );
      })}
    </>
  );
}

export default Messages;
