import React from "react";
import { IconType } from "react-icons";

export interface LayoutBasicProps {
    children: Readonly<React.ReactNode>
}

export interface INavBarLink {
    text: string;
    href: string;
}

export interface IPersonalLink {
    icon: IconType;
    href: string;
    for: string;
}

export interface IProject {
    title: string;
    name:  string;
    description: string;
    subDescription: string | null;
    time: string;
    createdAt: Date;
    github: string | null;
    live: string | null;
}