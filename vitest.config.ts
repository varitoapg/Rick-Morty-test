/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      include: ["src/**/*"],
      exclude: ["src/main.tsx"],
    },
  },
});
