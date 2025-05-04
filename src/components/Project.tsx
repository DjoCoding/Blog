"use client";

import { useState } from "react";
import { IProject } from "@/types";
import { cn, formatDate } from "@/utils";
import Link from "next/link";
import ExpandButton from "./ExpandButton";
import Icon from "./Icon";

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggle = () => setIsExpanded((prev) => !prev);

  return (
    <article
      className="group w-[calc(100%-30px)] lg:w-full theme-animate px-4 py-4 rounded-xl bg-card flex flex-col gap-1 mx-auto h-full"
      aria-labelledby={`project-${project.name}`}
    >
      <header className="flex flex-col gap-1">
        <Link
          className="theme-animate text-foreground font-bold text-2xl lg:text-4xl h-full"
          href={`/projects/${project.name}`}
        >
          {project.title}
        </Link>
        <p className="theme-animate text-foreground text-sm truncate">
          {project.description}
        </p>
      </header>
      <div
        className={cn(
          "py-1 w-full transition-[max-height] duration-300 overflow-hidden",
          isExpanded
            ? "max-h-200 pointer-events-auto"
            : "max-h-0 pointer-events-none"
        )}
      >
        <p
          style={{
            transition: "opacity 0.3s ease",
          }}
          className={cn(
            "text-sm text-foreground theme-animate",
            isExpanded ? "opacity-100" : "opacity-0"
          )}
        >
          {project.subDescription}
        </p>
      </div>
      <footer className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="theme-animate text-foreground text-sm">
            {formatDate(project.createdAt)}
          </p>
          {project.links.map((link) => (
            <Icon key={link.href} forr={link.for} className="text-xl" />
          ))}
        </div>
        <ExpandButton toggle={toggle} isExpanded={isExpanded} />
      </footer>
    </article>
  );
}
