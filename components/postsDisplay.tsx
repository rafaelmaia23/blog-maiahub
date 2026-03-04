"use client";
import { Post } from "@/types/post";
import PostCard from "./postCard";
import { useEffect, useState } from "react";
import { getMockPosts } from "@/mocks/posts";
import { TypeAnimation } from "react-type-animation";

export default function PostsDisplay() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [animated, setAnimated] = useState(false);
  const [openPostId, setOpenPostId] = useState<string | null>(null);

  const isReady = !loading && animated;

  useEffect(() => {
    getMockPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (!isReady) {
    return (
      <main>
        <TypeAnimation
          sequence={[
            "~$ conectando ao servidor...",
            500,
            "~$ conectando ao servidor...\n~$ buscando transmissões recentes...",
            500,
            "~$ conectando ao servidor...\n~$ buscando transmissões recentes...\n~$ carregando dados_",
            1000,
            () => setAnimated(true),
          ]}
          speed={70}
          style={{ whiteSpace: "pre-line" }}
          repeat={0}
        />
      </main>
    );
  }

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
    </main>
  );
}
