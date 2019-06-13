/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { TextArea, Button } from "../../components/ui";
import Header from "./header";
import Messages from "./messages";

const user = {
  email: "paulotijero@gmail.com",
  username: "Paulo Tijero"
};

const discussions = [
  {
    id: 1,
    title: "How to kill Paulo",
    body:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend, vulputate ultrices natoque dictumst massa molestie hendrerit phasellus blandit, est justo non lobortis potenti primis laoreet sodales varius. Nascetur posuere imperdiet hendrerit per ridiculus enim suspendisse viverra tristique cras eget tortor sapien, volutpat montes mollis blandit.",
    author: "Paulo Tijero",
    date: "12-02-19"
  },
  {
    id: 2,
    title: "How to kill Lian",
    body:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend, vulputate ultrices natoque dictumst massa molestie hendrerit phasellus blandit, est justo non lobortis potenti primis laoreet sodales varius. Nascetur posuere imperdiet hendrerit per ridiculus enim suspendisse viverra tristique cras eget tortor sapien, volutpat montes mollis blandit.",
    author: "Lian",
    date: "12-02-19"
  },
  {
    id: 3,
    title: "How to kill Frank",
    body:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend, vulputate ultrices natoque dictumst massa molestie hendrerit phasellus blandit, est justo non lobortis potenti primis laoreet sodales varius. Nascetur posuere imperdiet hendrerit per ridiculus enim suspendisse viverra tristique cras eget tortor sapien, volutpat montes mollis blandit.",
    author: "Frank",
    date: "12-02-19"
  }
];

const messages = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
    author: "Frank",
    date: "12-02-19",
    parent_comment: "",
    discussion_id: 1
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
    author: "Paulo Tijero",
    date: "12-02-19",
    parent_comment: "",
    discussion_id: 1
  },
  {
    id: 3,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
    author: "Lian",
    date: "12-02-19",
    parent_comment: 1,
    discussion_id: 1
  },
  {
    id: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit nostra tempor eleifend.",
    author: "Lian",
    date: "12-02-19",
    parent_comment: 1,
    discussion_id: 2
  }
];

function Debate({ id }) {
  return (
    <>
      <div>Discussion {id}</div>
      <Header
        question={discussions.find(
          discussion => discussion.id.toString() === id
        )}
      />
      <TextArea styles={{ height: "100px" }} />
      <Button>Reply</Button>
      <Messages
        messages={messages.filter(
          message => message.discussion_id.toString() === id
        )}
      />
    </>
  );
}

export default Debate;
