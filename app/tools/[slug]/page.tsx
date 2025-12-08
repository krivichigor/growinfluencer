import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { generateMetadata as genMeta } from "@/lib/seo"
import { tools } from "@/lib/data/tools"
import { ToolPageLayout } from "@/components/layouts/tool-page-layout"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = tools.find((t) => t.slug === slug)

  if (!tool) return {}

  return genMeta({
    title: tool.metaTitle,
    description: tool.metaDesc,
    keywords: [tool.primaryKeyword, ...tool.secondaryKeywords],
    canonical: `/tools/${slug}`,
    ogType: "article",
  })
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = tools.find((t) => t.slug === slug)

  if (!tool) notFound()

  return <ToolPageLayout data={tool} />
}
