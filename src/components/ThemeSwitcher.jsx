// components/ThemeSwitcher.js
"use client";
import { useState } from "react";

const themes = {
  red: { bg: "bg-redBg", text: "text-redText" },
  blue: { bg: "bg-blueBg", text: "text-blueText" },
  green: { bg: "bg-greenBg", text: "text-greenText" },
  purple: { bg: "bg-purpleBg", text: "text-purpleText" },
  yellow: { bg: "bg-yellowBg", text: "text-yellowText" },
};

export default function ThemeSwitcher({ setTheme }) {
  return (
    <div className="flex space-x-2 z-111">
      {Object.keys(themes).map((color) => (
        <button
          key={color}
          className={`px-4 py-2 rounded-lg border border-gray-300 hover:scale-105 transition-transform`}
          onClick={() => setTheme(color)}
        >
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </button>
      ))}
    </div>
  );
}
