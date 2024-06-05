import { cleanup, render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";
import { afterEach, describe, expect, it } from "vitest";
import { ExtendedCharacter } from "../../../types/types";
import {
  extendedCharacterMocked,
  extendedCharactersMocked,
} from "../../../utils/testUtils/charactersMocked";

describe("TableRow", () => {
  afterEach(cleanup);

  it("renders the table row with correct characteristics and type Unknown", () => {
    const character: ExtendedCharacter = extendedCharacterMocked;
    render(<TableRow character={character} />);

    expect(screen.getByText(character.name)).toBeDefined();
    expect(screen.getByText(character.status)).toBeDefined();
    expect(screen.getByText(character.location)).toBeDefined();
    expect(screen.getByText(character.species)).toBeDefined();
    expect(
      screen.getByText(character.type ? character.type : "Unknown")
    ).toBeDefined();
    expect(screen.getByText(character.gender)).toBeDefined();
    expect(screen.getByText(character.origin)).toBeDefined();
  });

  it("renders the table row with correct characteristics", () => {
    const character: ExtendedCharacter = extendedCharactersMocked[1];

    render(<TableRow character={character} />);

    expect(screen.getByText(character.name)).toBeDefined();
    expect(screen.getByText(character.status)).toBeDefined();
    expect(screen.getByText(character.location)).toBeDefined();
    expect(screen.getByText(character.species)).toBeDefined();
    expect(screen.getByText(character.type)).toBeDefined();
    expect(screen.getByText(character.gender)).toBeDefined();
    expect(screen.getByText(character.origin)).toBeDefined();
  });
});
