import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Clock } from "lucide-react"
import { t } from "@/lib/i18n"
import type { Guide } from "@/lib/data/guides"
import { TableOfContents } from "@/components/table-of-contents"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { generateArticleSchema, generateFAQSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GuidePageLayoutProps {
  data: Guide
}

export function GuidePageLayout({ data }: GuidePageLayoutProps) {
  const tocItems = [
    { id: "introduction", title: "Introduction", level: 2 },
    ...data.sections.map((s) => ({ id: s.id, title: s.title, level: 2 })),
    { id: "best-practices", title: "Best Practices", level: 2 },
    { id: "recommended-tools", title: "Recommended Tools", level: 2 },
    { id: "faqs", title: "FAQs", level: 2 },
    { id: "related", title: "Related Content", level: 2 },
  ]

  const articleSchema = generateArticleSchema({
    title: data.metaTitle,
    description: data.metaDesc,
    url: `/guides/${data.slug}`,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    keywords: [data.primaryKeyword, ...data.secondaryKeywords],
  })

  const faqSchema = generateFAQSchema({ questions: data.faqs })

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-10 md:py-14">
          <div className="container mx-auto px-4">
            <Link
              href="/guides"
              className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("nav.guides")}
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{data.emoji}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{data.title}</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">{data.intro}</p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {data.readingTime} min read
              </div>
              <Badge variant="default">{data.primaryKeyword}</Badge>
              {data.secondaryKeywords.slice(0, 3).map((keyword) => (
                <Badge key={keyword} variant="outline">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            <main className="lg:col-span-9 order-1 lg:order-2 space-y-10">
              {/* Introduction */}
              <section id="introduction">
                <h2 className="text-2xl font-bold text-foreground mb-4">📖 Introduction</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{data.fullIntro}</p>
              </section>

              {/* Dynamic Sections */}
              {data.sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {section.emoji} {section.title}
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
                    {section.steps && (
                      <div className="space-y-4 mt-6">
                        {section.steps.map((step, i) => (
                          <Card key={i}>
                            <CardHeader className="bg-muted/50 pb-2">
                              <CardTitle className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                                  {i + 1}
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
                    )}
                    {section.tips && (
                      <div className="mt-6 space-y-2">
                        {section.tips.map((tip, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-foreground">{tip}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              ))}

              {/* Best Practices */}
              <section id="best-practices">
                <h2 className="text-2xl font-bold text-foreground mb-4">✅ Best Practices</h2>
                <div className="grid gap-3">
                  {data.bestPractices.map((practice, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-foreground">{practice}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recommended Tools */}
              <section id="recommended-tools">
                <h2 className="text-2xl font-bold text-foreground mb-4">🛠️ Recommended Tools</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {data.recommendedTools.map((tool) => (
                    <Link key={tool.slug} href={`/tools/${tool.slug}`} className="group">
                      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center justify-between">
                            {tool.name}
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{tool.reason}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs">
                <h2 className="text-2xl font-bold text-foreground mb-4">❓ Frequently Asked Questions</h2>
                <FAQSection faqs={data.faqs} />
              </section>

              {/* Related */}
              <section id="related">
                <h2 className="text-2xl font-bold text-foreground mb-4">🔗 Related Content</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Related Guides</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {data.relatedGuides.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`/guides/${slug}`}
                              className="text-primary hover:underline flex items-center gap-2"
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
                      <CardTitle className="text-lg">Related Calculators</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {data.relatedCalculators.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={`/calculators/${slug}`}
                              className="text-primary hover:underline flex items-center gap-2"
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
