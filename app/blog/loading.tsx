export default function Loading() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-6 border rounded animate-pulse">
          <div className="h-6 bg-gray-200 w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 w-full"></div>
        </div>
      ))}
    </div>
  );
}