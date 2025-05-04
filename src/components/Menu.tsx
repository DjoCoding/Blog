"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavBarLinks } from "@/constants";
import { cn } from "@/utils";

import NavBarLink from "./NavBarLink";
import MenuButton from "./MenuButton";

export default function Menu() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const toggle = () => setIsMenuOpened((prev) => !prev);
  const close = () => setIsMenuOpened(false);

  const pathname = usePathname();

  return (
    <>
      <MenuButton isMenuOpened={isMenuOpened} onClick={toggle} />
      <nav
        className={cn(
          "z-900 fixed inset-0 bg-background transition-all duration-300 lg:static lg:bg-transparent lg:h-fit",
          isMenuOpened ? "max-lg:translate-x-0" : "max-lg:translate-x-full"
        )}
      >
        <ul className="max-lg:mt-14 flex flex-col px-12 py-4 gap-6 lg:px-2 lg:py-2 lg:flex-row lg:justify-center lg:items-center lg:gap-8">
          {NavBarLinks.map((link) => (
            <NavBarLink
              isSelected={pathname == link.href}
              link={link}
              key={link.text}
              onClick={close}
            />
          ))}
        </ul>
      </nav>
    </>
  );
}
