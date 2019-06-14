import React from "react";
import { render } from "@testing-library/react";

import Comment from "./comment";

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
