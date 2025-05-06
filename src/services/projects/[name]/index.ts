import { getProjectMarkdownContent, getProjectMetaData } from "@/helpers";

// a getter of the project's content and its metadata by its name
export function GET(name: string) {
    const content = getProjectMarkdownContent(name);
    const metadata = getProjectMetaData(name);
    if(content === null || metadata === null) return null;
    return {
        content,
        data: metadata,
    };
}