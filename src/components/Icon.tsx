import { ColorMap } from "@/constants";
import { iconMap } from "@/types";
import { cn } from "@/utils";

interface IconProps {
  icon: keyof typeof iconMap;
  forr: string;
  className: string;
}

export default function Icon({ icon, forr, className = "" }: IconProps) {
  const Icon = iconMap[icon];
  return <Icon className={cn("theme-animate", ColorMap[forr], className)} />;
}
