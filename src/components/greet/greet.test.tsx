import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with name prop", () => {
  render(<Greet name="Akash" />);
  const textElement = screen.getByText(/Hello Akash/i);
  expect(textElement).toBeInTheDocument();
});
