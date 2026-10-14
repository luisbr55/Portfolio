import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="px-7 pb-10">
      <SectionHeader title="about" />
      <div className="mt-5 max-w-xl space-y-4 text-secondary">
        <p>
          {" "}
          I spent over two years in customer-facing technical support, where I
          learned to reproduce a problem, find the cause, and explain the fix to
          someone who just wants things to work. That habit shapes how I write
          code: I think about the person on the other end, and about what
          happens when something goes wrong.
        </p>
        <p>
          Today I build full-stack applications with TypeScript, React and
          Next.js. TradeLoop is a trading journal with authentication and
          screenshot uploads, and Lotes Costa Rica is a live listings platform I
          built and set up for search. I'm looking for a junior role where I can
          keep building, in a team that cares about how its product behaves for
          real users.
        </p>
      </div>
    </section>
  );
}
