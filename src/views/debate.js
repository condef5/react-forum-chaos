/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Header from "../components/discussion/header";
import Comments from "../components/discussion/comment";
import Reply from "../components/discussion/reply";
import { Provider as UserProvider } from "../contexts/user";
import { Provider as DiscussionProvider } from "../contexts/discussion";
import { Provider as NewCommentProvider } from "../contexts/newComment";

const initialUser = JSON.parse(
  localStorage.getItem("user") ||
    JSON.stringify({
      email: "paulotijero@gmail.com",
      username: "Paulo Tijero"
    })
);

const initialDiscussions = JSON.parse(
  localStorage.getItem("discussions") ||
    JSON.stringify([
      {
        id: 1,
        title: "How to use React",
        body:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend, vulputate ultrices natoque dictumst massa molestie hendrerit phasellus blandit, est justo non lobortis potenti primis laoreet sodales varius. Nascetur posuere imperdiet hendrerit per ridiculus enim suspendisse viverra tristique cras eget tortor sapien, volutpat montes mollis blandit.",
        author: "Paulo Tijero",
        date: "12-02-19"
      },
      {
        id: 2,
        title: "How to use React",
        body:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend, vulputate ultrices natoque dictumst massa molestie hendrerit phasellus blandit, est justo non lobortis potenti primis laoreet sodales varius. Nascetur posuere imperdiet hendrerit per ridiculus enim suspendisse viverra tristique cras eget tortor sapien, volutpat montes mollis blandit.",
        author: "Lian",
        date: "12-02-19"
      },
      {
        id: 3,
        title: "How to use React",
        body:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend, vulputate ultrices natoque dictumst massa molestie hendrerit phasellus blandit, est justo non lobortis potenti primis laoreet sodales varius. Nascetur posuere imperdiet hendrerit per ridiculus enim suspendisse viverra tristique cras eget tortor sapien, volutpat montes mollis blandit.",
        author: "Frank",
        date: "12-02-19"
      }
    ])
);

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
        discussionId: 1
      },
      {
        id: 2,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
        author: "Paulo Tijero",
        date: "12-02-19",
        parentComment: "",
        discussionId: 1
      },
      {
        id: 3,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
        author: "Lian",
        date: "12-02-19",
        parentComment: 1,
        discussionId: 1
      },
      {
        id: 4,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
        author: "Lian",
        date: "12-02-19",
        parentComment: 1,
        discussionId: 2
      },
      {
        id: 5,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
        author: "Lian",
        date: "12-02-19",
        parentComment: 2,
        discussionId: 1
      }
    ])
);

const container = {
  maxWidth: "45rem",
  margin: "0 auto",
  backgroundColor: "#fff"
};

function Debate({ id }) {
  const [listComment, setListComment] = React.useState(initialComments);

  function handleNewComment(comment) {
    setListComment([comment, ...listComment]);
  }

  React.useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(listComment));
  }, [listComment]);

  return (
    <UserProvider value={initialUser}>
      <DiscussionProvider value={id}>
        <NewCommentProvider value={handleNewComment}>
          <div css={container}>
            <Header
              discussion={initialDiscussions.find(
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
