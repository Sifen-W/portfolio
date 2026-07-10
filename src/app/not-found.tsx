import Link from "next/link";

import { Navbar } from "@/components/sections/navbar";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="flex min-h-[75vh] flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-10">
        <h1 className="font-mono-custom text-8xl md:text-9xl font-bold text-[rgb(var(--text-muted))]/30 tracking-tight">
          404
        </h1>

        <div className="max-w-xl font-mono-custom text-sm leading-relaxed">
          <p>
            <span className="text-[rgb(var(--accent-purple))]">const</span>{" "}
            <span className="text-[rgb(var(--text-primary))]">page</span> ={" "}
            <span className="text-[rgb(var(--accent-teal))]">findPage</span>(
            <span className="text-orange-400">"you-were-looking-for"</span>);
          </p>
          <p>&nbsp;</p>
          <p>
            <span className="text-[rgb(var(--accent-purple))]">if</span> (!page) {"{"}
          </p>
          <p className="pl-4">
            console.<span className="text-[rgb(var(--accent-teal))]">log</span>(
            <span className="text-orange-400">"Oops! Wrong turn in the codebase."</span>);
          </p>
          <p className="pl-4">
            console.<span className="text-[rgb(var(--accent-teal))]">log</span>(
            <span className="text-orange-400">"Since you're here, go back home."</span>);
          </p>
          <p className="pl-4">
            <span className="text-[rgb(var(--accent-purple))]">throw new</span> Error(
            <span className="text-orange-400">"404: PageNotFoundError"</span>);
          </p>
          <p>{"}"}</p>
          <p>&nbsp;</p>
          <p className="text-[rgb(var(--text-muted))]">// suggestions:</p>
          <p className="text-[rgb(var(--text-muted))]">// - check the URL for typos</p>
          <p className="text-[rgb(var(--text-muted))]">// - use the site navigation above</p>
          <p>&nbsp;</p>
          <p>
            <span className="text-[rgb(var(--accent-teal))]">redirect</span>(
            <Link href="/" className="text-orange-400 underline">
              "home"
            </Link>
            );
          </p>
        </div>
      </section>

    </main>
  );
}