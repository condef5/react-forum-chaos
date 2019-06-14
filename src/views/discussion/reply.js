/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { TextArea, Button } from "../../components/ui";

const button = {
  backgroundColor: "#f60",
  border: "1px solid #f60",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#f60"
  }
};

const buttonChild = { ...button, width: "10rem" };

function Reply({ user, discussionId, parentComment = null, handleNewComment }) {
  const [comment, setComment] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleNewComment({
      id: new Date().getTime(),
      comment: comment,
      author: user.username,
      date: new Date().toISOString(),
      parentComment,
      discussionId
    });
    setComment("");
  }

  function handlecommentChange(event) {
    setComment(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextArea
          css={{ height: "100px" }}
          aria-label="Reply"
          placeholder="Write Reply"
          type="text"
          onChange={handlecommentChange}
          value={comment}
        />
        <Button type="submit" styles={parentComment ? buttonChild : button}>
          Reply
        </Button>
      </form>
    </>
  );
}

export default Reply;
