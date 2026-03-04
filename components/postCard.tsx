"use client";
import { Post } from "@/types/post";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";

type PostCardProps = {
  post: Post;
  isOpen: boolean;
  onToggle: () => void;
};

export default function PostCard({ post, isOpen, onToggle }: PostCardProps) {
  return (
    <article
      className="group w-full cursor-pointer border-b border-border py-6 lg:py-8"
      onClick={onToggle}
    >
      {/* linha do log */}
      <div className="grid grid-cols-[auto_1fr] gap-x-2">
        <span className="font-mono text-sm xl:text-base text-accent-foreground">
          ~$
        </span>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge
              variant={"outline"}
              className="font-mono text-sm xl:text-base text-accent-foreground"
            >
              {post.category}
            </Badge>
            <span className="font-mono text-sm xl:text-base text-accent-foreground">
              {post.publishedAt.toLocaleDateString("pt-BR").replace(/\//g, ".")}
            </span>
          </div>

          <span className="font-mono text-sm xl:text-base text-accent-foreground">
            [{post.readingTime}min]
          </span>
        </div>
        {/* <span className="font-mono text-sm xl:text-base text-accent-foreground">
          ~$
        </span>
        <div className="flex items-center gap-4">
          <Badge
            variant={"outline"}
            className="font-mono text-sm xl:text-base text-accent-foreground min-w-0"
          >
            {post.category}
          </Badge>
          <span className="font-mono text-sm xl:text-base text-accent-foreground">
            {post.publishedAt.toLocaleDateString("pt-BR").replace(/\//g, ".")}
          </span>
          <span className="flex-1" />
          <span className="font-mono text-sm xl:text-base text-accent-foreground shrink-0">
            [{post.readingTime}min]
          </span>
        </div> */}
        <span />
        <h2 className="font-display text-primary font-bold text-base md:text-lg xl:text-xl mt-4">
          {post.title}
        </h2>
        {/*hover*/}
        <span />
        <div
          className={`max-h-0 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"} group-hover:max-h-96`}
        >
          <div className="flex flex-wrap gap-4 mt-4">
            {post.tags.map((tag) => (
              <Badge
                variant={"outline"}
                key={tag}
                className="font-mono text-sm xl:text-base text-accent-foreground"
              >
                #{tag}
              </Badge>
            ))}
          </div>
          <p className="font-sans text-sm md:text-base xl:text-lg text-primary mt-4">
            {post.summary}
          </p>
          <Button
            variant={"outline"}
            className="font-mono text-sm xl:text-base text-primary mt-4"
            asChild
          >
            <Link href={`/posts/${post.slug}`}>Veja Log Completo...</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
