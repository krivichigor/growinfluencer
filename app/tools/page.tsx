import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { generateMetadata as genMeta } from "@/lib/seo"
import { tools } from "@/lib/data/tools"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroSection } from "@/components/hero-section"

export const metadata: Metadata = genMeta({
  title: "Best Influencer Tools 2025: 11 Essential Apps for Content Creators",
  description:
    "Discover the best tools for influencers in 2025. In-depth reviews of Hootsuite, TubeBuddy, Canva, CapCut, Streamlabs, and more with pricing, pros/cons, and setup guides.",
  keywords: [
    "influencer tools",
    "creator tools",
    "social media management tools",
    "content creation software",
    "youtube tools",
    "tiktok editing apps",
    "instagram tools",
    "streaming software",
  ],
  canonical: "/tools",
})

const categories = [...new Set(tools.map((t) => t.category))]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        section="tools"
        breadcrumbItems={[{ label: "Creator Tools", href: "/tools" }]}
        title="Best Influencer Tools: Reviews & Comparisons"
        description="Curated reviews of 11 essential tools for content creators. Find the perfect apps for scheduling, editing, analytics, and monetization with honest pricing and feature comparisons."
      >
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((cat) => (
            <Badge key={cat} variant="secondary" className="text-sm">
              {cat}
            </Badge>
          ))}
        </div>
      </HeroSection>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-orange-200 dark:hover:border-orange-800/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{tool.emoji}</span>
                      <div>
                        <Badge variant="outline" className="mb-1 text-xs">
                          {tool.category}
                        </Badge>
                        <CardTitle className="text-lg group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {tool.name}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{tool.shortDesc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{tool.rating}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
