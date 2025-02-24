"use client";
import { useState } from "react";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  const [isText, setIsText] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
    <section>
      <Header
        setIsText={setIsText}
        isText={isText}
        setIsDark={setIsDark}
        isDark={isDark}
      />
      <Projects isText={isText} />
    </section>
  );
}
