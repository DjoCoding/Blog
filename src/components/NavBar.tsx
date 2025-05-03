"use client";

import Menu from "./Menu";
import Link from "next/link";
import ThemeTogglerButton from "./ThemeTogglerButton";

export default function NavBar() {
  return (
    <header className="flex justify-center items-center">
      <div className="px-4 py-4 flex justify-between items-center max-w-[1024px] w-full">
        <div className="flex gap-4 lg:gap-8 items-center">
          <Link href="/" className="theme-animate font-bold text-xl text-foreground">
            @DjoCoding
          </Link>
          <ThemeTogglerButton />
        </div>
        <Menu />
      </div>
    </header>
  );
}
