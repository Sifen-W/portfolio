import Image from "next/image";
import { getProjects } from "@/lib/db";

export async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-custom text-sm text-[rgb(var(--accent-teal))] mb-2">
          _projects
        </p>
        <h2 className="text-3xl font-medium mb-10 md:text-4xl">
          Things I've built
        </h2>

        {projects.length === 0 ? (
          <p className="text-[rgb(var(--text-muted))]">
            Projects coming soon.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-white/10 bg-[rgb(var(--bg-surface))] overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_10px_30px_-10px_rgba(45,212,167,0.15)]"
              >
                {project.image_url && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[rgb(var(--text-muted))] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack.split(",").map((tech) => (
                      <span
                        key={tech}
                        className="font-mono-custom text-xs rounded-full border border-white/10 px-2 py-0.5 text-[rgb(var(--accent-teal))]"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 font-mono-custom text-xs">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] underline"
                      >
                        github
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        className="text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] underline"
                      >
                        live site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}