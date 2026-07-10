import Image from "next/image";

export function Hero() {
  return (
    <section id="hello" className="flex min-h-[80vh] items-center px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-4">
          <p className="font-mono-custom text-sm text-[rgb(var(--text-muted))] animate-fade-up">
            Hi all. I am
          </p>
          <h1 className="text-4xl font-medium md:text-6xl animate-fade-up-delay-1">
            Sifen Woldemariam
          </h1>
          <p className="font-mono-custom text-lg text-[rgb(var(--accent-purple))] md:text-xl animate-fade-up-delay-2">
            &gt; Software Engineer
          </p>

          <div className="mt-6 space-y-1 animate-fade-up-delay-3">
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
                https://github.com/Sifen-W
              </a>
            </p>
          </div>
        </div>

        <div className="relative flex-shrink-0 animate-float">
          <div className="absolute inset-0 rounded-full bg-[rgb(var(--accent-teal))]/20 blur-3xl animate-pulse-glow" />
          <Image
            src="https://res.cloudinary.com/xwtly6vy/image/upload/v1783649748/avatar_bojtl7.jpg"
            alt="Sifen Woldemariam"
            width={500}
            height={500}
            className="relative rounded-2xl border border-white/5 shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}