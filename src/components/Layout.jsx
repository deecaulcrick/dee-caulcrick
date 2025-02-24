"use client";
// components/Layout.js
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const themes = {
  red: { bg: "bg-redBg", text: "text-redText" },
  blue: { bg: "bg-blueBg", text: "text-blueText" },
  green: { bg: "bg-greenBg", text: "text-greenText" },
  purple: { bg: "bg-purpleBg", text: "text-purpleText" },
  yellow: { bg: "bg-yellowBg", text: "text-yellowText" },
};

export default function Layout({ children }) {
  const [theme, setTheme] = useState("green");

  return (
    <div
      className={`${themes[theme].bg} ${themes[theme].text} min-h-screen transition-colors duration-300`}
    >
      <ThemeSwitcher setTheme={setTheme} />
      <main className="p-8">{children}</main>
    </div>
  );
}
