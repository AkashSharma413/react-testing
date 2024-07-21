import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application", () => {
    test("Renders Correctly", () => {
        render(<Application/>);
        let nameElement = screen.getByRole("textbox");
        expect(nameElement).toBeInTheDocument();

        let jobLocationElement = screen.getByRole("listbox");
        expect(jobLocationElement).toBeInTheDocument();

        let termElement = screen.getByRole("checkbox");
        expect(termElement).toBeInTheDocument();

        let submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    })
})