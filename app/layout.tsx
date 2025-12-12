import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { generateWebsiteSchema, generateOrganizationSchema, siteConfig } from "@/lib/seo"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: {
    default: "Hub for Influencers | Your Complete Guide to Content Creation Success",
    template: "%s | Hub for Influencers",
  },
  description:
    "Your complete resource for becoming a successful content creator. Expert guides, powerful tools, calculators, and actionable advice for influencers on TikTok, YouTube, Instagram, and more.",
  keywords: [
    "influencer",
    "content creator",
    "social media",
    "TikTok",
    "YouTube",
    "Instagram",
    "Twitch",
    "influencer marketing",
    "brand deals",
    "engagement rate",
    "creator tools",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Hub for Influencers | Your Complete Guide to Content Creation Success",
    description:
      "Your complete resource for becoming a successful content creator. Expert guides, powerful tools, and calculators for influencers.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Hub for Influencers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub for Influencers | Your Complete Guide to Content Creation Success",
    description: "Your complete resource for becoming a successful content creator.",
    creator: siteConfig.twitterHandle,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <JsonLd data={generateWebsiteSchema()} />
        <JsonLd data={generateOrganizationSchema()} />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
