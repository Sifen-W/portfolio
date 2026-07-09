export function Hero() {
  return (
    <section
      id="hello"
      className="flex min-h-[80vh] flex-col justify-center gap-4 px-6 md:px-10"
    >
      <p className="font-mono-custom text-sm text-[rgb(var(--text-muted))]">
        Hi all. I am
      </p>
      <h1 className="text-4xl font-medium md:text-6xl">
        Sifen Woldemariam
      </h1>
      <p className="font-mono-custom text-lg text-[rgb(var(--accent-purple))] md:text-xl">
        &gt; Software Engineer
      </p>

      <div className="mt-6 space-y-1">
        <p className="font-mono-custom text-xs text-[rgb(var(--text-muted))]">
          // find my profile on Github:
        </p>
        <p className="font-mono-custom text-xs">
          <span className="text-[rgb(var(--accent-purple))]">const</span>{" "}
          <span className="text-[rgb(var(--accent-teal))]">githubLink</span>{" "}
          ={" "}
          <a
            href="https://github.com/Sifen-W"
            className="text-orange-400 underline"
          >
            "https://github.com/Sifen-W"
          </a>
        </p>
      </div>
    </section>
  );
}