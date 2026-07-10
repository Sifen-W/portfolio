"use client";

import { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (observer && ref.current) {
              observer.unobserve(ref.current);
            }
          }
        },
        { 
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await submitContactForm(formData);
    setStatus(result.success ? "success" : "error");
  }

  return (
    <section ref={ref} id="contact" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className={`font-mono-custom text-sm text-[rgb(var(--accent-teal))] mb-2 ${
          isInView ? "animate-fade-up" : "opacity-0"
        }`}>
          _contact-me
        </p>
        <h2 className={`text-3xl font-medium mb-10 md:text-4xl ${
          isInView ? "animate-fade-up-delay-1" : "opacity-0"
        }`}>
          Let's talk
        </h2>

        <div className={`grid gap-10 rounded-2xl border border-white/10 bg-[rgb(var(--bg-surface))] p-8 md:grid-cols-2 md:p-12 ${
          isInView ? "animate-fade-up-delay-2" : "opacity-0"
        }`}>
          {/* Left column — info */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Get in touch</h3>
              <p className="text-sm leading-relaxed text-[rgb(var(--text-muted))]">
                I'm always open to new opportunities and interesting projects.
                Feel free to reach out or fill out the form and I'll get back
                to you as soon as I can.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                <Mail size={16} className="text-[rgb(var(--accent-teal))]" />
              </span>
              <span className="font-mono-custom text-sm text-[rgb(var(--text-primary))]">
                sifenwoldemariam3@gmail.com
              </span>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            {status === "success" ? (
              <p className="font-mono-custom text-[rgb(var(--accent-teal))]">
                // message sent — I'll get back to you soon.
              </p>
            ) : (
              <form action={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-white/5 border-white/10"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="bg-white/5 border-white/10"
                />
                <Textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  className="bg-white/5 border-white/10"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[rgb(var(--accent-teal))] text-black hover:bg-[rgb(var(--accent-teal))]/90"
                >
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
        </div>
      </div>
    </section>
  );
}