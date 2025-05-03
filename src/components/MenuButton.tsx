"use client";
import { cn } from "@/utils";

interface MenuButtonProps {
  isMenuOpened: boolean;
  onClick: () => void;
}

export default function MenuButton({
  isMenuOpened,
  onClick: handleClick,
}: MenuButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="z-999 relative w-8 h-8 flex flex-col justify-around items-center group lg:hidden cursor-pointer"
      aria-label="Toggle Menu"
    >
      <span
        className={cn(
          "block h-0.5 w-8 bg-foreground transition-transform duration-300 ease-in-out",
          isMenuOpened ? "rotate-45 translate-y-4" : ""
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-8 bg-foreground transition-transform duration-300 ease-in-out",
          isMenuOpened ? "opacity-0" : ""
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-8 bg-foreground transition-transform duration-300 ease-in-out",
          isMenuOpened ? "-rotate-45 -translate-y-4" : ""
        )}
      />
    </button>
  );
}
