/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redBg: "#fee2e2",
        redText: "#b91c1c",
        blueBg: "#dbeafe",
        blueText: "#1e3a8a",
        greenBg: "#dcfce7",
        greenText: "#166534",
        purpleBg: "#ede9fe",
        purpleText: "#6b21a8",
        yellowBg: "#fef9c3",
        yellowText: "#ca8a04",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
