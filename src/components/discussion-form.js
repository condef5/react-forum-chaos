/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Button, Input, TextArea } from "./ui";

function CreateDiscussion({ handleCloseModal, handleCreateDisccusion }) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleCloseModal();
    handleCreateDisccusion({
      id: new Date(Date.now()).getTime(),
      title,
      body,
      author: "condef5",
      date: new Date(Date.now()).toISOString()
    });
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleBodyChange(event) {
    setBody(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2
        css={{
          fontSize: "2rem",
          fontWeight: "normal",
          margin: "0"
        }}
      >
        New Discussion
      </h2>
      <div
        css={{
          margin: "2em 0"
        }}
      >
        <Input
          aria-label="Write the title of the discussion"
          placeholder="Discussion title"
          type="text"
          name="title"
          required
          autoFocus
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div
        css={{
          margin: "2em 0"
        }}
      >
        <TextArea
          aria-label="Write the body of the discussion"
          placeholder="Body title"
          name="body"
          required
          value={body}
          onChange={handleBodyChange}
          rows="4"
        />
      </div>
      <Button>Create employee</Button>
    </form>
  );
}

export default CreateDiscussion;
