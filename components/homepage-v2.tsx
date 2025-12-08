import Link from "next/link"
import { t } from "@/lib/i18n"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Wrench,
  BookOpen,
  Calculator,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  Newspaper,
  Hash,
  Calendar,
} from "lucide-react"
import content from "@/lib/homepage-content.json"

const iconMap = {
  Users,
  Wrench,
  BookOpen,
  Calculator,
  Newspaper,
  TrendingUp,
  Target,
  Zap,
  Hash,
  Calendar,
}

export function HomePageV2() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-3">
              {content.hero.badge}
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t(content.hero.title)}</h1>
            <p className="text-muted-foreground mt-2">{t(content.hero.subtitle)}</p>
          </div>
        </div>
      </section>

      {/* Platform quick links with icons */}
      <section className="py-6 border-b border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="text-sm font-medium text-muted-foreground mr-1">Platforms:</span>
            {content.platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border hover:border-primary/50 hover:bg-primary/5 text-sm font-medium transition-colors"
              >
                <span>{platform.emoji}</span>
                {platform.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick navigation cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {content.quickLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <Link key={link.href} href={link.href} className="group">
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                    <CardContent className="pt-5 pb-4">
                      <div className="flex items-start justify-between">
                        <Icon className="h-7 w-7 text-primary" />
                        <Badge variant="outline" className="text-xs">
                          {link.count}
                        </Badge>
                      </div>
                      <h3 className="mt-2 font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                        {link.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {content.sections.tools.emoji} {content.sections.tools.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                {content.sections.tools.description}
              </p>
            </div>
            <Link
              href={content.sections.tools.linkHref}
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              {content.sections.tools.linkText} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.popularTools.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 bg-background">
                  <CardContent className="py-4 flex items-start gap-3">
                    <span className="text-2xl shrink-0">{tool.emoji}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                          {tool.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{tool.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {content.sections.calculators.emoji} {content.sections.calculators.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                {content.sections.calculators.description}
              </p>
            </div>
            <Link
              href={content.sections.calculators.linkHref}
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              {content.sections.calculators.linkText} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-5">
            {content.calculators.map((calc) => {
              const Icon = iconMap[calc.icon as keyof typeof iconMap]
              return (
                <Link key={calc.slug} href={`/calculators/${calc.slug}`} className="group">
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 border-dashed">
                    <CardContent className="pt-5 pb-4 text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                        {calc.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{calc.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {content.sections.guides.emoji} {content.sections.guides.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                {content.sections.guides.description}
              </p>
            </div>
            <Link
              href={content.sections.guides.linkHref}
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              {content.sections.guides.linkText} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-2">
            {content.latestGuides.map((guide, index) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block">
                <Card className="transition-all hover:shadow-md hover:border-primary/50 bg-background">
                  <CardContent className="py-3 flex items-center gap-4">
                    <span className="text-lg font-bold text-muted-foreground/50 w-6 text-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-xl shrink-0">{guide.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{guide.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - compact */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4 text-center">
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
