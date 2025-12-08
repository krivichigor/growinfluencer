import { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"

interface HeroSectionProps {
  badge?: string
  title: string
  description: string
  breadcrumbItems?: Array<{ label: string; href: string }>
  children?: ReactNode
}

export function HeroSection({ badge, title, description, breadcrumbItems, children }: HeroSectionProps) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-8 md:py-10">
      <div className="container mx-auto px-4">
        {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}

        <div className="max-w-3xl mt-4">
          {badge && (
            <Badge variant="secondary" className="mb-3">
              {badge}
            </Badge>
          )}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>

        {children}
      </div>
    </section>
  )
}
