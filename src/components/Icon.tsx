import { iconMap } from "@/types";
import { cn } from "@/utils";

interface IconProps {
  icon: keyof typeof iconMap;
  className: string;
}

export default function Icon({ icon, className = "" }: IconProps) {
  const Icon = iconMap[icon];
  return <Icon className={cn("theme-animate text-foreground", className)} />;
}
