import axios, { AxiosError } from "axios";
import { ApiResponse } from "../../../types/types";

const API_URL = import.meta.env.VITE_RICK_URL;

export const getAllCharacters = async (
  page: null | number
): Promise<ApiResponse["data"]> => {
  try {
    const response = (await axios.get(
      `${API_URL}character${page ? `/?page=${page}` : ""}`
    )) as ApiResponse;

    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching characters:", (error as AxiosError).message);
    throw error;
  }
};
