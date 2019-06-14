/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Reply from "./reply";

function Comment({ comments, user, discussionId, handleNewComment }) {
  return (
    <>
      {comments.map(comment => {
        return (
          <>
            <span>{comment.author}</span>
            <span>{comment.date}</span>
            <p>{comment.comment}</p>
            <Reply
              user={user}
              discussionId={discussionId}
              handleNewComment={handleNewComment}
              parentComment={comment.id}
            />
            <br />
          </>
        );
      })}
    </>
  );
}

export default Comment;
