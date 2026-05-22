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
        brand: {
          pink: "#D6748B",
          dark: "#1c1c1c",
          gray: "#6b6b6b",
          light: "#f8f8f8",
          accent: "#4FFF99",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Helvetica", "Arial", "system-ui", "sans-serif"],
      },
      fontSize: {
        editorial: [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.05", fontWeight: "700", letterSpacing: "-0.5px" },
        ],
        hero: [
          "clamp(3rem, 8vw, 5rem)",
          { lineHeight: "1", fontWeight: "700", letterSpacing: "-1px" },
        ],
        statement: [
          "clamp(2.5rem, 5vw, 4rem)",
          { lineHeight: "1", fontWeight: "700", letterSpacing: "-0.5px" },
        ],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
