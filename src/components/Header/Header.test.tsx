import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { describe, it } from "vitest";

describe("Header", () => {
  it("renders header text", () => {
    render(<Header />);
    screen.getByText(/Rick and Morty/i);
  });
});
