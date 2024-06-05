import { render, screen } from "@testing-library/react";
import { CharacterList } from "./CharacterList";
import { describe, it } from "vitest";
import { BasicCharacter } from "../../types/types";
import { charactersMocked } from "../../utils/testUtils/charactersMocked";

describe("CharacterList", () => {
  const characters: BasicCharacter[] = charactersMocked;

  it("renders a list of characters", () => {
    render(<CharacterList characters={characters} />);

    characters.forEach((character) => {
      screen.getByText(character.name);
    });
  });
});
