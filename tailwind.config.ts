import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#12372A",
        paper: "#F4F1EA",
        tomato: "#C8321E",
        ink: "#17160F",
        soft: "#4A483F",
        softOnGreen: "#C9D6CE",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
