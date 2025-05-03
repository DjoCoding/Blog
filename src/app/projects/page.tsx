import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects"
}

export default function ProjectsPage() {
  return (
    <div className="flex grow mx-auto w-full max-w-[768px] mt-8">
      <Projects />
    </div>
  );
}
