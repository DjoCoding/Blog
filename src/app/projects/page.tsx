import { Metadata } from "next";
import Projects from "@/components/Projects";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Projects",
};

interface ProjectsPageProps {
  searchParams: Promise<{
    name: string | undefined;
  }>;
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const name = (await searchParams).name;
  return (
    <div className="px-4 flex grow mx-auto w-full max-w-[768px] flex-col gap-8">
      <SearchBar />
      <Projects name={name} />
    </div>
  );
}
