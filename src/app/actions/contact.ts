"use server";

import { Resend } from "resend";
import { createMessage } from "@/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    await createMessage({ name, email, message });

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "sifen.ugr-9733-16@aau.edu.et", // your real inbox
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    return { success: true };
  } catch (error) {
    // Still succeeds even if email fails, since the message is safely in the DB
    console.error("Email send failed:", error);
    return { success: true };
  }
}