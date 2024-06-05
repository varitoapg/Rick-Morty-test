import { describe, expect, it } from "vitest";
import { Spinner } from "./Spinner";
import { render, screen } from "@testing-library/react";

describe("Spinner", () => {
  it("should render the spinner component", () => {
    render(<Spinner />);

    const svgElement = screen.getByTestId("spinner-svg");

    expect(svgElement).toBeDefined();
  });
});
