import React from "react";
import { render } from "@testing-library/react";
import Discussion from "./discussion";

test("Discussion component", async () => {
  const discussion = {
    id: new Date("2019-06-13T21:50:18.315Z").getTime(),
    title: "How kill to Christopher",
    body: "Some body in the sky",
    author: "condef5",
    date: "2019-06-13T21:50:18.315Z"
  };

  const { asFragment } = render(<Discussion discussion={discussion} />);

  expect(asFragment()).toMatchSnapshot();
});
