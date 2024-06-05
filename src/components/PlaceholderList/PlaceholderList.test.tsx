import { render, screen } from "@testing-library/react";
import { CARDS_TO_SHOW, PlaceholderList } from "./PlaceholderList";
import { describe, expect, it } from "vitest";

describe("PlaceholderList", () => {
  it(`renders the 3 times ${CARDS_TO_SHOW} PlaceholderCard components`, () => {
    render(<PlaceholderList />);

    const placeholderCards = screen.getAllByTestId("placeholder-block");

    expect(placeholderCards.length).toBe(CARDS_TO_SHOW * 3);
  });
});
