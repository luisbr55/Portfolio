type ContactLink = {
  label: string;
  href: string;
};

const links: ContactLink[] = [
  { label: "github", href: "https://github.com/luisbr55" },
  { label: "linkedin", href: "https://www.linkedin.com/in/luis-badilla/" },
  { label: "email", href: "mailto:luisbadilla55@hotmail.com" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex justify-between px-7 py-5 font-mono text-xs text-secondary"
    >
      <div className="flex gap-4">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <a
              key={link.label}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="hover:text-primary"
            >
              {link.label}
            </a>
          );
        })}
      </div>
      <span>san josé, cr</span>
    </footer>
  );
}