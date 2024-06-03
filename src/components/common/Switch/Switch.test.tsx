import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Switch } from "./Switch";
import { afterEach, describe, expect, it, vi } from "vitest";

describe("Switch", () => {
  afterEach(cleanup);

  it("should render correctly", () => {
    const labels = ["Label 1", "Label 2"];
    render(<Switch isChecked={false} onChange={() => {}} labels={labels} />);

    screen.getByText(labels[0]);
  });

  it("should call onChange when clicked", () => {
    const onChange = vi.fn();
    const labels = ["Label 1", "Label 2"];

    render(<Switch isChecked={false} onChange={onChange} labels={labels} />);
    const expectedLabel = screen.getByText("Label 1");
    fireEvent.click(expectedLabel);

    expect(onChange).toHaveBeenCalled();
  });
});
