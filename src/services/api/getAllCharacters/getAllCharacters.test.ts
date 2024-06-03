import { describe, expect, it, afterEach } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ApiResponse } from "../../../types/types";
import { getAllCharacters } from "./getAllCharacters";
import {
  apiMockedResponse,
  apiMockedResponseSecondPage,
} from "../../../utils/testUtils/apiCharactersMocked";

const mockAxios = new MockAdapter(axios);
const mockedURL = import.meta.env.VITE_RICK_URL;

describe("getAllCharacters", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should fetch all characters successfully and return an array of characters", async () => {
    const mockResponse: ApiResponse = apiMockedResponse;

    mockAxios.onGet(`${mockedURL}character`).reply(200, mockResponse.data);

    const response = (await getAllCharacters(null)) as ApiResponse["data"];

    expect(response.results).toEqual(mockResponse.data.results);
  });

  it("should fetch all characters of second page successfully and return an array of characters", async () => {
    const mockResponse: ApiResponse = apiMockedResponse;
    const mockResponseSecondPage: ApiResponse = apiMockedResponseSecondPage;

    mockAxios.onGet(`${mockedURL}character/`).reply(200, mockResponse.data);
    mockAxios
      .onGet(`${mockedURL}character/?page=2`)
      .reply(200, mockResponseSecondPage.data);

    const response = (await getAllCharacters(2)) as ApiResponse["data"];

    expect(response.results).toEqual(mockResponseSecondPage.data.results);
  });

  it("should throw an error if fetching characters fails", async () => {
    const errorMessage = "Network Error";

    mockAxios.onGet(`${mockedURL}character`).networkError();

    await expect(getAllCharacters(null)).rejects.toThrowError(errorMessage);
  });
});
