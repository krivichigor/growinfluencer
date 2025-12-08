import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface InternalLink {
  title: string
  href: string
  description?: string
}

interface InternalLinksProps {
  title: string
  links: InternalLink[]
}

export function InternalLinks({ title, links }: InternalLinksProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <span>{link.title}</span>
              <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
