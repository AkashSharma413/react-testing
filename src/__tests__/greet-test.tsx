import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greet/greet";

describe("Greet", () => {
  xit("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  it("renders with name prop", () => {
    render(<Greet name="Akash" />);
    const textElement = screen.getByText(/Hello Akash/i);
    expect(textElement).toBeInTheDocument();
  });
});
