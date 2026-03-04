import { ReactNode } from "react";

export default function TerminalWindow({ children }: { children: ReactNode }) {
  return (
    <section className="container mx-auto border border-border rounded-lg bg-card shadow-lg w-11/12 my-2 md:my-4 lg:my-6">
      <div className="border-b border-border flex items-center gap-2 p-4">
        <div className="bg-red-500 rounded-full w-3 h-3"></div>
        <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
        <div className="bg-green-500 rounded-full w-3 h-3"></div>
        <span className="font-mono text-muted-foreground text-sm ml-2 md:text-base lg:text-lg">
          ~/maiahub/transmissoes
        </span>
      </div>
      <div className="p-4 lg:p-6 min-h-48">{children}</div>
    </section>
  );
}
