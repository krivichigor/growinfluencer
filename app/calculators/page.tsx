import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, TrendingUp, Target, Zap, Calendar, Hash } from "lucide-react"
import { generateMetadata as genMeta } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = genMeta({
  title: "Free Influencer Calculators: Engagement Rate, Fees & ROI Tools",
  description:
    "5 free calculators for content creators. Calculate engagement rate, estimate collaboration fees, measure sponsored post ROI, optimize hashtags, and generate content calendars.",
  keywords: [
    "engagement rate calculator",
    "influencer fee calculator",
    "collaboration rate estimator",
    "sponsored post roi calculator",
    "hashtag reach calculator",
    "content calendar generator",
    "influencer tools free",
  ],
  canonical: "/calculators",
})

const calculators = [
  {
    slug: "engagement-rate",
    name: "Engagement Rate Calculator",
    emoji: "📊",
    description:
      "Calculate your engagement rate based on likes, comments, shares, and followers. Compare your results to industry benchmarks.",
    icon: TrendingUp,
  },
  {
    slug: "collaboration-fee",
    name: "Collaboration Fee Estimator",
    emoji: "💰",
    description:
      "Estimate how much to charge for brand deals based on your followers, engagement rate, and niche market rates.",
    icon: Target,
  },
  {
    slug: "sponsored-post-roi",
    name: "Sponsored Post ROI Calculator",
    emoji: "📈",
    description:
      "Analyze the profitability of sponsored content campaigns. Calculate expected revenue and return on investment.",
    icon: Zap,
  },
  {
    slug: "hashtag-reach",
    name: "Hashtag Reach Estimator",
    emoji: "#️⃣",
    description:
      "Optimize your hashtag strategy for maximum content reach. Get recommendations for the ideal number of hashtags.",
    icon: Hash,
  },
  {
    slug: "content-calendar",
    name: "Content Calendar Generator",
    emoji: "📅",
    description:
      "Generate a personalized weekly content plan based on your niche. Get content ideas and posting schedules.",
    icon: Calendar,
  },
]

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-8 md:py-10">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Free Calculators", href: "/calculators" },
            ]}
          />

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Free Influencer Calculators: Make Data-Driven Decisions
          </h1>
          <p className="text-muted-foreground mt-2 max-w-3xl text-lg">
            5 powerful calculators to help you understand your worth, optimize your content strategy, and maximize your
            earnings as a content creator. 100% free, no sign-up required.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc) => (
              <Link key={calc.slug} href={`/calculators/${calc.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <calc.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{calc.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{calc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{calc.emoji}</span>
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:underline">
                        Try Now
                        <ArrowRight className="h-4 w-4" />
                      </span>
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
