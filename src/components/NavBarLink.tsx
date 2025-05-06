"use client";

import { INavBarLink } from "@/types";
import { cn } from "@/utils";
import Link from "next/link";

interface NavBarLinkProps {
  link: INavBarLink;
  onClick: () => void;
}

export default function NavBarLink({
  link,
  onClick: handleClick,
}: NavBarLinkProps) {
  return (
    <li className="lg:w-[90px] lg:flex items-center justify-center">
      <Link
        className={cn(
          "theme-animate capitalize text-foreground text-lg font-bold lg:font-normal py-0.5 px-2"
        )}
        href={link.href}
        onClick={handleClick}
      >
        {link.text}
      </Link>
    </li>
  );
}
