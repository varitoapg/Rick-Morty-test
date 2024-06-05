import { render, screen } from "@testing-library/react";
import { TableRowCell } from "./TableRowCell";
import { describe, expect, it } from "vitest";

describe("TableRowCell", () => {
  it("renders the characteristic prop", () => {
    const characteristic = "Test Characteristic";
    const textColor = "text-red-500";

    render(
      <TableRowCell characteristic={characteristic} textColor={textColor} />
    );
    const characteristciFound = screen.getByText(characteristic);

    expect(characteristciFound).toBeDefined();
  });
});
