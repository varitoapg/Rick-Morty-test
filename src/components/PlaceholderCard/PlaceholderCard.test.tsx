import { cleanup, render, screen } from "@testing-library/react";
import { PlaceholderCard } from "./PlaceholderCard";
import { afterEach, describe, expect, it } from "vitest";

describe("PlaceholderCard", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<PlaceholderCard />);
  });

  it("renders the correct number of placeholder elements", () => {
    render(<PlaceholderCard />);
    const placeholderElements = screen.queryAllByTestId("placeholder-block");
    expect(placeholderElements.length).toBe(3);
  });
});
