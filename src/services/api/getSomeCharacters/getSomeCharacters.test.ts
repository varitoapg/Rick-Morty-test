import { describe, expect, it, afterEach } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ApiResponse } from "../../../types/types";
import { SOME_CHARACTER_IDS, getSomeCharacters } from "./getSomeCharacters";
import { apiMockedResponse } from "../../../utils/testUtils/apiCharactersMocked";

const mockAxios = new MockAdapter(axios);
const mockedURL = import.meta.env.VITE_RICK_URL;

describe("getSomeCharacters", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should fetch 10 first characters successfully and return an array of characters", async () => {
    const mockResponse: ApiResponse = apiMockedResponse;

    mockAxios
      .onGet(`${mockedURL}character/${SOME_CHARACTER_IDS}`)
      .reply(200, mockResponse.data);

    const response = (await getSomeCharacters()) as ApiResponse["data"];

    expect(response.results).toEqual(mockResponse.data.results);
  });

  it("should throw an error if fetching characters fails", async () => {
    const errorMessage = "Network Error";

    mockAxios
      .onGet(`${mockedURL}character/${SOME_CHARACTER_IDS}`)
      .networkError();

    await expect(getSomeCharacters()).rejects.toThrowError(errorMessage);
  });
});
