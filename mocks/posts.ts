import { Post } from "@/types/post";
export async function getMockPosts(
  page: number,
  perPage: number,
): Promise<{ posts: Post[]; total: number }> {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5s de delay
  const slicedPosts = posts.slice((page - 1) * perPage, page * perPage);
  return { posts: slicedPosts, total: posts.length };
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
  {
    id: "8",
    slug: "arquitetura-limpa-no-nodejs",
    title: "Arquitetura Limpa no Node.js",
    summary:
      "Como aplicar os princípios de Clean Architecture em APIs Node.js para criar sistemas escaláveis, testáveis e fáceis de manter.",
    category: "sistema",
    tags: ["nodejs", "arquitetura", "clean-architecture", "backend"],
    publishedAt: new Date("2026-03-01T10:00:00-03:00"),
    updatedAt: new Date("2026-03-01T10:00:00-03:00"),
    readingTime: 13,
    featured: true,
  },
  {
    id: "9",
    slug: "react-renderizacao-e-performance",
    title: "React: Entendendo Renderização e Performance",
    summary:
      "Um mergulho profundo no ciclo de renderização do React, reconciliação, memoização e estratégias reais para evitar renders desnecessários.",
    category: "sistema",
    tags: ["react", "performance", "frontend", "renderizacao"],
    publishedAt: new Date("2026-03-02T19:00:00-03:00"),
    updatedAt: new Date("2026-03-02T19:00:00-03:00"),
    readingTime: 9,
  },
  {
    id: "10",
    slug: "criando-um-rpg-de-turno-com-javascript",
    title: "Criando um RPG de Turno com JavaScript",
    summary:
      "Da modelagem das entidades ao sistema de batalha: construindo a base lógica de um RPG de turno usando JavaScript puro.",
    category: "simulacao",
    tags: ["javascript", "rpg", "game-dev", "logica"],
    publishedAt: new Date("2026-03-03T14:00:00-03:00"),
    updatedAt: new Date("2026-03-03T14:00:00-03:00"),
    readingTime: 16,
    featured: true,
  },
  {
    id: "11",
    slug: "design-de-sistemas-para-iniciantes",
    title: "Design de Sistemas para Iniciantes",
    summary:
      "Conceitos fundamentais de escalabilidade, balanceamento de carga, filas e cache explicados de forma prática para desenvolvedores.",
    category: "sistema",
    tags: ["system-design", "backend", "escala", "infraestrutura"],
    publishedAt: new Date("2026-03-04T09:30:00-03:00"),
    updatedAt: new Date("2026-03-04T09:30:00-03:00"),
    readingTime: 18,
  },
  {
    id: "12",
    slug: "fotografia-como-forma-de-observar-o-mundo",
    title: "Fotografia como Forma de Observar o Mundo",
    summary:
      "Mais do que técnica: como a fotografia pode treinar sua percepção, atenção aos detalhes e senso estético no cotidiano.",
    category: "log",
    tags: ["fotografia", "criatividade", "arte", "observacao"],
    publishedAt: new Date("2026-03-05T17:00:00-03:00"),
    updatedAt: new Date("2026-03-05T17:00:00-03:00"),
    readingTime: 7,
  },
  {
    id: "13",
    slug: "dark-souls-e-a-filosofia-da-dificuldade",
    title: "Dark Souls e a Filosofia da Dificuldade",
    summary:
      "Por que falhar em Dark Souls é parte do aprendizado — e o que isso ensina sobre esforço, paciência e recompensa.",
    category: "simulacao",
    tags: ["dark-souls", "fromsoft", "filosofia", "jogos"],
    publishedAt: new Date("2026-03-06T20:00:00-03:00"),
    updatedAt: new Date("2026-03-06T20:00:00-03:00"),
    readingTime: 10,
  },
  {
    id: "14",
    slug: "inteligencia-artificial-e-criatividade-humana",
    title: "Inteligência Artificial e Criatividade Humana",
    summary:
      "A IA substitui ou amplia a criatividade? Uma análise sobre colaboração entre humanos e máquinas na arte e na programação.",
    category: "transmissao",
    tags: ["ia", "criatividade", "tecnologia", "futuro"],
    publishedAt: new Date("2026-03-07T18:30:00-03:00"),
    updatedAt: new Date("2026-03-07T18:30:00-03:00"),
    readingTime: 12,
    featured: true,
  },
  {
    id: "15",
    slug: "minimalismo-digital-e-foco-profundo",
    title: "Minimalismo Digital e Foco Profundo",
    summary:
      "Como reduzir distrações digitais, organizar seu ambiente de trabalho e recuperar a capacidade de concentração prolongada.",
    category: "log",
    tags: ["produtividade", "foco", "minimalismo", "carreira"],
    publishedAt: new Date("2026-03-08T08:00:00-03:00"),
    updatedAt: new Date("2026-03-08T08:00:00-03:00"),
    readingTime: 8,
  },
  {
    id: "16",
    slug: "explorando-o-espaco-com-simulacoes",
    title: "Explorando o Espaço com Simulações",
    summary:
      "Como motores físicos e simulações computacionais ajudam a entender órbitas, gravidade e missões espaciais complexas.",
    category: "vazio",
    tags: ["espaco", "simulacao", "fisica", "astronomia"],
    publishedAt: new Date("2026-03-09T21:00:00-03:00"),
    updatedAt: new Date("2026-03-09T21:00:00-03:00"),
    readingTime: 14,
  },
  {
    id: "17",
    slug: "microinteracoes-que-melhoram-ux",
    title: "Microinterações que Melhoram a Experiência do Usuário",
    summary:
      "Pequenos detalhes que fazem grande diferença: animações sutis, feedback visual e tempo de resposta na construção de interfaces modernas.",
    category: "sistema",
    tags: ["ux", "ui", "frontend", "design"],
    publishedAt: new Date("2026-03-10T15:00:00-03:00"),
    updatedAt: new Date("2026-03-10T15:00:00-03:00"),
    readingTime: 9,
  },
];

const mockPosts = {
  posts: posts,
  getPosts: getMockPosts,
};

export default mockPosts;
