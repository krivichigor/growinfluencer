import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  name?: string
  label?: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center hover:text-primary transition-colors">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => {
        const itemText = item.label || item.name || ""
        return (
          <div key={item.href} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            {index === items.length - 1 ? (
              <span className="font-medium text-foreground">{itemText}</span>
            ) : (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {itemText}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
