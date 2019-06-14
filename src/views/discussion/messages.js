/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button } from "../../components/ui";

function Messages({ messages }) {
  return (
    <>
      {messages.map(message => {
        return (
          <>
            <span>{message.author}</span>
            <span>{message.date}</span>
            <p>{message.comment}</p>
            <Button styles={{ width: "200px" }}>Reply</Button>
            <br />
          </>
        );
      })}
    </>
  );
}

export default Messages;
