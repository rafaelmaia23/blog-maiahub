"use client";

import { useState } from "react";
import PostCard from "@/components/postCard";
import Pagination from "@/components/pagination";

const POSTS_PER_PAGE = 12;

interface Post {
  id: number;
  title: string;
  summary: string;
  link: string;
  image: string;
}

interface PostsGridProps {
  postsData: Post[];
}

export default function PostsGrid({ postsData }: PostsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(postsData.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = postsData.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate__animated animate__fadeIn">
        {currentPosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            summary={post.summary}
            link={post.link}
            image={post.image}
          />
        ))}
      </div>

      <Pagination
        current={currentPage}
        total={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
