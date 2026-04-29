import { NextResponse } from "next/server";

let data: any[] = [];

export async function GET() {
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newItem = {
    id: Date.now(),
    name: body.name,
    message: body.message,
  };

  data.unshift(newItem);

  return NextResponse.json(newItem);
}