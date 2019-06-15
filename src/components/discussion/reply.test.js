import React from "react";
import { render } from "@testing-library/react";

import Reply from "./reply";

test("Reply component", () => {
  const fakeFunction = jest.fn();
  const { asFragment } = render(
    <Reply
      user={{ id: 1, username: "" }}
      discussionId={1}
      handleNewComment={fakeFunction}
      parentComment={1}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
