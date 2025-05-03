import Projects from "@/components/Projects";
import Welcome from "@/components/Welcome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="flex w-full grow">
      <div className="max-w-[768px] w-full mx-auto">
        <Welcome />
        <Projects />
      </div>
    </main>
  );
}
