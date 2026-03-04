"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full border-b border-border bg-gradient-to-b from-accent/40 to-background">
      <div className="container mx-auto px-4 py-8 md:py-10 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-sm text-muted-foreground">
            ~$ iniciando maiahub...
          </p>
          <h1 className="font-display text-primary text-3xl md:text-4xl xl:text-5xl font-bold">
            Bem vindo ao MaiaHub
          </h1>
          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-xl">
            Meu pedaço da internet. Um lugar para falar de tech, jogos, animes,
            RPG e tudo mais que eu quiser — sem filtro, sem formato fixo.
          </p>
        </div>

        <Button
          variant="outline"
          className="font-mono text-base w-full sm:w-fit"
          asChild
        >
          <Link href="#transmissoes">[ explorar transmissões ↓ ]</Link>
        </Button>
      </div>
    </section>
  );
}
