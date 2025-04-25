import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ai-cubes": "url('/ai-cubes.jpeg')",
      },
      colors: {
        "green-light": "#05d31f",
        "green-dark": "#04a118",
        "green-darker": "#03660f",
      },
      fontSize: {
        base: ["1.2rem", { lineHeight: "1.5rem" }],
      },
      screens: {
        "3xl": "1680px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
