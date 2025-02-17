import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8fafc",
        secondary: "#94a3b8",
        accent: "#172554",
        bgPrimary: "#020617",
        // dark: "#1F2937",
        // light: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
