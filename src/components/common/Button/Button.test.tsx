import { cleanup, screen, render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { afterEach, describe, expect, it, vi } from "vitest";

describe("Button", () => {
  afterEach(cleanup);

  it("renders button with correct text", () => {
    const buttonText = "Click me";

    render(<Button>{buttonText}</Button>);

    screen.getByText(buttonText);
  });

  it("calls onClick handler when clicked", () => {
    const onClickMock = vi.fn();

    render(<Button onClick={onClickMock}>Click me</Button>);
    const expectedButton = screen.getByText("Click me");
    fireEvent.click(expectedButton);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("disables button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>Click me</Button>);
    const buttonElement = screen.getByText("Click me");

    expect(buttonElement.getAttribute("disabled")).toBeDefined();
  });

  it("applies custom className to button", () => {
    const customClassName = "custom-button";
    const buttonText = "Click me";
    render(<Button className={customClassName}>{buttonText}</Button>);

    const expectedButton = screen.getByText(buttonText);

    expect(expectedButton.getAttribute(customClassName)).toBeDefined();
  });
});
