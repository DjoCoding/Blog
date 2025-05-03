import { ColorMap } from "@/constants";
import { IProject } from "@/types";
import { cn, formatDate } from "@/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  return (
    <Link
      href="/"
      className="group w-[calc(100%-30px)] lg:w-full theme-animate px-4 py-4 rounded-xl bg-card flex flex-col gap-2 mx-auto"
    >
      <h2 className="theme-animate text-2xl lg:text-3xl font-bold text-primary">
        {project.title}
      </h2>
      <p className="theme-animate text-[12px] lg:text-[16px] text-primary truncate">
        {project.description}
      </p>
      <div className="hidden lg:block max-h-0 group-hover:max-h-200 transition-[max-height] duration-300 ease-in-out">
        <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-foreground text-[16px]">
          {project.subDescription}
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <p className="theme-animate text-[12px] lg:text-[16px] text-primary">
          {formatDate(project.createdAt)}
        </p>
        {project.github !== null && (
          <FaGithub className={cn("theme-animate text-xl", ColorMap.github)} />
        )}
        {project.live !== null && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="theme-animate size-6 text-foreground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        )}
      </div>
    </Link>
  );
}
