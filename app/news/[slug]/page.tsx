import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { generateMetadata as genMeta } from "@/lib/seo"
import { newsArticles } from "@/lib/data/news"
import { NewsPageLayout } from "@/components/layouts/news-page-layout"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)

  if (!article) return {}

  return genMeta({
    title: article.metaTitle,
    description: article.metaDesc,
    keywords: [article.primaryKeyword, ...article.secondaryKeywords],
    canonical: `/news/${slug}`,
    ogType: "article",
  })
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const article = newsArticles.find((a) => a.slug === slug)

  if (!article) notFound()

  return <NewsPageLayout data={article} />
}
