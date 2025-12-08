import type React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Info } from "lucide-react"
import { t } from "@/lib/i18n"
import type { CalculatorMeta } from "@/lib/data/calculators"
import { FAQSection } from "@/components/faq-section"
import { JsonLd } from "@/components/json-ld"
import { generateSoftwareSchema, generateFAQSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CalculatorPageLayoutProps {
  meta: CalculatorMeta
  children: React.ReactNode
}

export function CalculatorPageLayout({ meta, children }: CalculatorPageLayoutProps) {
  const softwareSchema = generateSoftwareSchema({
    name: meta.name,
    description: meta.metaDesc,
    url: `/calculators/${meta.slug}`,
    category: "Calculator",
    rating: 4.8,
    ratingCount: 500,
  })

  const faqSchema = generateFAQSchema({ questions: meta.faqs })

  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative border-b border-border py-10 md:py-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10" />
          <div className="container mx-auto px-4 relative">
            <Link
              href="/calculators"
              className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("nav.calculators")}
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{meta.emoji}</span>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">{meta.name}</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">{meta.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                {meta.primaryKeyword}
              </span>
              {meta.secondaryKeywords.slice(0, 3).map((keyword) => (
                <span key={keyword} className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator */}
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Calculator Component */}
            <Card>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Calculate Now</CardTitle>
              </CardHeader>
              <CardContent>{children}</CardContent>
            </Card>

            {/* Formula Explanation */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">📐 How It Works</h2>
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Formula</h3>
                      <code className="text-sm bg-background px-2 py-1 rounded">{meta.formula}</code>
                      <p className="mt-3 text-muted-foreground">{meta.formulaExplanation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Example Calculation */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">💡 Example Calculation</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">{meta.exampleCalculation}</p>
                </CardContent>
              </Card>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">❓ Frequently Asked Questions</h2>
              <FAQSection faqs={meta.faqs} />
            </section>

            {/* Related */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">🔗 Related Content</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {meta.relatedTools.map((slug) => (
                  <Link key={slug} href={`/tools/${slug}`} className="group">
                    <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                      <CardContent className="pt-6 flex items-center justify-between">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
                {meta.relatedCalculators.map((slug) => (
                  <Link key={slug} href={`/calculators/${slug}`} className="group">
                    <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                      <CardContent className="pt-6 flex items-center justify-between">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
