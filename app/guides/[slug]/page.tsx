import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { generateMetadata as genMeta } from "@/lib/seo"
import { guides } from "@/lib/data/guides"
import { GuidePageLayout } from "@/components/layouts/guide-page-layout"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) return {}

  return genMeta({
    title: guide.metaTitle,
    description: guide.metaDesc,
    keywords: [guide.primaryKeyword, ...guide.secondaryKeywords],
    canonical: `/guides/${slug}`,
    ogType: "article",
  })
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) notFound()

  return <GuidePageLayout data={guide} />
}
