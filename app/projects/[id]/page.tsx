import { notFound } from "next/navigation";

const projects = [
  { id: "1", name: "Website bán mèo", desc: "NodeJS + PostgreSQL" },
  { id: "2", name: "Game 3D", desc: "Unity + C#" },
  { id: "3", name: "Portfolio", desc: "NextJS" },
];

export default function ProjectDetail({ params }: any) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p>{project.desc}</p>
    </div>
  );
}