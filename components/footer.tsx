import Link from "next/link";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          ~$ shutdown maiahub --save-state
        </p>

        <div className="flex items-center gap-6">
          <p className="font-mono text-sm text-muted-foreground">
            feito com Next.js
          </p>
          <Link
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="w-5 h-5" />
          </Link>
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} MaiaHub
          </p>
        </div>
      </div>
    </footer>
  );
}
