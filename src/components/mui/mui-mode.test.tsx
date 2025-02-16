import { screen, render } from "../../test-utils";
import { MuiMode } from "./mui-mode";

describe("MuiMode", () => {
    test("Component renders correctly!", () => {
        render(<MuiMode />);
        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent("dark mode");
    })
})