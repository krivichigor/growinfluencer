import Link from "next/link"
import type { Metadata } from "next"
import { t } from "@/lib/i18n"
import { generateMetadata as generateSEO, generateWebsiteSchema } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
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

export const metadata: Metadata = generateSEO({
  title: "Hub for Influencers - Complete Guide to Content Creation",
  description:
    "Your complete resource for becoming a successful content creator. Expert guides, powerful tools, calculators, and actionable advice for influencers on all platforms.",
  keywords: [
    "influencer guide",
    "content creator resources",
    "social media marketing",
    "TikTok creator",
    "YouTube growth",
    "Instagram influencer",
    "engagement calculator",
    "brand deals",
  ],
  canonical: "/",
})

const quickLinks = [
  {
    icon: Users,
    title: "Influencer Types",
    description: "Find your creator path",
    href: "/influencers",
    count: "8 types",
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "Essential software reviews",
    href: "/tools",
    count: "11 tools",
  },
  {
    icon: BookOpen,
    title: "Guides",
    description: "Step-by-step tutorials",
    href: "/guides",
    count: "5 guides",
  },
  {
    icon: Calculator,
    title: "Calculators",
    description: "Free analytics tools",
    href: "/calculators",
    count: "5 calculators",
  },
  {
    icon: Newspaper,
    title: "News",
    description: "Industry updates",
    href: "/news",
    count: "Latest",
  },
]

const platforms = [
  { name: "TikTok", emoji: "🎵", href: "/influencers/tiktok-creator" },
  { name: "YouTube", emoji: "▶️", href: "/influencers/youtuber" },
  { name: "Instagram", emoji: "📸", href: "/influencers/instagram-creator" },
  { name: "Twitch", emoji: "🎮", href: "/influencers/twitch-streamer" },
  { name: "Podcast", emoji: "🎙️", href: "/influencers/podcaster" },
]

const popularTools = [
  {
    name: "Hootsuite",
    emoji: "🦉",
    category: "Management",
    slug: "hootsuite",
    description: "Schedule & manage all social accounts",
  },
  {
    name: "TubeBuddy",
    emoji: "🎬",
    category: "YouTube",
    slug: "tubebuddy",
    description: "YouTube SEO & optimization toolkit",
  },
  {
    name: "Canva",
    emoji: "🎨",
    category: "Design",
    slug: "canva",
    description: "Create stunning visuals & thumbnails",
  },
  { name: "CapCut", emoji: "✂️", category: "Editing", slug: "capcut", description: "Professional video editing, free" },
  {
    name: "Streamlabs",
    emoji: "📡",
    category: "Streaming",
    slug: "streamlabs",
    description: "Stream with alerts & overlays",
  },
  {
    name: "SocialBlade",
    emoji: "📊",
    category: "Analytics",
    slug: "socialblade",
    description: "Track growth & analytics",
  },
]

const calculators = [
  {
    name: "Engagement Rate",
    slug: "engagement-rate",
    icon: TrendingUp,
    description: "Measure your audience interaction",
  },
  {
    name: "Collaboration Fee",
    slug: "collaboration-fee",
    icon: Target,
    description: "Know your worth for brand deals",
  },
  { name: "Sponsored Post ROI", slug: "sponsored-post-roi", icon: Zap, description: "Calculate campaign returns" },
  { name: "Hashtag Reach", slug: "hashtag-reach", icon: Hash, description: "Estimate hashtag performance" },
  { name: "Content Calendar", slug: "content-calendar", icon: Calendar, description: "Generate your posting schedule" },
]

const latestGuides = [
  {
    title: "How to Become an Influencer",
    slug: "how-to-become-an-influencer",
    emoji: "🚀",
    description: "Complete roadmap from zero to creator success",
  },
  {
    title: "How to Grow on TikTok Fast",
    slug: "how-to-grow-on-tiktok",
    emoji: "📈",
    description: "Proven strategies for rapid TikTok growth",
  },
  {
    title: "How to Negotiate Brand Deals",
    slug: "how-to-negotiate-brand-deals",
    emoji: "🤝",
    description: "Master sponsorship negotiations like a pro",
  },
  {
    title: "Create a Content Calendar",
    slug: "how-to-create-content-calendar",
    emoji: "📅",
    description: "Plan consistent content that converts",
  },
  {
    title: "Best Equipment for Beginners",
    slug: "best-equipment-for-beginners",
    emoji: "🎥",
    description: "Essential gear without breaking the bank",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateWebsiteSchema()} />

      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-3">
              Free Resources for Creators
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t("home.hero.title")}</h1>
            <p className="text-muted-foreground mt-2">{t("home.hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Platform quick links with icons */}
      <section className="py-6 border-b border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="text-sm font-medium text-muted-foreground mr-1">Platforms:</span>
            {platforms.map((platform) => (
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
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="pt-5 pb-4">
                    <div className="flex items-start justify-between">
                      <link.icon className="h-7 w-7 text-primary" />
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">🛠️ Creator Tools</h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                Curated reviews of essential software for scheduling, editing, analytics, and monetization. Find the
                right tools to streamline your workflow.
              </p>
            </div>
            <Link
              href="/tools"
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              All 11 tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => (
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
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">🧮 Free Calculators</h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                Make data-driven decisions with our free tools. Calculate engagement rates, estimate collaboration fees,
                measure ROI, and plan your content strategy.
              </p>
            </div>
            <Link
              href="/calculators"
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              All calculators <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-5">
            {calculators.map((calc) => (
              <Link key={calc.slug} href={`/calculators/${calc.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 border-dashed">
                  <CardContent className="pt-5 pb-4 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                      <calc.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                      {calc.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{calc.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-b from-muted/20 to-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">📚 In-Depth Guides</h2>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                Comprehensive tutorials covering every aspect of content creation. From starting out to scaling your
                business, learn from proven strategies.
              </p>
            </div>
            <Link
              href="/guides"
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              All guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-2">
            {latestGuides.map((guide, index) => (
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
            <div>
              <div className="text-xl font-bold text-primary">8</div>
              <div className="text-xs text-muted-foreground">Creator Types</div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">11</div>
              <div className="text-xs text-muted-foreground">Tools Reviewed</div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">5</div>
              <div className="text-xs text-muted-foreground">Guides</div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">5</div>
              <div className="text-xs text-muted-foreground">Calculators</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
