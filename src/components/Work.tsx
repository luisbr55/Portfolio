import ProjectRow from "./ProjectRow";
import SectionHeader from "./SectionHeader";
import type { Project } from "../types";

const projects: Project[] = [
  {
    name: "TradeLoop",
    description:
      "Trading journal SaaS with screenshot uploads and protected routes",
    stack: ["Next.js", "Drizzle", "Neon"],
    href: "https://trade-loop-sigma.vercel.app"
  },
  {
    name: "Lotes Costa Rica",
    description:
      "Land listings platform with admin dashboard and location search",
    stack: ["Next.js", "Supabase", "Tailwind"],
    href: "https://lotes-costarica.com",
  },
  {
    name: "Movie finder",
    description: "Movie search app with TMDB API",
    stack: ["Next.js", "Tailwind"],
    href: "https://buscador-peliculas-zeta.vercel.app",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-7 pb-10">
      <SectionHeader
        title="selected work"
        aside={`${projects.length} projects`}
      />
      {projects.map((project, index) => (
        <ProjectRow key={project.name} project={project} index={index} />
      ))}
    </section>
  );
}
