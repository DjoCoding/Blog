import path from "path";
import fs from "fs";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/MarkdownContent";
import { Metadata } from "next";
import { PersonalProjects } from "@/constants";

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
  if (!fs.existsSync(filepath)) {
    return null;
  }

  const content = fs.readFileSync(filepath, "utf-8");

  return {
    title,
    content,
  };
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (project === null) {
    return notFound();
  }
  const { content } = project;

  return (
    <main className="w-full max-w-[768px] mx-auto mt-4 px-4">
      <MarkdownContent content={content} />
    </main>
  );
}
