import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

import path from "path";
import fs from "fs";

import { IProject } from "@/types";
import { ColorMap, PersonalProjects } from "@/constants";
import { cn } from "@/utils";
import MarkdownContent from "@/components/MarkdownContent";
import Icon from "@/components/Icon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PersonalProjects.find((p) => p.name === slug);
  const title = project ? project.title : "";
  return {
    title,
  } as Metadata;
}

export function generateStaticParams() {
  const dirFilePath = path.join(process.cwd(), "src/projects");
  const paths = fs.readdirSync(dirFilePath);
  return paths.map((slug) => ({
    slug,
  }));
}

async function getProject(title: string) {
  const filepath = path.join(
    process.cwd(),
    "src/projects",
    `${title}/content.md`
  );

  if (!fs.existsSync(filepath)) return null;

  const content = fs.readFileSync(filepath, "utf-8");
  const data = PersonalProjects.find((project) => project.title) as IProject;

  return {
    content,
    data,
  };
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (project === null) return notFound();
  const { content, data } = project;

  return (
    <main className="w-full max-w-[768px] mx-auto px-4 flex flex-col gap-2">
      <div className="py-4 flex items-center gap-4">
        {data.links.map((link) => (
          <div className="w-fit flex items-center py-2" key={link.href}>
            <Link href={link.href}>
              <Icon
                icon={link.icon}
                className={cn("theme-animate text-4xl", ColorMap[link.for])}
              ></Icon>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 items-center">{}</div>
      <MarkdownContent content={content} />
    </main>
  );
}
