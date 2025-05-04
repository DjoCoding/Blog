import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Not Found",
  },
  description: "Blog page couldn't be found",
};

export default function NotFound() {
  return (
    <div className="px-4 grow flex items-center justify-center">
      <p className="text-lg lg:text-3xl text-foreground">
        Sorry, blog content is not written yet!
      </p>
    </div>
  );
}
