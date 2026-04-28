import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1>Không tìm thấy bài viết</h1>
      <Link href="/blog">Quay lại blog</Link>
    </div>
  );
}