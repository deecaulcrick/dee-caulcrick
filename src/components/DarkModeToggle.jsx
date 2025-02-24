"use client";
import { useEffect, useState } from "react";
const DarkModeToggle = ({ setIsDark, isDark }) => {
  useEffect(() => {
    const darkMode = localStorage.getItem("theme") === "dark";
    // setIsDark(() => darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(!isDark);

    localStorage.setItem("theme", html.classList.contains("dark"));
  };
  return (
    <div
      onClick={toggleDarkMode}
      className="cursor-pointer dark:hover:text-white"
    >
      {`Dark Mode (${isDark ? "Y" : "N"})`}
    </div>
  );
};

export default DarkModeToggle;
