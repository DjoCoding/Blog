"use client";

import { cn } from "@/utils";
import { useEffect, useState } from "react";

export default function ThemeTogglerButton() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const toggle = () => setIsDarkTheme((prev) => !prev);

  useEffect(() => {
    setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <>
      <span id="darkmode" role="button" tabIndex={0} onClick={toggle}>
        <div className="darkmode_icon">
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
        </div>
      </span>
    </>
  );
}
