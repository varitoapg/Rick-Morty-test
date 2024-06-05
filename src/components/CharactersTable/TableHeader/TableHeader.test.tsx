import { render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";
import { describe, expect, it } from "vitest";

describe("TableHeader", () => {
  it("renders table headers correctly", () => {
    render(<TableHeader />);

    const nameHeader = screen.getByText("Name");
    const statusHeader = screen.getByText("Status");
    const locationHeader = screen.getByText("Location");
    const speciesHeader = screen.getByText("Species");
    const typeHeader = screen.getByText("Type");
    const genderHeader = screen.getByText("Gender");
    const originHeader = screen.getByText("Origin");

    expect(nameHeader).toBeDefined();
    expect(statusHeader).toBeDefined();
    expect(locationHeader).toBeDefined();
    expect(speciesHeader).toBeDefined();
    expect(typeHeader).toBeDefined();
    expect(genderHeader).toBeDefined();
    expect(originHeader).toBeDefined();
  });
});
