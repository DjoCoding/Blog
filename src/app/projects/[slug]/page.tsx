import { notFound } from "next/navigation";
import { Metadata } from "next";

import { ColorMap } from "@/constants";

import { cn } from "@/utils";

import MarkdownContent from "@/components/MarkdownContent";
import Icon from "@/components/Icon";

import { GET as getProjects } from "@/services/projects/index";
import { GET as getProject } from "@/services/projects/[name]/index";
import { getProjectMetaData } from "@/helpers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectMetaData(slug);
  const title = project ? project.title : "";
  return {
    title,
  } as Metadata;
}

export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.name,
  }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (project === null) return notFound();

  const { content, data } = project;
  return (
    <main className="w-full max-w-[768px] mx-auto px-4 flex flex-col gap-2">
      <div className="py-4 flex items-center gap-4">
        {data.links.map((link) => (
          <div className="w-fit flex items-center py-2" key={link.href}>
            <a href={link.href} target="blank">
              <Icon
                forr={link.for}
                className={cn("theme-animate text-4xl", ColorMap[link.for])}
              ></Icon>
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 items-center">{}</div>
      <MarkdownContent content={content} />
    </main>
  );
}
