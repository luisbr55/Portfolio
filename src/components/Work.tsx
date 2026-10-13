import ProjectRow from "./ProjectRow";
import type {Project} from "../types";


const projects: Project[] = [
  {
    name: "TradeLoop",
    description:
      "Trading journal SaaS with screenshot uploads and protected routes",
    stack: ["Next.js", "Drizzle", "Neon"],
  },
  {
    name: "Lotes Costa Rica",
    description:
      "Land listings platform with admin dashboard and location search",
    stack: ["Next.js", "Supabase", "Tailwind"],
    href: "https://lotes-costarica.com",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-7 pb-10">
      <div className="flex justify-between border-b border-lines pb-3 font-mono text-xs text-secondary">
        <span>selected work</span>
        <span>{projects.length} projects</span>
      </div>
     {projects.map ((project, index)=> (
        <ProjectRow key = {project.name} project={project} index={index}/>
     ))}
    </section>
  );
}
