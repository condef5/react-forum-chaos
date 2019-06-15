import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./home";
import { DiscussionProvider } from "../contexts/discussions";

test("Home component", async () => {
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

  const setDiscussions = jest.fn();
  const { getByLabelText, asFragment } = render(
    <DiscussionProvider
      discussions={discussions}
      setDiscussions={setDiscussions}
    >
      <Home />
    </DiscussionProvider>
  );

  expect(asFragment()).toMatchSnapshot();

  const button = getByLabelText("Add new discussion");

  fireEvent.click(button);

  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(button);

  fireEvent.keyDown(document, {
    key: "Escape",
    code: 27,
    charCode: 27
  });

  expect(asFragment()).toMatchSnapshot();
});
