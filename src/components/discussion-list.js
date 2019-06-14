/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Discussion from "./discussion";

function DiscussionList({ discussions }) {
  return (
    <ul
      css={{
        listStyle: "none",
        padding: 0,
        margin: "2em 0"
      }}
    >
      {discussions
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(discussion => (
          <Discussion discussion={discussion} key={discussion.id} />
        ))}
    </ul>
  );
}

export default DiscussionList;
