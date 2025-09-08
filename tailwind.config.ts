import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}","./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#7A1E1E", fg: "#ffffff" },
        brand2:{ DEFAULT: "#0F172A", fg: "#E2E8F0" }
      },
      boxShadow: { card: "0 6px 24px -8px rgba(0,0,0,.15)" }
    }
  },
  plugins: []
};
export default config;
