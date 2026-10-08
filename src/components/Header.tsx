type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: '01 about', href: '#about' },
  { label: '02 work', href: '#work' },
  { label: '03 stack', href: '#stack' },
  { label: '04 contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="flex items-center justify-between px-7 py-5">
      <a href="#top" className="font-mono text-sm">
        luis<span className="text-accent">_</span>
      </a>
      <nav className="flex gap-6 font-mono text-xs text-secondary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-primary">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}