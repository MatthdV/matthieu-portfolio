import type { Config } from "tailwindcss";

// Les couleurs lisent des variables CSS (voir globals.css) pour passer en mode nuit.
const v = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: v("panel"),
        paper: v("paper"),
        tomato: v("accent"),
        ink: v("ink"),
        card: v("card"),
        soft: v("soft"),
        softOnGreen: v("soft-on-panel"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
