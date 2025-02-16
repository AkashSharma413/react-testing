import { screen, render } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../../providers/app-providers";

describe("MuiMode", () => {
    test("Component renders correctly!", () => {
        render(<MuiMode />, {
            wrapper: AppProviders
        });
        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent("dark mode");
    })
})