import { defineConfig } from "tsup";
import { copyFile } from "node:fs/promises";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "tailwind-preset": "src/tokens/preset.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  // Todo lo que ya está en peerDependencies o dependencies queda como external.
  // El consumer los resuelve desde su propio node_modules.
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "next",
    "next-themes",
    "tailwindcss",
    "clsx",
    "tailwind-merge",
    "class-variance-authority",
    "@tabler/icons-react",
    "geist",
    /^@radix-ui\//,
  ],
  esbuildOptions(options) {
    // Los componentes interactivos necesitan "use client" para Next App Router
    options.banner = {
      js: `"use client";`,
    };
  },
  async onSuccess() {
    await copyFile("src/tokens/tokens.css", "dist/styles.css");
    console.log("✓ Copied tokens.css → dist/styles.css");
  },
});
