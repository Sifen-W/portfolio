const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Express",
  "SQL", "Python", "Flutter", "Git",
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-custom text-sm text-[rgb(var(--accent-teal))] mb-2">
          _about-me
        </p>
        <h2 className="text-3xl font-medium mb-6 md:text-4xl">
          A bit about me
        </h2>
        <p className="max-w-2xl text-[rgb(var(--text-muted))] leading-relaxed">
          I'm a computer science student building full-stack applications
          with a focus on clean architecture and solving real problems.
          I enjoy working across the stack — from backend systems and
          databases to polished, responsive interfaces.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="font-mono-custom text-xs rounded-full border border-white/10 px-3 py-1 text-[rgb(var(--text-muted))]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}