import { NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  // mutate trực tiếp array
  const index = guestbookEntries.findIndex((m) => m.id === id);

  if (index !== -1) {
    guestbookEntries.splice(index, 1);
  }

  return NextResponse.json({ success: true });
}