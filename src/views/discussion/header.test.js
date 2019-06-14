import React from "react";
import { render } from "@testing-library/react";

import Header from "./header";

test("Header component", () => {
  const { asFragment } = render(<Header question={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
