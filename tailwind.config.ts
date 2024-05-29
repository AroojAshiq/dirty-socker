import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      maxWidth: {
        "7xl": "1728px",
      },
      boxShadow: {
        "custom-blue": "0 4px 6px #0078C37A", // Custom blue shadow
        "custom-xl": "0px 0px 25px 0px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        exxxl: "5120px",
        exxl: "3840px",
        exl: "2560px",
        xxxl: "1700px",
        xxl: "1550px",
        xsm: "425px",
        xxsm: "400px",
      },

      backgroundImage: (theme) => ({
        "dotted-pattern-vertical":
          "repeating-linear-gradient(to bottom, currentColor, currentColor 1px, transparent 1px, transparent 4px)",
      }),
      // spacing: {
      //   '1': '1px',
      // }
    },
  },
  plugins: [],
};
export default config;
