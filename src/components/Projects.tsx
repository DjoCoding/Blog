import { PersonalProjects } from "@/constants";

import Project from "./Project";

export default function Projects() {
  return (
    <ul className="w-full flex flex-col gap-8 grow">
      {PersonalProjects.map((project, index) => (
        <li className="w-full" key={index}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
}
