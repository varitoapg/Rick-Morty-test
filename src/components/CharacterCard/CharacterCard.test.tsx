import { render, screen, fireEvent } from "@testing-library/react";
import { CharacterCard } from "./CharacterCard";
import { describe, it, test } from "vitest";
import { BasicCharacter } from "../../types/types";
import { characterMocked } from "../../utils/testUtils/charactersMocked";

const character: BasicCharacter = characterMocked;

describe("CharacterCard", () => {
  it("renders character name", () => {
    render(<CharacterCard character={character} />);
    screen.getByText(character.name);
  });

  test("opens edit modal on button click", () => {
    render(<CharacterCard character={character} />);
    const buttonElement = screen.getAllByRole("button");
    fireEvent.click(buttonElement[0]);
    screen.getByText(`Edit ${character.name}`);
  });
});
