import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Star, ExternalLink } from "lucide-react"
import { t } from "@/lib/i18n"
import type { Tool } from "@/lib/data/tools"
import { TableOfContents } from "@/components/table-of-contents"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { generateSoftwareSchema, generateFAQSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ToolPageLayoutProps {
  data: Tool
}

export function ToolPageLayout({ data }: ToolPageLayoutProps) {
  const tocItems = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "features", title: "Key Features", level: 2 },
    { id: "pricing", title: "Pricing", level: 2 },
    { id: "pros-cons", title: "Pros & Cons", level: 2 },
    { id: "best-for", title: "Best For", level: 2 },
    { id: "competitors", title: "Competitors", level: 2 },
    { id: "getting-started", title: "Getting Started", level: 2 },
    { id: "faqs", title: "FAQs", level: 2 },
    { id: "related", title: "Related Content", level: 2 },
  ]

  const softwareSchema = generateSoftwareSchema({
    name: data.name,
    description: data.shortDesc,
    url: data.websiteUrl,
    rating: data.rating,
    ratingCount: data.ratingCount,
    category: data.category,
  })

  const faqSchema = generateFAQSchema({ questions: data.faqs })

  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative border-b border-border py-10 md:py-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-pink-50/50 dark:from-orange-950/10 dark:to-pink-950/10" />
          <div className="container mx-auto px-4 relative">
            <Link
              href="/tools"
              className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("nav.tools")}
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{data.emoji}</span>
              <div>
                <Badge variant="secondary" className="mb-2">
                  {data.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400 bg-clip-text text-transparent">{data.name}</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">{data.shortDesc}</p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(data.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {data.rating}/5 ({data.ratingCount.toLocaleString()} reviews)
                </span>
              </div>
              <a
                href={data.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 hover:underline"
              >
                Visit Website <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                {data.primaryKeyword}
              </span>
              {data.secondaryKeywords.slice(0, 4).map((keyword) => (
                <span key={keyword} className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} section="tools" />
              </div>
            </aside>

            {/* Content */}
            <main className="lg:col-span-9 order-1 lg:order-2 space-y-10">
              {/* Overview */}
              <section id="overview">
                <h2 className="text-2xl font-bold text-foreground mb-4">📖 Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{data.overview}</p>
              </section>

              {/* Features */}
              <section id="features">
                <h2 className="text-2xl font-bold text-foreground mb-4">✨ Key Features</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {data.features.map((feature, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400 bg-clip-text text-transparent">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <section id="pricing">
                <h2 className="text-2xl font-bold text-foreground mb-4">💰 Pricing</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {data.pricing.map((plan, index) => (
                    <Card key={index} className={index === 1 ? "border-orange-300 dark:border-orange-700" : ""}>
                      <CardHeader>
                        <CardTitle className="text-lg bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400 bg-clip-text text-transparent">{plan.plan}</CardTitle>
                        <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400 bg-clip-text text-transparent">{plan.price}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Pros & Cons */}
              <section id="pros-cons">
                <h2 className="text-2xl font-bold text-foreground mb-4">⚖️ Pros & Cons</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card className="border-green-500/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">Pros</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {data.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-red-500/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400 bg-clip-text text-transparent">Cons</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {data.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Best For */}
              <section id="best-for">
                <h2 className="text-2xl font-bold text-foreground mb-4">🎯 Best For</h2>
                <div className="grid gap-3">
                  {data.bestFor.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-orange-50/50 dark:bg-orange-950/10 border border-orange-100 dark:border-orange-900/20">
                      <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Competitors */}
              <section id="competitors">
                <h2 className="text-2xl font-bold text-foreground mb-4">🔄 Competitors Comparison</h2>
                <div className="space-y-4">
                  {data.competitors.map((comp, i) => (
                    <Card key={i}>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-foreground mb-2">{comp.name}</h3>
                        <p className="text-sm text-muted-foreground">{comp.comparison}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Getting Started */}
              <section id="getting-started">
                <h2 className="text-2xl font-bold text-foreground mb-4">🚀 Getting Started</h2>
                <div className="space-y-4">
                  {data.gettingStarted.map((step) => (
                    <Card key={step.step}>
                      <CardHeader className="bg-muted/50 pb-2">
                        <CardTitle className="flex items-center gap-3 bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400 bg-clip-text text-transparent">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-white text-sm font-bold">
                            {step.step}
                          </span>
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs">
                <h2 className="text-2xl font-bold text-foreground mb-4">❓ Frequently Asked Questions</h2>
                <FAQSection faqs={data.faqs} />
              </section>

              {/* Related Content */}
              <section id="related">
                <h2 className="text-2xl font-bold text-foreground mb-4">🔗 Related Content</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400 bg-clip-text text-transparent">Related Influencer Types</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {data.relatedInfluencers.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`/influencers/${slug}`}
                              className="text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-2"
                            >
                              <ArrowRight className="h-4 w-4" />
                              {slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg bg-gradient-to-r from-orange-600 to-pink-600 dark:from-orange-400 dark:to-pink-400 bg-clip-text text-transparent">Related Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {data.relatedTools.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`/tools/${slug}`}
                              className="text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-2"
                            >
                              <ArrowRight className="h-4 w-4" />
                              {slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
