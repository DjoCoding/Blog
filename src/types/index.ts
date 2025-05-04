import React from "react";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

export const iconMap = {
    FaGithub,
    FaDiscord,
    FaLinkedin,
    MdLiveTv
}

export interface LayoutBasicProps {
    children: Readonly<React.ReactNode>
}

export interface INavBarLink {
    text: string;
    href: string;
}

export interface ILinkIcon {
    icon: keyof typeof iconMap;
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
    links: ILinkIcon[];
}