import SectionHeader from "./SectionHeader";
import type { StackGroup } from "../types";

const groups: StackGroup[] = [
  { name: "frontend", items: ["React", "Next.js", "Tailwind", "TypeScript"] },
  { name: "backend", items: ["Node.js", "Neon", "Drizzle", "Supabase"] },
  { name: "tools", items: ["Git", "Vercel", "Netlify", "Postman"] },
];

export default function Stack() {
  return (
    <section id="stack" className="px-7 pb-10">
      <SectionHeader title="stack" />
      {groups.map((group) => (
        <div
          key={group.name}
          className="grid grid-cols-[7rem_1fr] gap-3 border-b border-lines py-4"
        >
          <span className="font-mono text-xs text-secondary">{group.name}</span>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-primary">
            {group.items.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
