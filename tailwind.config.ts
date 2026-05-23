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
          blush: "#F5E8EC",
          sage: "#9BAA95",
          cream: "#FAF6F0",
          dark: "#1c1c1c",
          gray: "#7A7268",
          light: "#EFF2EC",
          accent: "#9BAA95",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
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
