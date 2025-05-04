import { cn } from "@/utils";

interface ExpandButtonProps {
  toggle: () => void;
  isExpanded: boolean;
}

export default function ExpandButton({
  toggle,
  isExpanded,
}: ExpandButtonProps) {
  return (
    <button
      type="button"
      onClick={toggle}
      className="z-2 text-foreground p-1 theme-animate rounded hover:bg-foreground hover:text-background transition-colors duration-200 cursor-pointer"
      aria-label="Open options"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={cn(
          "size-6 theme-animate transition-[rotate] duration-300",
          isExpanded ? "rotate-180" : "rotate-0"
        )}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
}
