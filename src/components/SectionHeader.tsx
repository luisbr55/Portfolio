type SectionHeaderProps = {
  title: string
  aside?: string
}

export default function SectionHeader({ title, aside }: SectionHeaderProps) {
  return (
    <div className="flex justify-between border-b border-lines pb-3 font-mono text-xs text-secondary">
      <span>{title}</span>
      {aside && <span>{aside}</span>}
    </div>
  )
}