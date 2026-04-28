"use client";

import { useState } from "react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Hello Khang");
    setCopied(true);
  };

  return (
    <button onClick={handleCopy}>
      {copied ? "Đã copy!" : "Copy"}
    </button>
  );
}