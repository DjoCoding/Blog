import { INavBarLink } from "@/types";
import { cn } from "@/utils";
import Link from "next/link";

interface NavBarLinkProps {
  link: INavBarLink;
  isSelected: boolean;
}

export default function NavBarLink({ link, isSelected }: NavBarLinkProps) {
  return (
    <li>
      <Link
        className={cn(
          "theme-animate capitalize text-foreground text-lg font-bold lg:font-normal py-0.5 px-2",
          isSelected ? "border-b-2 border-b-foreground" : ""
        )}
        href={link.href}
      >
        {link.text}
      </Link>
    </li>
  );
}
