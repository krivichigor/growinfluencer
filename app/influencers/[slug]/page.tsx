import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { generateMetadata as genMeta } from "@/lib/seo"
import { getInfluencerType, getAllInfluencerSlugs } from "@/lib/data/influencer-types"
import { InfluencerPageLayout } from "@/components/layouts/influencer-page-layout"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllInfluencerSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = getInfluencerType(slug)

  if (!data) {
    return {}
  }

  return genMeta({
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: [data.primaryKeyword, ...data.secondaryKeywords],
    canonical: `/influencers/${slug}`,
    ogType: "article",
  })
}

export default async function InfluencerTypePage({ params }: Props) {
  const { slug } = await params
  const data = getInfluencerType(slug)

  if (!data) {
    notFound()
  }

  return <InfluencerPageLayout data={data} />
}
