import Counter from "@/components/counter";

export default function Home() {
  return (
    <main className="text-center mt-20 space-y-2">
      <h1 className="text-3xl font-bold">Xin chào </h1>
      <h2 className="text-xl">Đoàn Trương Duy Khang</h2>
      <p>MSSV: 2111844</p>
      <p>Lớp: CTK45A</p>
      <p>Email: 2111844@dlu.edu.vn</p>

      <Counter />
    </main>
  );
}