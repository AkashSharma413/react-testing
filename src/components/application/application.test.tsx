import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
  test("Renders Correctly", () => {
    render(<Application />);
    let pageHeadingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeadingElement).toBeInTheDocument();

    let sectionHeadingElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeadingElement).toBeInTheDocument();

    let nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    let bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    let jobLocationElement = screen.getByRole("listbox");
    expect(jobLocationElement).toBeInTheDocument();

    let termElement = screen.getByRole("checkbox");
    expect(termElement).toBeInTheDocument();

    let submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
