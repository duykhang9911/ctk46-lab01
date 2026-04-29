import Link from "next/link";
import { Post } from "@/types/post";
import { Card, CardContent } from "@/components/ui/card";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) throw new Error("Fetch lỗi");

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {posts.slice(0, 10).map((post) => (
        <Card key={post.id} className="mb-4">
          <CardContent>
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-xl font-semibold hover:text-blue-500">
                {post.title}
              </h2>
            </Link>

            <p className="mt-2 text-gray-600">{post.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}