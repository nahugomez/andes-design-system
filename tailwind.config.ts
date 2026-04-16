import type { Config } from "tailwindcss";
import { cumbrePreset } from "./src/tokens/preset";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./src/**/*.{ts,tsx,md,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  presets: [cumbrePreset],
  plugins: [],
};

export default config;
