import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { afterEach, expect, it } from "vitest";
import { describe } from "node:test";
import {
  CharacterContext,
  CharacterContextValue,
  initialCharacterContextValue,
} from "../../context/CharacterContext/CharacterContext";
import { CARDS_TO_SHOW } from "../PlaceholderList/PlaceholderList";
import { extendedCharactersMocked } from "../../utils/testUtils/charactersMocked";

describe("App", () => {
  afterEach(cleanup);

  it("renders App component", () => {
    render(<App />);
  });

  describe("When isLoading is true", () => {
    it("Should render LoadingGrid", () => {
      const contextValue: CharacterContextValue = {
        ...initialCharacterContextValue,
        isLoading: true,
      };

      render(
        <CharacterContext.Provider value={contextValue}>
          <App />
        </CharacterContext.Provider>
      );
      const placeholderCards = screen.getAllByTestId("placeholder-block");

      expect(placeholderCards.length).toBe(CARDS_TO_SHOW * 3);
    });
  });

  describe("When switch is clicked", () => {
    it("Should render CharacterTable", () => {
      const contextValue: CharacterContextValue = {
        ...initialCharacterContextValue,
        sumarizedCharacters: extendedCharactersMocked,
      };
      render(
        <CharacterContext.Provider value={contextValue}>
          <App />
        </CharacterContext.Provider>
      );

      const expectedSwitch = screen.getByText("Grid");
      fireEvent.click(expectedSwitch);

      const tableHeader = screen.getAllByRole("columnheader");
      const tableRows = screen.getAllByRole("row");

      expect(tableHeader).toBeDefined();
      expect(tableHeader).toHaveLength(7);
      expect(tableRows).toHaveLength(extendedCharactersMocked.length + 1);
    });
  });
});
