"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await submitContactForm(formData);
    setStatus(result.success ? "success" : "error");
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono-custom text-sm text-[rgb(var(--accent-teal))] mb-2">
          _contact-me
        </p>
        <h2 className="text-3xl font-medium mb-6 md:text-4xl">
          Let's talk
        </h2>

        {status === "success" ? (
          <p className="font-mono-custom text-[rgb(var(--accent-teal))]">
            // message sent — I'll get back to you soon.
          </p>
        ) : (
          <form action={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Your name" required />
            <Input name="email" type="email" placeholder="Your email" required />
            <Textarea name="message" placeholder="Your message" rows={5} required />
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send message"}
            </Button>
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}