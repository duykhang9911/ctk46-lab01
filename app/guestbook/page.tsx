import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addMessage } from "./actions";

async function getMessages() {
  const res = await fetch("http://localhost:3000/api/guestbook", {
    cache: "no-store",
  });
  return res.json();
}

export default async function GuestbookPage() {
  const messages = await getMessages();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Guestbook</h1>

      {/* FORM */}
      <form action={addMessage} className="space-y-3 mb-6">
        <Input name="name" placeholder="Tên của bạn" />
        <Input name="message" placeholder="Lời nhắn..." />
        <Button type="submit">Gửi</Button>
      </form>

      {/* LIST */}
      {messages.map((m: any) => (
        <Card key={m.id} className="mb-3">
          <CardContent className="p-4">
            <p className="font-bold">{m.name}</p>
            <p>{m.message}</p>

            <form
              action={async () => {
                "use server";
                await fetch(`http://localhost:3000/api/guestbook/${m.id}`, {
                  method: "DELETE",
                });
              }}
            >
              <Button variant="destructive" size="sm" className="mt-2">
                Xóa
              </Button>
            </form>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}