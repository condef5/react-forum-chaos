import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import DiscussionForm from "./discussion-form";

test("Home component", async () => {
  Date.now = jest.fn(() => new Date("2019-06-13T22:50:18.315Z"));
  const handleCreateDisccusion = jest.fn();

  const { getByLabelText, asFragment } = render(
    <DiscussionForm
      handleCreateDisccusion={handleCreateDisccusion}
      handleCloseModal={jest.fn()}
    />
  );

  expect(asFragment()).toMatchSnapshot();

  const titleInput = await waitForElement(() =>
    getByLabelText("Write the title of the discussion")
  );

  fireEvent.change(titleInput, { target: { value: "React is great" } });

  const bodyInput = getByLabelText("Write the body of the discussion");
  fireEvent.change(bodyInput, { target: { value: "Space in the morning" } });

  fireEvent.submit(titleInput);

  expect(handleCreateDisccusion).toHaveBeenCalledWith({
    id: new Date("2019-06-13T22:50:18.315Z").getTime(),
    title: "React is great",
    body: "Space in the morning",
    author: "condef5",
    date: new Date("2019-06-13T22:50:18.315Z").toISOString()
  });
});
