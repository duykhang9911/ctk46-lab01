import Link from "next/link";
import { Post } from "@/types/post";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const vietnameseTitles: Record<number, string> = {
  1: "Lập trình là gì? Hành trình bắt đầu từ con số 0",
  2: "Tại sao nên học Next.JS trong năm 2025",
  3: "TypeScript và những điều bạn cần biết",
  4: "Tailwind CSS — Viết CSS nhanh hơn bao giờ hết",
  5: "Server Component vs Client Component trong Next.JS",
  6: "Zod — Validate dữ liệu an toàn với TypeScript",
  7: "Cách tổ chức project Next.JS sạch và dễ bảo trì",
  8: "API Routes trong Next.JS — Tạo backend không cần server riêng",
  9: "Shadcn/ui — Component library đáng dùng nhất 2025",
  10: "Git & GitHub — Quy trình làm việc chuyên nghiệp",
};

const vietnameseExcerpts: Record<number, string> = {
  1: "Lập trình không chỉ là viết code. Đó là cách tư duy logic, giải quyết vấn đề và xây dựng những thứ hữu ích từ con số không.",
  2: "Next.JS đang dẫn đầu xu hướng phát triển web hiện đại với Server Components, App Router và khả năng tối ưu hiệu suất vượt trội.",
  3: "TypeScript giúp code của bạn an toàn hơn, dễ đọc hơn và ít bug hơn. Đây là lý do tại sao hầu hết dự án lớn đều chọn TypeScript.",
  4: "Thay vì viết CSS từ đầu, Tailwind cho phép bạn tạo giao diện đẹp trực tiếp trong HTML với các utility class có sẵn.",
  5: "Hiểu rõ sự khác biệt giữa Server và Client Component sẽ giúp bạn tối ưu hiệu suất và bảo mật cho ứng dụng Next.JS.",
  6: "Zod là thư viện validation mạnh mẽ cho TypeScript, giúp bạn kiểm tra dữ liệu đầu vào một cách type-safe và dễ dàng.",
  7: "Một project được tổ chức tốt sẽ dễ mở rộng, dễ bảo trì và giúp team làm việc hiệu quả hơn về lâu dài.",
  8: "Next.JS cho phép tạo API endpoints ngay trong project mà không cần Express hay server riêng — đơn giản và tiện lợi.",
  9: "Shadcn/ui không phải một thư viện thông thường — bạn sở hữu hoàn toàn source code và có thể tùy chỉnh theo ý muốn.",
  10: "Conventional Commits, branching strategy và pull request là những kỹ năng Git mà mọi developer chuyên nghiệp cần nắm vững.",
};

const categories = ["Công nghệ", "Học tập", "Cuộc sống"];

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Không thể tải danh sách bài viết");
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-gray-500">
          Chia sẻ kiến thức lập trình, công nghệ và kinh nghiệm học tập.
        </p>
      </div>

      <div className="flex gap-8">
        {/* Danh sách bài viết */}
        <div className="flex-1 space-y-4">
          {posts.slice(0, 10).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary">
                      {categories[post.userId % 3]}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      {new Date(2025, post.id % 12, (post.id % 28) + 1).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-snug">
                    {vietnameseTitles[post.id] ?? post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {vietnameseExcerpts[post.id] ?? post.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="w-48 shrink-0 hidden md:block">
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-3 text-sm">Danh mục</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}