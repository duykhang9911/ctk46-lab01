export interface Post {
  slug: string;
  title: string;
  content: string;
  author: string;
  category: string;
  date: string;
}

export const posts: Post[] = [
  {
    slug: "nextjs",
    title: "Học NextJS",
    content: "NextJS rất mạnh",
    author: "Khang",
    category: "Frontend",
    date: "2026-04-28",
  },
  {
    slug: "tailwind",
    title: "Học Tailwind",
    content: "CSS nhanh",
    author: "Khang",
    category: "CSS",
    date: "2026-04-27",
  },
  {
    slug: "react",
    title: "Học React",
    content: "React cơ bản",
    author: "Khang",
    category: "Frontend",
    date: "2026-04-26",
  },
  {
    slug: "node",
    title: "Học NodeJS",
    content: "Backend JS",
    author: "Khang",
    category: "Backend",
    date: "2026-04-25",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}