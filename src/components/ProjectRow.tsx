import type { Project } from "../types";

type ProjectRowProps = {
  project: Project;
  index: number;
};

export default function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <div className="grid grid-cols-[2.25rem_1fr_auto_1.5rem] items-baseline gap-3 border-b border-lines py-5 ">
      <span className="font-mono text-xs text-secondary">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-lg font-medium">{project.name}</h3>
        <p className="text-sm text-secondary mt-1">{project.description}</p>
      </div>
      <span className="font-mono text-xs text-secondary">
        {project.stack.join(" · ")}
      </span>
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name}`}
          className="hover:text-primary font-mono text-accent"
        >
          ↗
        </a>
      )}
    </div>
  );
}
