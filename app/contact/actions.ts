"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export async function sendMessage(prev: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = schema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid data" };
  }

  return { success: true };
}