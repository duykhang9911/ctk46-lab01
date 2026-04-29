"use client";

import { useActionState } from "react";
import { sendMessage, ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialState: ContactFormState = { success: false };

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendMessage, initialState);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Liên hệ</h1>
      <p className="text-gray-500 mb-8">Bạn có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho tôi!</p>
      {state.success ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <h3 className="text-green-700 font-semibold text-lg mb-2">Gửi thành công!</h3>
          <p className="text-green-600">Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
        </div>
      ) : (
        <form action={formAction} className="space-y-4 max-w-lg">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Họ và tên</label>
            <Input id="name" name="name" type="text" placeholder="Nguyễn Văn A" required />
            {state.errors?.name && <p className="text-red-500 text-sm">{state.errors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <Input id="email" name="email" type="email" placeholder="email@example.com" required />
            {state.errors?.email && <p className="text-red-500 text-sm">{state.errors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Nội dung</label>
            <Input id="message" name="message" placeholder="Viết nội dung tin nhắn..." required />
            {state.errors?.message && <p className="text-red-500 text-sm">{state.errors.message[0]}</p>}
          </div>
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Đang gửi..." : "Gửi tin nhắn"}
          </Button>
        </form>
      )}
    </div>
  );
}