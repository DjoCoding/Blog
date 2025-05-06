"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavBarLinks } from "@/constants";
import { cn } from "@/utils";

import NavBarLink from "./NavBarLink";
import MenuButton from "./MenuButton";

export default function Menu() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [selectedLinkIndex, setSelectedLinkIndex] = useState<number>(-1);
  const toggle = () => setIsMenuOpened((prev) => !prev);
  const close = () => setIsMenuOpened(false);

  const pathname = usePathname();

  useEffect(() => {
    setSelectedLinkIndex(
      NavBarLinks.findIndex((link) => link.href === pathname)
    );
  }, [pathname]);

  return (
    <>
      <MenuButton isMenuOpened={isMenuOpened} onClick={toggle} />
      <nav
        className={cn(
          "z-900 fixed inset-0 bg-background transition-all duration-300 lg:static lg:bg-transparent lg:h-fit",
          isMenuOpened ? "max-lg:translate-x-0" : "max-lg:translate-x-full"
        )}
      >
        <ul className="max-lg:mt-14 flex flex-col px-12 py-4 gap-6 lg:p-0 lg:flex-row lg:justify-center lg:items-center lg:gap-0">
          {NavBarLinks.map((link) => (
            <NavBarLink link={link} key={link.text} onClick={close} />
          ))}
        </ul>
        <div
          style={{
            transform: `translateX(calc(90px*${selectedLinkIndex}))`,
          }}
          className={cn(
            "hidden border-b-2 border-foreground w-[90px] transition-transform duration-300",
            selectedLinkIndex === -1 ? "lg:hidden" : "lg:block"
          )}
        ></div>
      </nav>
    </>
  );
}
