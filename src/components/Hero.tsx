export default function Hero() {
  return (
    <section id="top" className="px-7 pt-12 pb-10">
      <div className="flex items-center gap-2 font-mono text-xs text-secundary">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span>open to opportunities</span>
      </div>

      <h1 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
        I build web products, and I know what happens when they break.
      </h1>

      <p className="mt-5 max-w-md text-secondary">
        Full-stack developer working with TypeScript, React and Next.js. Two
        years of customer-facing technical support taught me to debug fast and
        explain clearly.
      </p>
      <div className="mt-7 flex gap-3 font-mono text-xs">
        <a
          href="#work"
            className="rounded-sm border border-accent bg-accent px-4 py-2 font-medium text-bg transition-colors hover:bg-transparent hover:text-accent focus-visible:bg-transparent focus-visible:text-accent"
        >
          view work
        </a>
        <a
          href="/Luis_Badilla_Resume.pdf"
          className="rounded-sm border border-lines px-4 py-2 text-primary hover:bg-primary hover:text-bg transition:ease-in-out duration-300"
        >
          resume
        </a>
      </div>
    </section>
  );
}
