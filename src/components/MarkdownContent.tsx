import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <article className="group [&_*]:group:text-foreground theme-animate prose prose-sm lg:prose-lg prose-headings:underline prose-headings:text-foreground text-foreground dark:prose-invert prose-neutral">
      <ReactMarkdown
        components={{
          img: (props) => (
            <Image
              src={props.src as string}
              alt={props.alt === undefined ? "" : props.alt}
              width={400}
              height={400}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
