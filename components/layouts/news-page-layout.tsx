import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { t } from "@/lib/i18n"
import type { NewsArticle } from "@/lib/data/news"
import { TableOfContents } from "@/components/table-of-contents"
import { JsonLd } from "@/components/json-ld"
import { generateArticleSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { MarkdownContent } from "@/components/markdown-content"

interface NewsPageLayoutProps {
  data: NewsArticle
}

export function NewsPageLayout({ data }: NewsPageLayoutProps) {
  const tocItems = [
    { id: "summary", title: "Summary", level: 2 },
    ...data.sections.map((s) => ({ id: s.id, title: s.title, level: 2 })),
    ...(data.didYouKnow ? [{ id: "did-you-know", title: "Did You Know?", level: 2 }] : []),
    ...(data.whatToWatchNext ? [{ id: "what-to-watch-next", title: data.whatToWatchNext.title, level: 2 }] : []),
    { id: "why-care", title: "Why Influencers Should Care", level: 2 },
    { id: "action-steps", title: "Action Steps", level: 2 },
    { id: "related", title: "Related Content", level: 2 },
  ]

  const articleSchema = generateArticleSchema({
    title: data.metaTitle,
    description: data.metaDesc,
    url: `/news/${data.slug}`,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    keywords: [data.primaryKeyword, ...data.secondaryKeywords],
  })

  return (
    <>
      <JsonLd data={articleSchema} />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative border-b border-border py-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/10 dark:to-teal-950/10" />
          <div className="container mx-auto px-4 relative">
            <Breadcrumb
              items={[
                { label: t("nav.news"), href: "/news" },
                { label: data.title, href: `/news/${data.slug}` },
              ]}
            />

            <div className="mt-4">
              <Badge variant="secondary" className="mb-3">
                {data.category}
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">{data.title}</h1>
              <p className="text-muted-foreground mt-1 max-w-2xl">{data.excerpt}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {new Date(data.datePublished).toLocaleDateString("en-US", { dateStyle: "long" })}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {data.readingTime} min read
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                {data.primaryKeyword}
              </span>
              {data.secondaryKeywords.slice(0, 3).map((keyword) => (
                <span key={keyword} className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>



        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24">
                <TableOfContents items={tocItems} section="news" />
              </div>
            </aside>

            <main className="lg:col-span-9 order-1 lg:order-2">
              {/* Summary */}
              <section id="summary" className="mb-10">
                {/*<h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">📋 Summary</h2>*/}
                <MarkdownContent className="text-muted-foreground leading-relaxed" content={data.summary} />
              </section>

              {/* Did You Know */}
              {data.didYouKnow && (
                  <section id="did-you-know" className="mb-10">
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">💡 Did You Know?</h2>
                    <div className="space-y-3">

                      <Card>
                        <CardContent className="pt-4 pb-4">
                          <ul className="space-y-3">
                          {data.didYouKnow.map((fact,i ) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-xs font-bold mt-0.5">
                                  {i + 1}
                                </span>
                                <span className="text-foreground text-sm leading-relaxed pt-0.5">{fact}</span>
                              </li>
                          ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </section>
              )}

              {/* Dynamic Sections */}
              {data.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-10">
                  <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">{section.title}</h2>
                  <div className="prose prose-slate max-w-none">
                    <MarkdownContent className="text-muted-foreground leading-relaxed" content={section.content} />
                  </div>
                </section>
              ))}


              {/* What to Watch Next */}
              {data.whatToWatchNext && (
                <section id="what-to-watch-next" className="mb-10">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">👀 {data.whatToWatchNext.title}</h2>
                  <Card>
                    <CardContent className="pt-6 pb-6">
                      <ul className="space-y-3">
                        {data.whatToWatchNext.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-xs font-bold mt-0.5">
                              {i + 1}
                            </span>
                            <span className="text-foreground text-sm leading-relaxed pt-0.5">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </section>
              )}

              {/* Why Care */}
              <section id="why-care" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🎯 Why Influencers Should Care</h2>
                <div className="space-y-3">
                  {data.whyCare.map((reason, i) => (
                    <Card key={i}>
                      <CardContent className="pt-4 pb-4">
                        <p className="text-foreground text-sm">{reason}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Action Steps */}
              <section id="action-steps" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🚀 Action Steps</h2>
                <div className="space-y-4">
                  {data.actionSteps.map((step, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardHeader className="bg-muted/50 py-3">
                        <CardTitle className="flex items-start gap-3 text-base bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-sm font-bold">
                            {i + 1}
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

              {/* Related */}
              <section id="related" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🔗 Related Content</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {data.relatedContent.map((item) => (
                    <Link key={item.slug} href={item.href} className="group">
                      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                        <CardContent className="pt-6 flex items-center justify-between">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
