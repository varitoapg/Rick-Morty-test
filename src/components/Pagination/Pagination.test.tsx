import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Pagination } from "./Pagination";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  CharacterContext,
  CharacterContextValue,
  initialCharacterContextValue,
} from "../../context/CharacterContext/CharacterContext";

describe("Pagination", () => {
  afterEach(cleanup);

  it("renders previous and next buttons", () => {
    render(<Pagination />);

    const previousButton = screen.getByText("Previous page");
    const nextButton = screen.getByText("Next page");

    expect(previousButton).toBeDefined();
    expect(nextButton).toBeDefined();
  });

  it("disables previous button when there is no previous page", () => {
    render(<Pagination />);

    const previousButton = screen.getByText("Previous page");

    expect(previousButton.getAttribute("disabled")).toBeDefined();
  });

  it("disables next button when there is no next page", () => {
    const contextValue: CharacterContextValue = {
      ...initialCharacterContextValue,
      nextPage: null,
    };
    render(
      <CharacterContext.Provider value={contextValue}>
        <Pagination />
      </CharacterContext.Provider>
    );

    const nextButton = screen.getByText("Next page");

    expect(nextButton.getAttribute("disabled")).toBeDefined();
  });

  describe("When current page is 2 and the Next page button is clicked", () => {
    it("Should call goToPage with 3", () => {
      const initialPage = 2;
      const finalPage = 3;
      const mockGoToPage = vi.fn();
      const contextValue: CharacterContextValue = {
        ...initialCharacterContextValue,
        nextPage: "next-url",
        currentPage: initialPage,
        goToPage: mockGoToPage,
      };

      render(
        <CharacterContext.Provider value={contextValue}>
          <Pagination />
        </CharacterContext.Provider>
      );

      const nextButton = screen.getByText("Next page");
      fireEvent.click(nextButton);

      expect(mockGoToPage).toHaveBeenCalledWith(finalPage);
    });
  });

  describe("When current page is 3 and the previous page button is clicked", () => {
    it("Should call goToPage with 2", () => {
      const initialPage = 3;
      const finalPage = 2;
      const mockGoToPage = vi.fn();
      const contextValue: CharacterContextValue = {
        ...initialCharacterContextValue,
        previousPage: "next-url",
        currentPage: initialPage,
        goToPage: mockGoToPage,
      };

      render(
        <CharacterContext.Provider value={contextValue}>
          <Pagination />
        </CharacterContext.Provider>
      );

      const nextButton = screen.getByText("Previous page");
      fireEvent.click(nextButton);

      expect(mockGoToPage).toHaveBeenCalledWith(finalPage);
    });
  });
});
