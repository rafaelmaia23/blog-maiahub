import { ReactNode } from "react";

export default function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="container mx-auto border border-border rounded-lg bg-card shadow-lg w-11/12 sm:w-full my-4 md:my-6 lg:my-8">
      <div className="border-b border-border flex items-center gap-2 p-4">
        <div className="bg-red-500 rounded-full w-3 h-3"></div>
        <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
        <div className="bg-green-500 rounded-full w-3 h-3"></div>
        <span className="font-mono text-muted-foreground text-sm ml-2 md:text-base lg:text-lg">
          {title}
        </span>
      </div>
      <div className="px-4 lg:px-6 min-h-[70vh]">{children}</div>
    </section>
  );
}
