import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Pokemon } from "@/types/pokemon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  params: Promise<{ name: string }>;
}

async function getPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) notFound();
  return res.json();
}

const statLabels: Record<string, string> = {
  hp: "HP",
  attack: "Tấn công",
  defense: "Phòng thủ",
  "special-attack": "Đặc công",
  "special-defense": "Đặc thủ",
  speed: "Tốc độ",
};

export default async function PokemonDetailPage({ params }: Props) {
  const { name } = await params;
  const pokemon = await getPokemon(name);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link
        href="/pokemon"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>

      <Card>
        <CardHeader className="text-center">
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width={160}
            height={160}
            className="mx-auto"
          />
          <p className="text-gray-400 text-sm">
            #{String(pokemon.id).padStart(3, "0")}
          </p>
          <CardTitle className="text-2xl capitalize">{pokemon.name}</CardTitle>
          <div className="flex justify-center gap-2 mt-2">
            {pokemon.types.map(({ type }) => (
              <Badge key={type.name} variant="secondary" className="capitalize">
                {type.name}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Thông tin cơ bản */}
          <div className="grid grid-cols-3 gap-4 text-center bg-gray-50 rounded-lg p-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Chiều cao</p>
              <p className="font-semibold">{pokemon.height / 10} m</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Cân nặng</p>
              <p className="font-semibold">{pokemon.weight / 10} kg</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Kinh nghiệm</p>
              <p className="font-semibold">{pokemon.base_experience}</p>
            </div>
          </div>

          {/* Abilities */}
          <div>
            <h3 className="font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide">
              Kỹ năng
            </h3>
            <div className="flex gap-2 flex-wrap">
              {pokemon.abilities.map(({ ability }) => (
                <Badge key={ability.name} variant="outline" className="capitalize">
                  {ability.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h3 className="font-semibold mb-3 text-sm text-gray-500 uppercase tracking-wide">
              Chỉ số
            </h3>
            <div className="space-y-2">
              {pokemon.stats.map(({ stat, base_stat }) => (
                <div key={stat.name} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-24 shrink-0">
                    {statLabels[stat.name] ?? stat.name}
                  </span>
                  <span className="text-sm font-semibold w-8 text-right">
                    {base_stat}
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width: `${Math.min((base_stat / 150) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}