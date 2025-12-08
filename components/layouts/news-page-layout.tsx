import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react"
import { t } from "@/lib/i18n"
import type { NewsArticle } from "@/lib/data/news"
import { TableOfContents } from "@/components/table-of-contents"
import { JsonLd } from "@/components/json-ld"
import { generateArticleSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsPageLayoutProps {
  data: NewsArticle
}

export function NewsPageLayout({ data }: NewsPageLayoutProps) {
  const tocItems = [
    { id: "summary", title: "Summary", level: 2 },
    ...data.sections.map((s) => ({ id: s.id, title: s.title, level: 2 })),
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
        <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-10 md:py-14">
          <div className="container mx-auto px-4">
            <Link
              href="/news"
              className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("nav.news")}
            </Link>

            <Badge variant="secondary" className="mb-4">
              {data.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{data.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{data.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
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
              {/* Summary */}
              <section id="summary">
                <h2 className="text-2xl font-bold text-foreground mb-4">📋 Summary</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{data.summary}</p>
              </section>

              {/* Dynamic Sections */}
              {data.sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                </section>
              ))}

              {/* Why Care */}
              <section id="why-care">
                <h2 className="text-2xl font-bold text-foreground mb-4">🎯 Why Influencers Should Care</h2>
                <div className="space-y-4">
                  {data.whyCare.map((reason, i) => (
                    <Card key={i}>
                      <CardContent className="pt-6">
                        <p className="text-foreground">{reason}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Action Steps */}
              <section id="action-steps">
                <h2 className="text-2xl font-bold text-foreground mb-4">🚀 Action Steps</h2>
                <div className="space-y-4">
                  {data.actionSteps.map((step, i) => (
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
              </section>

              {/* Related */}
              <section id="related">
                <h2 className="text-2xl font-bold text-foreground mb-4">🔗 Related Content</h2>
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
