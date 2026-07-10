"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, Music, Coffee } from "lucide-react";

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Express",
  "SQL", "Python", "Flutter", "Git",
];

const funFacts = [
  "once wrote a custom priority scheduler with aging for xv6",
  "built a hierarchical solar system simulator with OpenGL",
  "debugged a trap handler at the assembly level, more than once",
  "compared A* and GBFS pathfinding just to see which one lied less",
];

const interests = [
  {
    icon: BookOpen,
    label: "reading",
    detail: "no fixed genre — just whatever's currently stealing my sleep schedule",
  },
  {
    icon: Music,
    label: "music",
    detail: "always something playing while I code",
  },
  {
    icon: Coffee,
    label: "coffee",
    detail: "non-negotiable before any debugging session",
  },
];

export function About() {
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

  return (
    <section ref={ref} id="about" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className={`font-mono-custom text-sm text-[rgb(var(--accent-teal))] mb-2 ${
          isInView ? "animate-fade-up" : "opacity-0"
        }`}>
          _about-me
        </p>
        <h2 className={`text-3xl font-medium mb-6 md:text-4xl ${
          isInView ? "animate-fade-up-delay-1" : "opacity-0"
        }`}>
          A bit about me
        </h2>
        <p className={`max-w-2xl text-[rgb(var(--text-muted))] leading-relaxed ${
          isInView ? "animate-fade-up-delay-2" : "opacity-0"
        }`}>
          I'm a Software Engineering student building full-stack applications
          with a focus on clean architecture and solving real problems.
          I enjoy working across the stack — from backend systems and
          databases to polished, responsive interfaces.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`font-mono-custom text-xs rounded-full border border-white/10 px-3 py-1 text-[rgb(var(--text-muted))] ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={isInView ? {
                animationDelay: `${300 + index * 50}ms`,
                animationFillMode: "both",
              } : undefined}
            >
              {skill}
            </span>
          ))}
        </div>

        <div
          className={`mt-10 max-w-2xl rounded-xl border border-white/10 bg-[rgb(var(--bg-surface))] p-6 ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={isInView ? {
            animationDelay: "600ms",
            animationFillMode: "both",
          } : undefined}
        >
          <p className="font-mono-custom text-xs text-[rgb(var(--text-muted))] mb-3">
            // a few fun facts
          </p>
          <ul className="space-y-2">
            {funFacts.map((fact) => (
              <li key={fact} className="font-mono-custom text-xs">
                <span className="text-[rgb(var(--accent-teal))]">//</span>{" "}
                <span className="text-[rgb(var(--text-primary))]">{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`mt-10 max-w-2xl ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={isInView ? {
            animationDelay: "700ms",
            animationFillMode: "both",
          } : undefined}
        >
          <p className="font-mono-custom text-xs text-[rgb(var(--text-muted))] mb-4">
            // outside of code
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {interests.map((interest) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.label}
                  className="rounded-xl border border-white/10 p-4"
                >
                  <Icon
                    size={18}
                    className="text-[rgb(var(--accent-teal))] mb-2"
                  />
                  <p className="text-sm font-medium mb-1">{interest.label}</p>
                  <p className="text-xs text-[rgb(var(--text-muted))] leading-relaxed">
                    {interest.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}