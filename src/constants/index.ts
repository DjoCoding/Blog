import { INavBarLink, IPersonalLink, IProject } from "@/types";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";


export const NavBarLinks: INavBarLink[] = [
    {
        text: "projects",
        href: "/projects"
    },
    {
        text: "tags",
        href: "/tags"
    },
    {
        text: "about",
        href: "/about"
    }
]

export const PersonalLinks: IPersonalLink[] = [
    {
        icon: FaLinkedin,
        href: 'https://www.linkedin.com/in/djaoued-mohammed-bouhadda-802280284/',
        for: "linkedin"
    },
    {
        icon: FaDiscord,
        href: '',
        for: "discord"
    },
    {
        icon: FaGithub,
        href: 'https://github.com/DjoCoding',
        for: "github"
    }
]

export const ColorMap: Record<string, string> = {
    linkedin: "text-linkedin",
    discord: "text-discord",
    github:  "text-github"
}

export const PersonalProjects: IProject[] = [
    {
        title: "Regex Engine",
        name: "regex-engine",
        description: "Built a regex compiler in C that parses expressions, constructs an NFA, and performs pattern matching on input strings.",
        time: "10h",
        createdAt: new Date("2025-04-10"),
        subDescription: "This project involved building a complete regular expression engine from scratch in C, starting from tokenizing the input pattern, parsing it into an abstract syntax tree using recursive descent, compiling the AST into a non-deterministic finite automaton (NFA), and implementing a matcher that simulates the NFA on input strings. It deepened my understanding of formal languages, state machines, and compiler principles, while also reinforcing manual memory management and low-level system programming in C.",
        github: null,
        live: "https://github.com/DjoCoding/regex"
    },
    {
        title: "Online Class Analyzer Extension",
        name: "online-class-analyzer",
        description: "Developed a Chrome extension that analyzes recorded class sessions by syncing video with multiple audio streams and generating participation stats.",
        time: "15h",
        createdAt: new Date("2025-04-24"),
        subDescription: "Designed to improve post-class evaluation, this extension records online class sessions, collects separate audio tracks for students and the teacher, and then sends them along with the video to a backend system. The backend synchronizes them using FFmpeg and extracts metrics such as speaker activity, silence detection, and speech sentiment. It leverages AI models for voice detection and evaluates engagement based on dialogue analysis. This project demonstrated the integration of frontend browser extension APIs with media processing and AI on the server side.",
        github: "https://github.com/DjoCoding/Moathiq-MVP",
        live: "https://moathiq-mvp.vercel.app/"
    },
    {
        title: "CHIP-8 Emulator",
        name: "chip-8",
        description: "Wrote a CHIP-8 emulator in C using SDL for graphics and input handling.",
        time: "12h",
        createdAt: new Date("2025-04-05"),
        subDescription: "A low-level systems project that involved implementing the full instruction set of the CHIP-8 virtual machine, including memory management, register simulation, timers, and display handling using SDL2. The emulator supports loading and running original CHIP-8 ROMs and renders the display at 60Hz. It was a hands-on experience in decoding binary opcodes, managing emulated hardware, and integrating audio/keyboard I/O. This project improved my debugging skills and reinforced my understanding of CPU architecture and binary-level computation.",
        github: "https://github.com/DjoCoding/c8",
        live: null
    },
    {
        title: "Generic Hashmap in C",
        name: "hashmap-in-C",
        description: "Designed a generic hashmap implementation using macros in C, similar to the generic linked list pattern.",
        time: "6h",
        createdAt: new Date("2025-05-01"),
        subDescription: "The goal was to write a reusable, type-generic hashmap data structure using preprocessor macros. It supports insertion, lookup, deletion, and resizing with open addressing or chaining strategies. I implemented both linear probing and separate chaining versions, explored hash function design (e.g., djb2), and handled memory allocation dynamically. This project sharpened my macro usage and helped me understand how C libraries (like GLib or STB) achieve generic-like behavior. It's structured in a header-only, portable way to be easily reused.",
        github: null,
        live: null
    }
];
  