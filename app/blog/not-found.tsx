import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1>404 - Trang không tồn tại</h1>
      <Link href="/">Về trang chủ</Link>
    </div>
  );
}