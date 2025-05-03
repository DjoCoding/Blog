import React from "react";

import { ColorMap, PersonalLinks } from "@/constants";
import { cn } from "@/utils";

export default function Welcome() {
  return (
    <div className="px-4 lg:px-0 py-2 w-full my-16 flex flex-col gap-4">
      <h1 className="theme-animate text-4xl font-bold text-foreground">Hi there 👻</h1>
      <p className="theme-animate text-lg font-normal text-foreground">
        My name is Djaoued. Welcome to my blog.
      </p>
      <ul className="flex gap-6 flex-wrap">
        {PersonalLinks.map((link) => (
          <li key={link.for}>
            <a target="blank" href={link.href}>
              {
                <link.icon
                  size={40}
                  className={cn("theme-animate bg-background", ColorMap[link.for])}
                />
              }
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
