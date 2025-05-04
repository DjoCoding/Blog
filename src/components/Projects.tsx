import Project from "./Project";
import { GET as getProjects } from "@/backend/projects";

export default function Projects() {
  const projects = getProjects();
  return (
    <ul className="w-full flex flex-col gap-8 grow">
      {projects.map((project) => (
        <li className="w-full" key={project.description}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
}
