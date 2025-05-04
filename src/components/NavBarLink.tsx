"use client";

import { INavBarLink } from "@/types";
import { cn } from "@/utils";
import Link from "next/link";

interface NavBarLinkProps {
  link: INavBarLink;
  isSelected: boolean;
  onClick: () => void;
}

export default function NavBarLink({
  link,
  isSelected,
  onClick: handleClick,
}: NavBarLinkProps) {
  return (
    <li>
      <Link
        className={cn(
          "theme-animate capitalize text-foreground text-lg font-bold lg:font-normal py-0.5 px-2",
          isSelected ? "lg:border-b-2 lg:border-b-foreground" : ""
        )}
        href={link.href}
        onClick={handleClick}
      >
        {link.text}
      </Link>
    </li>
  );
}
