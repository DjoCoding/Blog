import { PersonalProjects } from "@/constants";

import Project from "./Project";

export default function Projects() {
  return (
    <ul className="w-full flex flex-col gap-8 grow">
      {PersonalProjects.map((project) => (
        <li className="w-full" key={project.description}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
}
