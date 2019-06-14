/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Reply from "./reply";

const container = {
  margin: "10px 0"
};

const containerChild = { ...container, margin: "2em" };

const info = {
  fontSize: "1em",
  color: "#34495e"
};

const content = { ...info, fontSize: "1.2em", margin: "5px 0 0 0" };

function Comment({ comments, user, discussionId, handleNewComment }) {
  return (
    <div css={container}>
      {comments.map(comment => {
        return (
          <div css={comment.parentComment ? containerChild : {}}>
            <span css={info}>
              {comment.author} - {comment.date}
            </span>
            <p css={content}>{comment.comment}</p>
            <Reply
              user={user}
              discussionId={discussionId}
              handleNewComment={handleNewComment}
              parentComment={comment.id}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
