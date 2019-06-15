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

function Comment({ comments, listReplies }) {
  return (
    <div css={container}>
      {comments.map(comment => {
        return (
          <>
            <div>
              <span css={info}>
                {comment.author} - {comment.date}
              </span>
              <p css={content}>{comment.comment}</p>
              <Reply parentComment={comment.id} />
              <br />
            </div>
            {listReplies.some(
              replays => replays.parentComment === comment.id
            ) && (
              <div css={container}>
                {listReplies
                  .filter(replays => replays.parentComment === comment.id)
                  .map(replay => {
                    return (
                      <div css={containerChild}>
                        <span css={info}>
                          {replay.author} - {replay.date}
                        </span>
                        <p css={content}>{replay.comment}</p>
                        <br />
                      </div>
                    );
                  })}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Comment;
