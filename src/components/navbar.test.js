import React from "react";
import { render } from "@testing-library/react";

import Navbar from "./navbar";

test("Navbar component", () => {
  const user = { username: "lian", email: "liamrn94@mail.com" };

  const { asFragment } = render(<Navbar user={user} />);

  expect(asFragment()).toMatchSnapshot();
});
