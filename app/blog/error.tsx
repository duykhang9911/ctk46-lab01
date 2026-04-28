"use client";

export default function Error({ error, reset }: any) {
  return (
    <div className="text-center">
      <h2 className="text-red-500">Có lỗi xảy ra</h2>
      <button onClick={reset} className="mt-4 bg-blue-500 text-white px-4 py-2">
        Thử lại
      </button>
    </div>
  );
}