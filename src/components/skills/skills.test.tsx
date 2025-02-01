import { render, screen } from "@testing-library/react";
import Skills from "./skills";

describe("skills", () => {
    const skills = ["html", "css", "javascript"];

    test("renders list correctly!", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    test("renders list item correctly!", () => {
        render(<Skills skills={skills}/>);
        const listItemElement = screen.getAllByRole("listitem");
        expect(listItemElement).toHaveLength(skills.length);
    })
});