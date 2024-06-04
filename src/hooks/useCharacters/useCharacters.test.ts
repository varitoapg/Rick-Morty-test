import { renderHook, waitFor } from "@testing-library/react";
import { getAllCharacters } from "../../services/api/getAllCharacters/getAllCharacters";
import { useCharacters } from "./useCharacters";
import { beforeEach, describe, vi, Mock, it, expect } from "vitest";
import {
  charactersMocked,
  extendedCharactersMocked,
} from "../../utils/testUtils/charactersMocked";
import { apiMockedResponse } from "../../utils/testUtils/apiCharactersMocked";
import {
  characterParser,
  characterSumarizeParser,
} from "../../utils/parsers/characterParser/characterParser";
import { getSomeCharacters } from "../../services/api/getSomeCharacters/getSomeCharacters";

vi.mock("../../services/api/getAllCharacters/getAllCharacters");
vi.mock("../../utils/parsers/characterParser/characterParser");
vi.mock("../../services/api/getSomeCharacters/getSomeCharacters");

describe("useCharacters", () => {
  beforeEach(() => {
    (getAllCharacters as Mock).mockClear();
    (characterParser as Mock).mockClear();
    (getSomeCharacters as Mock).mockClear();
    (characterSumarizeParser as Mock).mockClear();
  });

  it("should call getAllCharacters and getSomeCharacters and parse the data correctly", async () => {
    const responseCharactersMocked = apiMockedResponse.data;
    const allCharactersParsedData = charactersMocked;
    const someCharactersParsedData = extendedCharactersMocked;

    (getAllCharacters as Mock).mockResolvedValue(responseCharactersMocked);
    (characterParser as Mock).mockReturnValue(allCharactersParsedData);
    (characterSumarizeParser as Mock).mockReturnValue(someCharactersParsedData);
    (getSomeCharacters as Mock).mockResolvedValue(responseCharactersMocked);

    const { result } = renderHook(() => useCharacters());

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.characters).toEqual(allCharactersParsedData);
      expect(result.current.sumarizedCharacters).toEqual(
        someCharactersParsedData
      );
      expect(result.current.error).toBeNull();
      expect(getAllCharacters).toHaveBeenCalledTimes(1);
      expect(characterParser).toHaveBeenCalledTimes(1);
      expect(getSomeCharacters).toHaveBeenCalledTimes(1);
      expect(characterSumarizeParser).toHaveBeenCalledTimes(1);
      expect(characterParser).toHaveBeenCalledWith(
        responseCharactersMocked.results
      );
    });
  });

  it("should handle errors during fetching characters", async () => {
    const mockError = new Error("Failed to fetch characters");

    (getAllCharacters as Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useCharacters());

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.characters).toEqual([]);
      expect(result.current.error).toBe(mockError);
      expect(getAllCharacters).toHaveBeenCalledTimes(1);
      expect(characterParser).not.toHaveBeenCalled();
    });
  });
});
