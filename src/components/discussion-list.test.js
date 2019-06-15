import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import DiscussionList from "./discussion-list";

test("DiscussionList component", async () => {
  const discussions = [
    {
      id: new Date("2019-06-13T21:50:18.315Z").getTime(),
      title: "How kill to Christopher",
      body: "Some body in the sky",
      author: "condef5",
      date: "2019-06-13T21:50:18.315Z"
    },
    {
      id: new Date("2019-06-13T22:50:18.315Z").getTime(),
      title: "How to build the future today",
      body: "Some body in the sky",
      author: "condef5",
      date: "2019-06-13T22:50:18.315Z"
    }
  ];

  const { asFragment } = render(<DiscussionList discussions={discussions} />);

  expect(asFragment()).toMatchSnapshot();
});
