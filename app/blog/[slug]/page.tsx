import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";

export default function Page({ params }: any) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-500 mb-2">
        {post.category} - {post.date}
      </p>

      <p className="text-gray-500 mb-4">
        Tác giả: {post.author}
      </p>

      <p>{post.content}</p>
    </div>
  );
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}