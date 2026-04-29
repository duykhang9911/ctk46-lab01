import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  { title: "Website bán mèo", description: "Website thương mại điện tử bán mèo cảnh.", tech: ["Node.js", "PostgreSQL"], status: "Hoàn thành" },
  { title: "Game 3D", description: "Game 3D nhập vai xây dựng bằng Unity.", tech: ["Unity", "C#"], status: "Đang phát triển" },
  { title: "Web Portfolio", description: "Website portfolio cá nhân với Next.JS.", tech: ["Next.JS", "Tailwind CSS", "TypeScript"], status: "Đang phát triển" },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge variant={project.status === "Hoàn thành" ? "default" : "secondary"}>{project.status}</Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}