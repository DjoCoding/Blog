import React from "react";

export interface LayoutBasicProps {
    children: Readonly<React.ReactNode>
}

export interface INavBarLink {
    text: string;
    href: string;
}

export type LinkType = "github" | "discord" | "linkedin" | "live";

export interface ILink {
    href: string;
    for: LinkType;
}

export interface IProject {
    title: string;
    name:  string;
    description: string;
    subDescription: string | null;
    time: string;
    createdAt: string;
    links: ILink[];
}