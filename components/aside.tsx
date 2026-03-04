import Image from "next/image";
import Link from "next/link";

// --- DADOS — edite aqui ---

const MANIFESTO = [
  { key: "OS", value: "meu pedaço da internet" },
  { key: "local", value: "Brasil" },
  { key: "stack", value: "Next.js · TypeScript · Go" },
  { key: "missão", value: "escrever sobre o que eu gostar" },
  { key: "desde", value: "2026" },
];

const STATUS = [
  { key: "jogando", value: "..." },
  { key: "assistindo", value: "..." },
  { key: "estudando", value: "..." },
  { key: "lendo", value: "..." },
];

const BANNERS: { label: string; href: string; img: string }[] = [
  // Adicione seus banners 88x31 aqui
  // { label: "Nome do site", href: "https://...", img: "/banners/site.gif" },
];

// --- COMPONENTES INTERNOS ---

function AsideSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h2 className="font-mono text-base text-primary font-bold">{title}</h2>
        <p className="font-mono text-primary/40 text-xs select-none">
          ──────────────────
        </p>
      </div>
      {children}
    </div>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <p className="font-mono text-sm">
      <span className="text-primary">{label}:</span>{" "}
      <span className="text-muted-foreground">{value}</span>
    </p>
  );
}

// --- COMPONENTE PRINCIPAL ---

export default function Aside() {
  return (
    <aside className="flex flex-col gap-6 w-11/12 mx-auto my-6 lg:mt-8 bg-card border border-border sm:w-full shadow-lg p-4 lg:p-6">
      {/* Avatar + manifesto */}
      <AsideSection title="~/rafael">
        <div className="flex flex-col items-center gap-4">
          {/* Avatar — troque pelo seu quando tiver */}
          <div className="w-32 h-32 rounded-full border-2 border-primary overflow-hidden bg-accent flex items-center justify-center">
            <span className="font-mono text-primary text-2xl select-none">
              RM
            </span>
            {/* <Image src="/avatar.png" alt="Rafael Maia" width={96} height={96} /> */}
          </div>

          {/* Manifesto */}
          <div className="w-full flex flex-col gap-1">
            {MANIFESTO.map((item) => (
              <InfoLine key={item.key} label={item.key} value={item.value} />
            ))}
          </div>
        </div>
      </AsideSection>

      {/* Status atual */}
      <AsideSection title="~/status">
        <div className="flex flex-col gap-1">
          {STATUS.map((item) => (
            <InfoLine key={item.key} label={item.key} value={item.value} />
          ))}
        </div>
      </AsideSection>

      {/* Banners 88x31 */}
      <AsideSection title="~/vizinhos">
        {BANNERS.length === 0 ? (
          <p className="font-mono text-xs text-muted-foreground">em breve...</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {BANNERS.map((banner) => (
              <Link
                key={banner.href}
                href={banner.href}
                target="_blank"
                rel="noopener noreferrer"
                title={banner.label}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={banner.img}
                  alt={banner.label}
                  width={88}
                  height={31}
                  unoptimized
                />
              </Link>
            ))}
          </div>
        )}
      </AsideSection>
    </aside>
  );
}
