import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe Print"],
      },
      boxShadow: {
        customShadow: "0 0 12px 0px rgba(0 0 0 /7%)",
      },
    },
  },
  plugins: [],
};
export default config;
