"use client";
import { Post } from "@/types/post";
import PostCard from "./postCard";
import { useEffect, useState } from "react";
import { getMockPosts } from "@/mocks/posts";
import { TypeAnimation } from "react-type-animation";
import { PaginationControl } from "./paginationControl";
import { useSearchParams } from "next/navigation";

export default function PostsDisplay() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [animated, setAnimated] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [openPostId, setOpenPostId] = useState<string | null>(null);
  const [totalPosts, setTotalPosts] = useState(0);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const perPage = 6;

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const data = await getMockPosts(page, perPage);
      setPosts(data.posts);
      setTotalPosts(data.total);
      setLoading(false);
    }
    fetchPosts();
  }, [page]);

  if (firstLoad && !animated) {
    return (
      <main className="p-4 md:p-6 lg:p-8">
        <TypeAnimation
          sequence={[
            "~$ conectando ao servidor...",
            500,
            "~$ conectando ao servidor...\n~$ buscando transmissões recentes...",
            500,
            "~$ conectando ao servidor...\n~$ buscando transmissões recentes...\n~$ carregando dados_",
            1000,
            () => {
              setAnimated(true);
              setFirstLoad(false);
            },
          ]}
          speed={70}
          style={{ whiteSpace: "pre-line" }}
          repeat={0}
        />
      </main>
    );
  }

  if (loading)
    return (
      <main className="p-4 md:p-6 lg:p-8">
        <p className="font-mono text-accent-foreground animate-pulse">
          ~$ carregando página {page}...
        </p>
      </main>
    );

  return (
    <main>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isOpen={openPostId === post.id}
          onToggle={() =>
            setOpenPostId(openPostId === post.id ? null : post.id)
          }
        />
      ))}
      <div className="p-4">
        <PaginationControl
          currentPage={page}
          totalPages={Math.ceil(totalPosts / perPage)}
        />
      </div>
    </main>
  );
}
