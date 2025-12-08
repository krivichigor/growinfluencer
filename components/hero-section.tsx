import { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"

interface HeroSectionProps {
  badge?: string
  title: string
  description: string
  breadcrumbItems?: Array<{ label: string; href: string }>
  children?: ReactNode
  section?: "influencers" | "tools" | "calculators" | "guides" | "news"
}

const sectionStyles = {
  influencers: {
    gradient: "from-rose-50/50 to-pink-50/50 dark:from-rose-950/10 dark:to-pink-950/10",
    titleGradient: "from-rose-600 to-pink-600 dark:from-rose-400 dark:to-pink-400",
  },
  tools: {
    gradient: "from-orange-50/50 to-pink-50/50 dark:from-orange-950/10 dark:to-pink-950/10",
    titleGradient: "from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400",
  },
  calculators: {
    gradient: "from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10",
    titleGradient: "from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400",
  },
  guides: {
    gradient: "from-purple-50/50 to-violet-50/50 dark:from-purple-950/10 dark:to-violet-950/10",
    titleGradient: "from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400",
  },
  news: {
    gradient: "from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/10 dark:to-teal-950/10",
    titleGradient: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400",
  },
}

export function HeroSection({
  badge,
  title,
  description,
  breadcrumbItems,
  children,
  section,
}: HeroSectionProps) {
  const styles = section ? sectionStyles[section] : null

  return (
    <section className="relative border-b border-border py-8 md:py-10 overflow-hidden">
      {/* Section-specific gradient background */}
      {styles && (
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient}`} aria-hidden="true" />
      )}
      {!styles && <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" aria-hidden="true" />}

      <div className="container mx-auto px-4 relative">
        {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}

        <div className="max-w-3xl mt-4">
          {badge && (
            <Badge variant="secondary" className="mb-3">
              {badge}
            </Badge>
          )}
          {styles ? (
            <h1 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${styles.titleGradient} bg-clip-text text-transparent`}>
              {title}
            </h1>
          ) : (
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
          )}
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>

        {children}
      </div>
    </section>
  )
}
