import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { generateMetadata as genMeta } from "@/lib/seo"
import { guides } from "@/lib/data/guides"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = genMeta({
  title: "Influencer Guides 2025: Expert Tutorials for Content Creators",
  description:
    "Master content creation with 5 expert guides. Learn how to become an influencer, grow on TikTok fast, negotiate brand deals, create content calendars, and choose the best equipment.",
  keywords: [
    "influencer guides",
    "creator tutorials",
    "how to become an influencer",
    "tiktok growth strategies",
    "brand deal negotiation",
    "content calendar template",
    "creator equipment guide",
  ],
  canonical: "/guides",
})

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-8 md:py-10">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Creator Guides", href: "/guides" },
            ]}
          />

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Creator Guides: Expert Advice & Step-by-Step Tutorials
          </h1>
          <p className="text-muted-foreground mt-2 max-w-3xl text-lg">
            Comprehensive guides covering every aspect of building your influencer career. From getting started to
            negotiating six-figure brand deals, we have got you covered.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{guide.emoji}</span>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {guide.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{guide.intro}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {guide.readingTime} min read
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
