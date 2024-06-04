import { describe, expect, it } from "vitest";
import { changeColourTextByLocation } from "./changeColourTextByLocation";

describe("changeColourTextByLocation", () => {
  it("should return the correct text color class for 'Dead' status", () => {
    const status = "Dead";
    const location = "Earth";
    const result = changeColourTextByLocation(status, location);
    expect(result).toBe("text-gray-700");
  });

  it("should return the correct text color class for a specific location", () => {
    const status = "Alive";
    const location = "unknown";
    const result = changeColourTextByLocation(status, location);
    expect(result).toBe("text-black");
  });
});
