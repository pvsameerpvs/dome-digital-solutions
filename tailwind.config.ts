import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        brand: {
          50: "#eef3ff",
          100: "#dfe9ff",
          200: "#bfd3ff",
          300: "#97b6ff",
          400: "#6d93ff",
          500: "#3a6ff7",
          600: "#214fe3",
          700: "#1a3eb8",
          800: "#17358f",
          900: "#142f73",
        },
      },
      borderRadius: { lg: "0.75rem", xl: "1rem", "2xl": "1.25rem" },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: { soft: "0 10px 30px rgba(2, 6, 23, 0.08)" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
