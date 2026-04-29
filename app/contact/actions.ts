"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự").max(100),
  email: z.string().email("Email không hợp lệ"),
  message: z.string().min(5, "Nội dung phải có ít nhất 5 ký tự").max(2000),
});

export interface ContactFormState {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function sendMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };
  const result = contactSchema.safeParse(rawData);
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }
  console.log("Tin nhắn liên hệ mới:", result.data);
  return { success: true };
}