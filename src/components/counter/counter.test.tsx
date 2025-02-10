import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
    test("Renders Correctly", () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument();
        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        });
        expect(incrementButton).toBeInTheDocument();
    });

    test("Renders a count of 0", () => {
        render(<Counter/>);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("0");
    });

    test("Renders a count of 1 after user single click on increment button", async () => {
        user.setup();
        render(<Counter/>);
        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        });
        await user.click(incrementButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("1");
    });

    test("Renders a count of 2 after user double click on increment button", async () => {
        user.setup();
        render(<Counter/>);
        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        });
        await user.dblClick(incrementButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("2");
    });

    test("Renders a count of 3 after user triple click on increment button", async () => {
        user.setup();
        render(<Counter/>);
        const incrementButton = screen.getByRole("button", {
            name: "Increment"
        });
        await user.tripleClick(incrementButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("3");
    });

    test("Renders a count of 10 after user click the set button", async () => {
        user.setup();
        render(<Counter/>);
        const amountElement = screen.getByRole("spinbutton");
        await user.type(amountElement, "10");
        expect(amountElement).toHaveValue(10);

        const setButton = screen.getByRole("button", {name: "Set"});
        await user.click(setButton);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("10");
    });

    test("Elements are focused in a right order", async () => {
        user.setup();
        render(<Counter/>);
        const incrementButton = screen.getByRole("button", {name: "Increment"});
        const amountElement = screen.getByRole("spinbutton");
        const setButton = screen.getByRole("button", {name: "Set"});

        await user.tab();
        expect(incrementButton).toHaveFocus();
        await user.tab();
        expect(amountElement).toHaveFocus();
        await user.tab();
        expect(setButton).toHaveFocus();
    })
})