import Link from "next/link"
import { ArrowRight, CheckCircle, XCircle, Clock } from "lucide-react"
import { t } from "@/lib/i18n"
import type { InfluencerType } from "@/lib/data/influencer-types"
import { TableOfContents } from "@/components/table-of-contents"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"

interface InfluencerPageLayoutProps {
  data: InfluencerType
}

export function InfluencerPageLayout({ data }: InfluencerPageLayoutProps) {
  const tocItems = [
    { id: "introduction", title: "Introduction", level: 2 },
    { id: "who-is-this-for", title: "Who Is This For?", level: 2 },
    { id: "why-choose", title: "Why Choose This Path?", level: 2 },
    { id: "how-to-start", title: "How to Start", level: 2 },
    { id: "best-tools", title: "Best Tools", level: 2 },
    { id: "common-mistakes", title: "Common Mistakes to Avoid", level: 2 },
    { id: "content-plan", title: "Weekly Content Plan", level: 2 },
    { id: "faqs", title: "Frequently Asked Questions", level: 2 },
    { id: "related-content", title: "Related Content", level: 2 },
  ]

  const articleSchema = generateArticleSchema({
    title: data.metaTitle,
    description: data.metaDesc,
    url: `/influencers/${data.slug}`,
    datePublished: "2025-01-01",
    dateModified: "2025-01-15",
    keywords: [data.primaryKeyword, ...data.secondaryKeywords],
  })

  const faqSchema = generateFAQSchema({
    questions: data.faqs,
  })

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <div className="min-h-screen bg-background">
        <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-8">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: t("nav.influencers"), href: "/influencers" },
                { label: data.name, href: `/influencers/${data.slug}` },
              ]}
            />

            <div className="flex items-center gap-4 mt-4">
              <span className="text-5xl">{data.emoji}</span>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">{data.name}</h1>
                <p className="text-muted-foreground mt-1 max-w-2xl">{data.shortDesc}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="default" className="bg-primary text-primary-foreground">
                {data.primaryKeyword}
              </Badge>
              {data.secondaryKeywords.slice(0, 4).map((keyword) => (
                <Badge key={keyword} variant="outline">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
                <Card className="mt-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Reading Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold text-primary">12-15 min</p>
                  </CardContent>
                </Card>
              </div>
            </aside>

            <main className="lg:col-span-9 order-1 lg:order-2">
              <section id="introduction" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">📖 Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">{data.intro}</p>
              </section>

              <section id="who-is-this-for" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">🎯 Who Is This For?</h2>
                <Card>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground leading-relaxed">{data.whoIsThis}</p>
                  </CardContent>
                </Card>
              </section>

              <section id="why-choose" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  ✨ Why Choose This Path?
                </h2>
                <div className="grid gap-2">
                  {data.whyChoose.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <p className="text-foreground text-sm">{reason}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="how-to-start" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🚀 How to Start</h2>
                <div className="space-y-4">
                  {data.howToStart.map((step) => (
                    <Card key={step.step} className="overflow-hidden">
                      <CardHeader className="bg-muted/50 py-3">
                        <CardTitle className="flex items-start gap-3 text-base">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            {step.step}
                          </span>
                          <span className="pt-0.5">{step.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-3 pb-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section id="best-tools" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🛠️ Best Tools</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.bestTools.map((tool) => (
                    <Link key={tool.slug} href={`/tools/${tool.slug}`} className="group">
                      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center justify-between">
                            {tool.name}
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>

              <section id="common-mistakes" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  ⚠️ Common Mistakes to Avoid
                </h2>
                <div className="space-y-3">
                  {data.commonMistakes.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start gap-3 mb-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                          <h3 className="font-semibold text-foreground text-sm">{item.mistake}</h3>
                        </div>
                        <div className="flex items-start gap-3 ml-8">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                          <p className="text-muted-foreground text-sm">{item.solution}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section id="content-plan" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  📅 Weekly Content Plan
                </h2>
                <Card>
                  <CardContent className="pt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-3 font-semibold text-foreground">Day</th>
                            <th className="text-left py-2 px-3 font-semibold text-foreground">Type</th>
                            <th className="text-left py-2 px-3 font-semibold text-foreground">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.contentPlan.map((day) => (
                            <tr key={day.day} className="border-b border-border last:border-0">
                              <td className="py-2 px-3 font-medium text-foreground">{day.day}</td>
                              <td className="py-2 px-3">
                                <Badge variant="secondary" className="text-xs">
                                  {day.type}
                                </Badge>
                              </td>
                              <td className="py-2 px-3 text-muted-foreground">{day.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="faqs" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  ❓ Frequently Asked Questions
                </h2>
                <FAQSection faqs={data.faqs} />
              </section>

              <section id="related-content" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🔗 Related Content</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Related Creator Types</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1.5">
                        {data.relatedInfluencers.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`/influencers/${slug}`}
                              className="text-primary hover:underline flex items-center gap-2 text-sm"
                            >
                              <ArrowRight className="h-3.5 w-3.5" />
                              {slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Helpful Guides</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1.5">
                        {data.relatedGuides.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`/guides/${slug}`}
                              className="text-primary hover:underline flex items-center gap-2 text-sm"
                            >
                              <ArrowRight className="h-3.5 w-3.5" />
                              {slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Useful Calculators</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1.5">
                        {data.relatedCalculators.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`/calculators/${slug}`}
                              className="text-primary hover:underline flex items-center gap-2 text-sm"
                            >
                              <ArrowRight className="h-3.5 w-3.5" />
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
