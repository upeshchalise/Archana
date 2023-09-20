import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customSans: ["SegoePrint", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        customShadow: "0 0 12px 0px rgba(0 0 0 /7%)",
      },
      fontSize: {
        small: "0.625rem", //10px
        xsmall: "0.375rem", //6px
      },
      colors: {
        Green: "#1F8F2A",
        category: "#F5F5F5",
      },
      spacing: {
        notification: "22.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
