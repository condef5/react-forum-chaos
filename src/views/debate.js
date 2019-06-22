/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Header from "../components/discussion/header";
import Comments from "../components/discussion/comment";
import Reply from "../components/discussion/reply";
import { redirectTo } from "@reach/router";
import { Provider as UserProvider } from "../contexts/user";
import { Provider as DiscussionProvider } from "../contexts/discussion";
import { Provider as NewCommentProvider } from "../contexts/newComment";

const initialComments = JSON.parse(
  localStorage.getItem("comment") ||
    JSON.stringify([
      {
        id: 1,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
        author: "Frank",
        date: "12-02-19",
        parentComment: "",
        discussionId: new Date("2019-06-13T21:50:18.315Z").getTime()
      },
      {
        id: 2,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
        author: "Paulo Tijero",
        date: "12-02-19",
        parentComment: "",
        discussionId: new Date("2019-06-13T21:50:18.315Z").getTime()
      },
      {
        id: 3,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
        author: "Lian",
        date: "12-02-19",
        parentComment: 1,
        discussionId: new Date("2019-06-13T21:50:18.315Z").getTime()
      },
      {
        id: 4,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
        author: "Lian",
        date: "12-02-19",
        parentComment: 1,
        discussionId: new Date("2019-06-13T20:50:18.315Z").getTime()
      },
      {
        id: 5,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
        author: "Lian",
        date: "12-02-19",
        parentComment: 2,
        discussionId: new Date("2019-06-13T21:50:18.315Z").getTime()
      }
    ])
);

const container = {
  padding: "1em",
  backgroundColor: "#fff"
};

function Debate({ id, discussions, user }) {
  const [listComment, setListComment] = React.useState(initialComments);

  function handleNewComment(comment) {
    setListComment([comment, ...listComment]);
  }

  React.useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(listComment));
  }, [listComment]);

  React.useEffect(() => {
    if (!user.username) redirectTo("/login");
  }, [user.username]);

  if (!user.username) return null;

  return (
    <UserProvider value={user}>
      <DiscussionProvider value={id}>
        <NewCommentProvider value={handleNewComment}>
          <div css={container}>
            <Header
              discussion={discussions.find(
                discussion => discussion.id.toString() === id
              )}
            />
            <Reply />
            <Comments
              listReplies={listComment.filter(
                comment =>
                  comment.discussionId.toString() === id &&
                  comment.parentComment
              )}
              comments={listComment.filter(
                comment =>
                  comment.discussionId.toString() === id &&
                  !comment.parentComment
              )}
            />
          </div>
        </NewCommentProvider>
      </DiscussionProvider>
    </UserProvider>
  );
}

export default Debate;
