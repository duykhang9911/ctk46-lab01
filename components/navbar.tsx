"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow border-b">
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="font-bold text-emerald-600">
          Duy Khang
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-4">
          <Link href="/" className="text-gray-700 hover:text-emerald-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-emerald-600">About</Link>
          <Link href="/blog" className="text-gray-700 hover:text-emerald-600">Blog</Link>
          <Link href="/projects" className="text-gray-700 hover:text-emerald-600">Projects</Link>
          <Link href="/contact" className="text-gray-700 hover:text-emerald-600">Contact</Link>
        </div>

        {/* NÚT HAMBURGER (CHỈ HIỆN MOBILE) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-3 pb-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/guestbook">Guestbook</Link>
          <Link href="/pokemon">Pokédex</Link>
        </div>
      )}
    </nav>
  );
}