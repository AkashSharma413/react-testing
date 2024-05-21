import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("renders with name prop", () => {
    render(<Greet name="Akash" />);
    const textElement = screen.getByText(/Hello Akash/i);
    expect(textElement).toBeInTheDocument();
  });
});
