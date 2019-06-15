import React from "react";
import { render } from "@testing-library/react";
import { Button, Card, Input, TextArea } from "./ui";

test("Button", () => {
  expect(
    render(<Button>This is a button</Button>).asFragment()
  ).toMatchSnapshot();
});

test("Card", () => {
  expect(render(<Card>This is card</Card>).asFragment()).toMatchSnapshot();
});

test("Input", () => {
  expect(render(<Input />).asFragment()).toMatchSnapshot();
});

test("TextArea", () => {
  expect(render(<TextArea />).asFragment()).toMatchSnapshot();
});
