import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { generateMetadata as genMeta } from "@/lib/seo"
import { newsArticles } from "@/lib/data/news"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroSection } from "@/components/hero-section"

export const metadata: Metadata = genMeta({
  title: "Creator News 2025: Platform Updates & Algorithm Changes",
  description:
    "Stay ahead with the latest influencer news. TikTok algorithm updates, YouTube monetization changes, Instagram Reels trends, Twitch policy updates, and creator economy insights.",
  keywords: [
    "influencer news",
    "creator economy news",
    "tiktok algorithm update",
    "youtube monetization changes",
    "instagram reels trends",
    "twitch policy update",
    "social media news",
  ],
  canonical: "/news",
})

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        section="news"
        breadcrumbItems={[{ label: "Industry News", href: "/news" }]}
        title="Industry News: Platform Updates & Creator Economy Trends"
        description="Stay informed about the latest algorithm changes, monetization updates, and market trends affecting content creators. Knowledge is power in the creator economy."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800/50">
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2 text-xs">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(article.datePublished).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {article.readingTime} min
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
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
