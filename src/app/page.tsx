import { Metadata } from "next";

import Projects from "@/components/Projects";
import Welcome from "@/components/Welcome";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <main className="flex w-full grow">
      <div className="max-w-[768px] w-full mx-auto flex flex-col gap-8">
        <Welcome />
        <div className="w-full grow flex flex-col gap-6 px-4 lg:px-0">
          <h1 className="theme-animate text-foreground capitalize text-4xl font-bold">
            latest projects
          </h1>
          <Projects latest={{ count: 5 }} />
        </div>
      </div>
    </main>
  );
}
