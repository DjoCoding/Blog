import React from "react";

import { PersonalLinks } from "@/constants";
import Icon from "./Icon";

export default function Welcome() {
  return (
    <div className="px-4 lg:px-0 w-full pb-8 flex flex-col gap-4">
      <h1 className="theme-animate text-4xl font-bold text-foreground">
        Hi there 😎
      </h1>
      <p className="theme-animate text-lg font-normal text-foreground">
        My name is Djaoued. Welcome to my blog.
      </p>
      <ul className="flex gap-6 flex-wrap">
        {PersonalLinks.map((link) => (
          <li key={link.for}>
            <a target="blank" href={link.href}>
              <Icon forr={link.for} className="theme-animate text-5xl" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
