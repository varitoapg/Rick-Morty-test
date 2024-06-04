import axios, { AxiosError } from "axios";
import { ApiResponse } from "../../../types/types";

const API_URL = import.meta.env.VITE_RICK_URL;
export const SOME_CHARACTER_IDS = "1,2,3,4,5,6,7,8,9,10";

export const getSomeCharacters = async (): Promise<Partial<ApiResponse>> => {
  try {
    const response = await axios.get(
      `${API_URL}character/${SOME_CHARACTER_IDS}`
    );

    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching characters:", (error as AxiosError).message);
    throw error;
  }
};
