import Link from "next/link";
import Image from "next/image";
import { PokemonListResponse, Pokemon } from "@/types/pokemon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const typeColors: Record<string, string> = {
  fire: "bg-orange-100 text-orange-700",
  water: "bg-blue-100 text-blue-700",
  grass: "bg-green-100 text-green-700",
  electric: "bg-yellow-100 text-yellow-700",
  psychic: "bg-pink-100 text-pink-700",
  ice: "bg-cyan-100 text-cyan-700",
  dragon: "bg-purple-100 text-purple-700",
  dark: "bg-gray-200 text-gray-700",
  fairy: "bg-pink-100 text-pink-500",
  normal: "bg-gray-100 text-gray-600",
  fighting: "bg-red-100 text-red-700",
  poison: "bg-purple-100 text-purple-600",
  ground: "bg-yellow-100 text-yellow-800",
  flying: "bg-indigo-100 text-indigo-600",
  bug: "bg-lime-100 text-lime-700",
  rock: "bg-stone-100 text-stone-600",
  ghost: "bg-violet-100 text-violet-700",
  steel: "bg-slate-100 text-slate-600",
};

async function getPokemonList(): Promise<Pokemon[]> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Không thể tải danh sách Pokémon");
  const data: PokemonListResponse = await res.json();

  const details = await Promise.all(
    data.results.map((p) =>
      fetch(p.url, { next: { revalidate: 3600 } }).then((r) => r.json())
    )
  );
  return details;
}

export default async function PokemonPage() {
  const pokemons = await getPokemonList();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Pokédex</h1>
        <p className="text-gray-500">Danh sách 20 Pokémon đầu tiên từ PokéAPI.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemon/${pokemon.name}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer text-center">
              <CardHeader className="pb-2">
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={96}
                  height={96}
                  className="mx-auto"
                />
                <p className="text-xs text-gray-400">
                  #{String(pokemon.id).padStart(3, "0")}
                </p>
                <CardTitle className="text-base capitalize">{pokemon.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-1 pb-4">
                {pokemon.types.map(({ type }) => (
                  <span
                    key={type.name}
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      typeColors[type.name] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {type.name}
                  </span>
                ))}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}