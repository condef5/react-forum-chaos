import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Login from "./login";

test("Login component", () => {
  const createUser = jest.fn();

  const { asFragment, getByLabelText } = render(
    <Login createUser={createUser} />
  );

  expect(asFragment()).toMatchSnapshot();

  const inputUsername = getByLabelText("Enter your username");

  fireEvent.change(inputUsername, { target: { value: "test-user" } });

  const inputEmail = getByLabelText("Enter your email");
  fireEvent.change(inputEmail, {
    target: { value: "test-user@mail.com" }
  });

  fireEvent.submit(inputEmail);
  fireEvent.submit(inputUsername);

  expect(createUser).toHaveBeenCalledWith({
    username: "test-user",
    email: "test-user@mail.com"
  });
});
