import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f5f5f0",
        accent: {
          DEFAULT: "#1A65FF",
          hover: "#1A65FF",
        },
        marker: {
          blue: "#1A65FF",
          yellow: "#FFCD2E",
          red: "#FE342C",
        },
        gray: {
          muted: "#888888",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
