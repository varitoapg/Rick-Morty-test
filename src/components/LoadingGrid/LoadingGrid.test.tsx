import { cleanup, render, screen } from "@testing-library/react";
import { LoadingGrid } from "./LoadingGrid";
import { afterEach, describe, it } from "vitest";

describe("LoadingGrid", () => {
  afterEach(cleanup);

  it("should render component", () => {
    render(<LoadingGrid />);
  });

  it("renders loading spinner", () => {
    render(<LoadingGrid />);
    screen.getByText("Loading...");
  });
});
