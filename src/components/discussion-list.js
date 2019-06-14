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
        margin: 0
      }}
    >
      {discussions.map(discussion => (
        <Discussion discussion={discussion} key={discussion.date} />
      ))}
    </ul>
  );
}

export default DiscussionList;
