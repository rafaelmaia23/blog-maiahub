export type Category =
  | "sistema"
  | "simulacao"
  | "transmissao"
  | "log"
  | "vazio";

export type Post = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: Category;
  tags: string[];
  publishedAt: Date; // "2026.02.28 - 20:00" -> Datetime with timezone
  updatedAt: Date;
  readingTime: number; // em minutos
  featured?: boolean;
};
