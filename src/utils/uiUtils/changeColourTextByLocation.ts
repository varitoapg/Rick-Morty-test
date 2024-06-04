import { characterTextColors } from "./characterStyles";

export const changeColourTextByLocation = (
  status: string,
  location: string
) => {
  return `${
    status === "Dead" ? "text-gray-700" : characterTextColors[location]
  }`;
};
