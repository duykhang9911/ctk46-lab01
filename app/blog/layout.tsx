export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex gap-8">
        <div className="flex-1">{children}</div>

        {/* Sidebar */}
        <aside className="w-64 hidden md:block">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Danh mục</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Công nghệ</li>
              <li className="hover:text-blue-600 cursor-pointer">Học tập</li>
              <li className="hover:text-blue-600 cursor-pointer">Cuộc sống</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}