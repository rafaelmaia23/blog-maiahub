import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PostsGrid from "@/components/postsGrid";

interface Post {
  id: number;
  title: string;
  summary: string;
  link: string;
  image: string;
}

// Dummy posts
const postsData: Post[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Post de Exemplo ${i + 1}`,
  summary:
    "Este é um resumo de teste do post. Serve para ver o layout do card e o efeito do hover.",
  link: `/posts/post-${i + 1}`,
  image: `https://placehold.co/600x400/${Math.floor(
    Math.random() * 999999,
  ).toString(16)}/ffffff`, // cores diferentes
}));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PostsGrid postsData={postsData} />
    </>
  );
}
