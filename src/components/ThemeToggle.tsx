"use client";

import { useContext } from "react";
import { ThemeContext } from "@/lib/ThemeContext";
import Image from "next/image";

const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { toggleTheme, theme } = context;

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg">
      {theme === "light" ? (
        <Image src="/dark&Light.png" alt="Dark Mode" width={30} height={30} />
      ) : (
        <Image src="/dark&Light.png" alt="Light Mode" width={30} height={30} className="bg-white rounded-full" />
      )}
    </button>
  );
};

export default ThemeToggle;
