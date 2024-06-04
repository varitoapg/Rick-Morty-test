import { characterBackgroundColors } from "./characterStyles";

export const changeBackgroundByStatus = (status: string, location: string) => {
  return status === "Dead"
    ? "bg-gray-200"
    : characterBackgroundColors[location];
};
