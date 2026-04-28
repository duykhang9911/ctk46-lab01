"use client";
import { useState } from "react";

export default function Counter() {
  const [c, setC] = useState(0);

  return (
    <div className="mt-4">
      <button onClick={() => setC(c + 1)}>Click: {c}</button>
    </div>
  );
}