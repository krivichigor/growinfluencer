"use client"

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
  Gift,
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

export function HomePageV1() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-violet-50 via-background to-cyan-50 dark:from-violet-950/20 dark:via-background dark:to-cyan-950/20" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-200/30 via-transparent to-transparent dark:from-pink-900/20" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent dark:from-blue-900/20" />

      {/* Hero Section with enhanced gradients */}
      <section className="relative border-b border-border/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 dark:from-violet-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1.5 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 border-violet-200/50 dark:border-violet-800/50"
            >
              <Gift className="h-3 w-3 inline mr-1.5" />
              {content.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
              {t(content.hero.title)}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t(content.hero.subtitle)}
            </p>
          </div>
        </div>
      </section>

      {/* Platform badges with colorful gradient backgrounds */}
      <section className="py-8 border-b border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 via-transparent to-purple-50/50 dark:from-cyan-950/20 dark:via-transparent dark:to-purple-950/20" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-semibold text-muted-foreground mr-2 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 animate-pulse" />
              Popular Platforms
            </span>
            {content.platforms.map((platform, idx) => {
              const gradients = [
                "from-pink-500 to-rose-500",
                "from-red-500 to-orange-500",
                "from-violet-500 to-purple-500",
                "from-cyan-500 to-blue-500",
                "from-emerald-500 to-teal-500",
              ]
              return (
                <Link
                  key={platform.name}
                  href={platform.href}
                  className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full overflow-hidden bg-background/80 backdrop-blur-sm border border-border/60 hover:border-transparent shadow-sm hover:shadow-lg text-sm font-semibold transition-all hover:text-white"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[idx % gradients.length]} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  />
                  <span className="relative text-lg">{platform.emoji}</span>
                  <span className="relative">{platform.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick navigation cards with vibrant gradients */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {content.quickLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              // Design system colors based on content type
              const gradientMap: Record<string, { bg: string; hover: string }> = {
                "/influencers": {
                  bg: "from-rose-500 to-pink-500",
                  hover: "group-hover:from-rose-600 group-hover:to-pink-600",
                },
                "/tools": {
                  bg: "from-orange-500 to-pink-500",
                  hover: "group-hover:from-orange-600 group-hover:to-pink-600",
                },
                "/guides": {
                  bg: "from-purple-500 to-violet-500",
                  hover: "group-hover:from-purple-600 group-hover:to-violet-600",
                },
                "/calculators": {
                  bg: "from-cyan-400 to-blue-400",
                  hover: "group-hover:from-cyan-600 group-hover:to-blue-600",
                },
                "/news": {
                  bg: "from-emerald-500 to-teal-500",
                  hover: "group-hover:from-emerald-600 group-hover:to-teal-600",
                },
              }
              const colors = gradientMap[link.href] || gradientMap["/influencers"]
              return (
                <Link key={link.href} href={link.href} className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 border-2 hover:border-transparent overflow-hidden relative bg-gradient-to-br from-background to-muted/30">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <CardContent className="pt-6 pb-5 relative">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${colors.bg} shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs bg-background/80 backdrop-blur-sm"
                        >
                          {link.count}
                        </Badge>
                      </div>
                      <h3
                        className={`font-bold text-foreground group-hover:bg-gradient-to-r ${colors.hover} group-hover:bg-clip-text group-hover:text-transparent transition-all`}
                      >
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Creator Tools Section with gradient background */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-pink-50/50 dark:from-orange-950/10 dark:via-transparent dark:to-pink-950/10" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
                {content.sections.tools.emoji} {content.sections.tools.title}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                {content.sections.tools.description}
              </p>
            </div>
            <Link
              href={content.sections.tools.linkHref}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all shrink-0"
            >
              {content.sections.tools.linkText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.popularTools.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-background to-orange-50/30 dark:to-orange-950/10 border-2 hover:border-orange-200 dark:hover:border-orange-800">
                  <CardContent className="py-5 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/50 dark:to-pink-900/50 shrink-0">
                      <span className="text-3xl">{tool.emoji}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {tool.name}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/50 dark:to-pink-900/50"
                        >
                          {tool.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators Section with colorful cards */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-blue-50/50 dark:from-cyan-950/10 dark:via-transparent dark:to-blue-950/10" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent flex items-center gap-2">
                {content.sections.calculators.emoji} {content.sections.calculators.title}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                {content.sections.calculators.description}
              </p>
            </div>
            <Link
              href={content.sections.calculators.linkHref}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all shrink-0"
            >
              {content.sections.calculators.linkText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-5">
            {content.calculators.map((calc) => {
              const Icon = iconMap[calc.icon as keyof typeof iconMap]
              return (
                <Link key={calc.slug} href={`/calculators/${calc.slug}`} className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-background to-cyan-50/30 dark:to-cyan-950/10 border-2 border-dashed hover:border-solid hover:border-cyan-200 dark:hover:border-cyan-800">
                    <CardContent className="pt-6 pb-5 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-400 shadow-lg mb-3">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {calc.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{calc.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guides Section with gradient cards */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-violet-50/50 dark:from-purple-950/10 dark:via-transparent dark:to-violet-950/10" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400 bg-clip-text text-transparent flex items-center gap-2">
                {content.sections.guides.emoji} {content.sections.guides.title}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                {content.sections.guides.description}
              </p>
            </div>
            <Link
              href={content.sections.guides.linkHref}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all shrink-0"
            >
              {content.sections.guides.linkText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="space-y-3">
            {content.latestGuides.map((guide, index) => {
              const gradients = [
                "from-purple-500 to-violet-500",
                "from-pink-500 to-rose-500",
                "from-cyan-500 to-blue-500",
                "from-emerald-500 to-teal-500",
                "from-amber-500 to-orange-500",
              ]
              return (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block">
                  <Card className="transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-r from-background to-purple-50/30 dark:to-purple-950/10 border-2 hover:border-purple-200 dark:hover:border-purple-800">
                    <CardContent className="py-4 flex items-center gap-5">
                      <div
                        className={`flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} text-white font-bold shadow-lg shrink-0`}
                      >
                        {index + 1}
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/50 dark:to-violet-900/50 shrink-0">
                        <span className="text-2xl">{guide.emoji}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-lg text-foreground group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-violet-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{guide.description}</p>
                      </div>
                      <div className="shrink-0">
                        <div className="p-2 rounded-full bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/50 dark:to-violet-900/50 group-hover:from-purple-500 group-hover:to-violet-500 transition-all">
                          <ArrowRight className="h-5 w-5 text-purple-600 dark:text-purple-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section with vibrant gradient cards */}
      <section className="py-12 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 via-purple-50/50 to-pink-50/50 dark:from-violet-950/10 dark:via-purple-950/10 dark:to-pink-950/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.stats.map((stat) => {
              // Design system colors based on stat type
              const gradientMap: Record<string, string> = {
                "Creator Types": "from-rose-500 to-pink-500",
                "Tools Reviewed": "from-orange-500 to-pink-500",
                Guides: "from-purple-500 to-violet-500",
                Calculators: "from-cyan-400 to-blue-400",
              }
              const gradient = gradientMap[stat.label] || "from-violet-500 to-purple-500"
              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:scale-110"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
                  />
                  <div className="relative">
                    <div
                      className={`text-4xl md:text-5xl font-black bg-gradient-to-br ${gradient} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
