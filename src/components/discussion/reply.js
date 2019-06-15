/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { TextArea, Button } from "../ui";
import UserContext from "../../contexts/user";
import DiscussionContext from "../../contexts/discussion";
import NewCommentContext from "../../contexts/newComment";

const button = {
  backgroundColor: "#f60",
  border: "1px solid #f60",
  marginTop: "1em",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#f60"
  }
};

const buttonChild = { ...button, width: "10rem" };

function Reply({ parentComment = null }) {
  const user = React.useContext(UserContext);
  const discussionId = React.useContext(DiscussionContext);
  const handleNewComment = React.useContext(NewCommentContext);
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

  function handleCommentChange(event) {
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
          onChange={handleCommentChange}
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
