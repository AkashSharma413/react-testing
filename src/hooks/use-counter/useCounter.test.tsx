import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
    test("should render the initial count", () => {
        const {result} = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    });

    test("should accept and render the initial count", () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialCounter: 10
            }
        });
        expect(result.current.count).toBe(10);
    })
})