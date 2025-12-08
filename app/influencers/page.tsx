import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { generateMetadata as genMeta } from "@/lib/seo"
import { influencerTypes } from "@/lib/data/influencer-types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroSection } from "@/components/hero-section"

export const metadata: Metadata = genMeta({
  title: "Types of Influencers: Complete Guide to 8 Creator Niches (2025)",
  description:
    "Discover 8 influencer types: TikTok creators, YouTubers, Twitch streamers, Instagram influencers, podcasters, micro-influencers & more. Find your perfect creator path with detailed guides.",
  keywords: [
    "types of influencers",
    "influencer niches",
    "content creator types",
    "tiktok creator",
    "youtuber",
    "twitch streamer",
    "instagram influencer",
    "micro influencer",
    "podcaster",
    "gamer creator",
  ],
  canonical: "/influencers",
})

const influencerTags: Record<string, string[]> = {
  "tiktok-creator": ["Short-Form Video", "Viral Trends", "Gen Z Audience"],
  youtuber: ["Long-Form Content", "Ad Revenue", "Search Discovery"],
  "instagram-creator": ["Visual Storytelling", "Reels & Stories", "Brand Aesthetics"],
  "twitch-streamer": ["Live Streaming", "Real-Time Chat", "Subscriber Revenue"],
  "gamer-creator": ["Gaming Content", "Let's Plays", "Esports"],
  "all-in-one-creator": ["Multi-Platform", "Cross-Promotion", "Diversified Income"],
  "micro-influencer": ["High Engagement", "Niche Authority", "Authentic Connection"],
  podcaster: ["Audio Content", "Long Interviews", "Loyal Listeners"],
}

export default function InfluencersPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        section="influencers"
        breadcrumbItems={[{ label: "Influencer Types", href: "/influencers" }]}
        title="Types of Influencers: Find Your Creator Path"
        description="Explore 8 different influencer types and discover which content creation style matches your passion, skills, and goals. Each path offers unique opportunities for growth and monetization."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {influencerTypes.map((type) => (
              <Link key={type.slug} href={`/influencers/${type.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-rose-200 dark:hover:border-rose-800/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{type.emoji}</span>
                      <CardTitle className="text-lg group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{type.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{type.shortDesc}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {influencerTags[type.slug]?.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-end">
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Not Sure Which Path to Choose?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our comprehensive starter guide walks you through choosing the right platform based on your strengths and
            goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/how-to-become-an-influencer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Read Starter Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Try Free Calculators
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
