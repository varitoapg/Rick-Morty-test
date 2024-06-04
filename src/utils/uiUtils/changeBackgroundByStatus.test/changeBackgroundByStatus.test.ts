import { describe, expect, it } from "vitest";
import { changeBackgroundByStatus } from "./changeBackgroundByStatus";

describe("changeBackgroundByStatus", () => {
  it("should return 'bg-gray-200' when status is 'Dead'", () => {
    const result = changeBackgroundByStatus("Dead", "Earth");
    expect(result).toBe("bg-gray-200");
  });

  it("should return the corresponding background color based on location", () => {
    const result = changeBackgroundByStatus("Alive", "unknown");
    expect(result).toBe("bg-green-200");
  });
});
