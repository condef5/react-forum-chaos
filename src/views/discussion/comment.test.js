import React from "react";
import { render } from "@testing-library/react";

import Comment from "./comment";

const initialComments = [
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
];

test("Comment component", () => {
  const fakeFunction = jest.fn();
  const { asFragment } = render(
    <Comment
      user={{ id: 1, username: "" }}
      discussionId={1}
      handleNewComment={fakeFunction}
      comments={[]}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Render the correct amount of Comment components", () => {
  const { getAllByRole } = render(
    <Comment
      listReplies={initialComments.filter(
        comment => comment.discussionId === 1 && comment.parentComment
      )}
      comments={initialComments.filter(
        comment => comment.discussionId === 1 && !comment.parentComment
      )}
    />
  );
  const commentObjects = getAllByRole("comment");
  const replayObjects = getAllByRole("replay");
  expect(commentObjects.length).toBe(2);
  expect(replayObjects.length).toBe(2);
});
