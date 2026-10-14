type NavItem = {
  num: string
  label: string
  href: string
}

const navItems: NavItem[] = [
  { num: '01', label: 'about', href: '#about' },
  { num: '02', label: 'work', href: '#work' },
  { num: '03', label: 'stack', href: '#stack' },
  { num: '04', label: 'contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="flex items-center justify-between px-7 py-5">
      <a href="#top" className="font-mono text-sm">
        luis<span className="text-accent">_</span>
      </a>
      <nav className="flex gap-4 font-mono text-xs text-secondary sm:gap-6">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-primary">
            <span className="hidden sm:inline">{item.num}{" "}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}