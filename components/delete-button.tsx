"use client";

import { deleteGuestbookEntry } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";

export default function DeleteButton({ id }: { id: string }) {
  async function handleDelete() {
    if (!confirm("Bạn có chắc muốn xóa lời nhắn này?")) return;
    await deleteGuestbookEntry(id);
  }
  return (
    <Button variant="destructive" size="sm" onClick={handleDelete}>Xóa</Button>
  );
}