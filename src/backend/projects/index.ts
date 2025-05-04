import { IProject } from "@/types";
import fs from "fs";
import path from "path";

export function GET() {
    const pathToProjectDir = path.join(process.cwd(), "src/projects");
    const projects = fs.readdirSync(pathToProjectDir);
    const projectsMetadata = projects.map((project) => {
      const filepath = path.join(
        process.cwd(),
        "src/projects",
        `${project}/metadata.json`
      );
  
      if (!fs.existsSync(filepath)) return null;
  
      const fileContent = fs.readFileSync(filepath).toString();
      try {
        const json = JSON.parse(fileContent) as IProject;
        return json;
      } catch (err) {
        console.log(err);
        return null;
      }
    });
  
    return projectsMetadata.filter((data) => data !== null);
  }