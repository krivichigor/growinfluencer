import type { Metadata } from "next"
import { generateMetadata as generateSEO, generateWebsiteSchema } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import { HomePageV1 } from "@/components/homepage-v1"
import { HomePageV2 } from "@/components/homepage-v2"

export const metadata: Metadata = generateSEO({
  title: "Hub for Influencers - Complete Guide to Content Creation",
  description:
    "Your complete resource for becoming a successful content creator. Expert guides, powerful tools, calculators, and actionable advice for influencers on all platforms.",
  keywords: [
    "influencer guide",
    "content creator resources",
    "social media marketing",
    "TikTok creator",
    "YouTube growth",
    "Instagram influencer",
    "engagement calculator",
    "brand deals",
  ],
  canonical: "/",
})

export default async function HomePage({ searchParams }: { searchParams: Promise<{ v?: string }> }) {
  const { v: version } = await searchParams

  return (
    <>
      <JsonLd data={generateWebsiteSchema()} />
      {version === "2" ? <HomePageV2 /> : <HomePageV1 />}
    </>
  )
}
