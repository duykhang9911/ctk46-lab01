import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border p-6 rounded-lg hover:shadow-md transition"
          >
            <div className="flex gap-3 text-sm text-gray-500 mb-2">
              <span>{post.category}</span>
              <span>{post.date}</span>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600">
                {post.title}
              </h2>
            </Link>

            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}