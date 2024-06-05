import { cleanup, render, screen } from "@testing-library/react";
import { CharacterTable } from "./CharacterTable";
import { afterEach, describe, expect, it } from "vitest";
import { extendedCharactersMocked } from "../../utils/testUtils/charactersMocked";

describe("CharacterTable", () => {
  afterEach(cleanup);

  it("renders table rows for each character", () => {
    const characters = extendedCharactersMocked;
    render(<CharacterTable characters={characters} />);
    const tableRows = screen.getAllByRole("row");

    expect(tableRows).toHaveLength(characters.length + 1);
  });

  it("renders table header when empty array is sent by characters", () => {
    render(<CharacterTable characters={[]} />);
    const tableHeader = screen.getAllByRole("columnheader");
    const tableRows = screen.getAllByRole("row");

    expect(tableHeader).toBeDefined();
    expect(tableHeader).toHaveLength(7);
    expect(tableRows).toHaveLength(1);
  });
});
