import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) notFound();
  return res.json();
}

async function getUser(userId: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return res.json();
}

export default async function Page({ params }: any) {
  const post = await getPost(params.id);
  const user = await getUser(post.userId);

  return (
    <div className="p-6">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>

          <p className="text-gray-500 mb-4">
            Tác giả: {user.name}
          </p>

          <p>{post.body}</p>
        </CardContent>
      </Card>
    </div>
  );
}