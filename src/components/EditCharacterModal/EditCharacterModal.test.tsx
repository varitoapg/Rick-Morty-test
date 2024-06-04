import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { BasicCharacter } from "../../types/types";
import { characterMocked } from "../../utils/testUtils/charactersMocked";
import { EditCharacterModal } from "./EditCharacterModal";

describe("EditCharacterModal", () => {
  const character: BasicCharacter = characterMocked;
  afterEach(cleanup);

  it("renders the modal with character data", () => {
    render(<EditCharacterModal character={character} onClose={() => {}} />);

    screen.getByText(`Edit ${character.name}`);

    screen.getByRole("textbox", { name: "Name" });
    screen.getByRole("textbox", { name: "Status" });
    screen.getByRole("textbox", { name: "Location" });
  });

  it("updates the edited character on input change", () => {
    render(<EditCharacterModal character={character} onClose={() => {}} />);

    const nameInput = screen.getByRole("textbox", {
      name: "Name",
    }) as HTMLInputElement;
    const statusInput = screen.getByRole("textbox", {
      name: "Status",
    }) as HTMLInputElement;
    const locationInput = screen.getByRole("textbox", {
      name: "Location",
    }) as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "Morty" } });
    fireEvent.change(statusInput, { target: { value: "Dead" } });
    fireEvent.change(locationInput, { target: { value: "Dimension C-137" } });

    expect(nameInput.value).toBe("Morty");
    expect(statusInput.value).toBe("Dead");
    expect(locationInput.value).toBe("Dimension C-137");
  });

  it("calls the editCharacter function and closes the modal on form submission", () => {
    const onCloseMock = vi.fn();

    render(<EditCharacterModal character={character} onClose={onCloseMock} />);

    const locationInput = screen.getByRole("textbox", {
      name: "Location",
    }) as HTMLInputElement;

    fireEvent.change(locationInput, {
      target: { value: "Dimension C-137" },
    });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});
