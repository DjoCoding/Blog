import { ColorMap, LinkTypeToIconKeyMap } from "@/constants";
import { LinkType } from "@/types";
import { cn } from "@/utils";

interface IconProps {
  forr: LinkType;
  className: string;
}

export default function Icon({ forr, className = "" }: IconProps) {
  const Icon = LinkTypeToIconKeyMap[forr];
  return <Icon className={cn("theme-animate", ColorMap[forr], className)} />;
}
