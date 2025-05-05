import { IProject } from "@/types";
import Project from "./Project";
import { GET as getProjects } from "@/backend/projects";

interface ProjectsProps {
  name?: string;
  latest?: {
    count: number;
  };
}

function getLatestProjects(projects: IProject[], count: number) {
  return projects
    .sort((a, b) => {
      const dates = {
        a: new Date(a.createdAt),
        b: new Date(b.createdAt),
      };
      return dates.b.getTime() - dates.a.getTime();
    })
    .slice(0, count);
}

export default function Projects({ name, latest }: ProjectsProps) {
  const projects = getProjects();
  const searchedProjects =
    latest !== undefined
      ? getLatestProjects(projects, latest.count)
      : name === undefined
      ? projects
      : projects.filter((project) =>
          project.name.toLowerCase().includes(name.toLowerCase())
        );

  return (
    <ul className="w-full flex flex-col gap-8 grow">
      {searchedProjects.map((project) => (
        <li className="w-full" key={project.description}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
}
