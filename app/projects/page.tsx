export default function Projects() {
  const projects = [
    { id: "1", name: "Website bán mèo", desc: "NodeJS + PostgreSQL" },
    { id: "2", name: "Game 3D", desc: "Unity + C#" },
    { id: "3", name: "Web Portfolio", desc: "NextJS + Tailwind" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="border p-4">
            <h2 className="font-bold">{p.name}</h2>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}