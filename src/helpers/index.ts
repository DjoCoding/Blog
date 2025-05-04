import path from "path";
import fs from "fs"

import { IProject } from "@/types";
import { pathToProjectsFolder } from "@/constants";

export function getProjectMetaData(name: string) {
    const filepath = path.join(
        process.cwd(),
        pathToProjectsFolder,
        `${name}/metadata.json`
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
}

export function getProjectMarkdownContent(name: string) {
    const filepath = path.join(
        process.cwd(),
        pathToProjectsFolder,
        `${name}/content.md`
    );

    if (!fs.existsSync(filepath)) return null;

    const fileContent = fs.readFileSync(filepath).toString();
    return fileContent;
}