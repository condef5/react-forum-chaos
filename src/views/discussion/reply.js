/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { TextArea, Button } from "../../components/ui";

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
        <input
          aria-label="Reply"
          placeholder="Write Reply"
          type="text"
          onChange={handlecommentChange}
          value={comment}
        />
        <Button type="submit">Reply</Button>
      </form>
    </>
  );
}

export default Reply;
