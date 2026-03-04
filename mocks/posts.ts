import { Post } from "@/types/post";
export async function getMockPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5s de delay
  return posts;
}

const posts: Post[] = [
  {
    id: "1",
    slug: "introducao-ao-react-server-components",
    title: "Introdução ao React Server Components",
    summary:
      "Entenda como os React Server Components funcionam, suas vantagens em relação aos componentes tradicionais e quando utilizá-los em seus projetos.",
    category: "sistema",
    tags: ["react", "server-components", "nextjs", "performance"],
    publishedAt: new Date("2026-01-10T18:00:00-03:00"),
    updatedAt: new Date("2026-01-15T10:30:00-03:00"),
    readingTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "typescript-generics-na-pratica",
    title: "TypeScript Generics na Prática",
    summary:
      "Um guia prático sobre como usar Generics no TypeScript para escrever código mais reutilizável, seguro e expressivo.",
    category: "sistema",
    tags: ["typescript", "generics", "tipagem", "boas-praticas"],
    publishedAt: new Date("2026-01-22T20:00:00-03:00"),
    updatedAt: new Date("2026-01-22T20:00:00-03:00"),
    readingTime: 12,
  },
  {
    id: "3",
    slug: "construindo-um-jogo-2d-com-godot",
    title: "Construindo um Jogo 2D com Godot",
    summary:
      "Um passo a passo para criar seu primeiro jogo 2D com Godot 4, cobrindo cenas, scripts em GDScript, física e exportação.",
    category: "simulacao",
    tags: ["godot", "game-dev", "2d", "gdscript"],
    publishedAt: new Date("2026-02-03T09:00:00-03:00"),
    updatedAt: new Date("2026-02-05T14:00:00-03:00"),
    readingTime: 15,
    featured: true,
  },
  {
    id: "4",
    slug: "neon-genesis-evangelion-mais-que-um-anime",
    title: "Neon Genesis Evangelion: Mais que um Anime",
    summary:
      "Por que Evangelion continua sendo relevante décadas depois — uma análise sobre trauma, identidade e o que Hideaki Anno quis dizer com tudo aquilo.",
    category: "transmissao",
    tags: ["anime", "evangelion", "analise", "gainax"],
    publishedAt: new Date("2026-02-14T19:00:00-03:00"),
    updatedAt: new Date("2026-02-14T19:00:00-03:00"),
    readingTime: 10,
  },
  {
    id: "5",
    slug: "o-mito-da-produtividade-infinita",
    title: "O Mito da Produtividade Infinita",
    summary:
      "Reflexões sobre a cultura do hustle, burnout disfarçado de disciplina e por que descansar também é parte do processo.",
    category: "log",
    tags: ["produtividade", "burnout", "reflexao", "carreira"],
    publishedAt: new Date("2026-02-20T11:00:00-03:00"),
    updatedAt: new Date("2026-02-21T09:00:00-03:00"),
    readingTime: 6,
  },
  {
    id: "6",
    slug: "o-problema-do-livre-arbitrio-ainda-importa",
    title: "O Problema do Livre-Arbítrio Ainda Importa?",
    summary:
      "Da filosofia estoica ao determinismo moderno — uma exploração sobre se nossas escolhas são de fato nossas e o que isso muda na prática.",
    category: "vazio",
    tags: ["filosofia", "livre-arbitrio", "determinismo", "estoicismo"],
    publishedAt: new Date("2026-02-25T20:00:00-03:00"),
    updatedAt: new Date("2026-02-27T16:00:00-03:00"),
    readingTime: 14,
    featured: true,
  },
  {
    id: "7",
    slug: "elden-ring-e-a-arte-do-level-design",
    title: "Elden Ring e a Arte do Level Design",
    summary:
      "Como a FromSoftware construiu um mundo aberto que ensina sem tutoriais, guia sem setas e recompensa a curiosidade acima de tudo.",
    category: "simulacao",
    tags: ["elden-ring", "fromsoft", "level-design", "jogos"],
    publishedAt: new Date("2026-02-28T20:00:00-03:00"),
    updatedAt: new Date("2026-02-28T20:00:00-03:00"),
    readingTime: 11,
  },
];

const mockPosts = {
  posts: posts,
  getPosts: getMockPosts,
};

export default mockPosts;
