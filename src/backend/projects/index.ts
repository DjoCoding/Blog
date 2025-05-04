import fs from "fs";
import path from "path";

import { getProjectMetaData } from "@/helpers";
import { pathToProjectsFolder } from "@/constants";

export function GET() {
  const pathToProjectDir = path.join(process.cwd(), pathToProjectsFolder);
  
  // get project names
  const names = fs.readdirSync(pathToProjectDir);

  // return all the projects metadata that are not null
  return names
  .map(name => getProjectMetaData(name))
  .filter((data) => data !== null);
}