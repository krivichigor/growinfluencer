import Link from "next/link"
import { t } from "@/lib/i18n"
import { Home, Search, BookOpen, Calculator, Wrench } from "lucide-react"

const popularPages = [
  { name: "How to Become an Influencer", href: "/guides/how-to-become-an-influencer", icon: BookOpen },
  { name: "Engagement Rate Calculator", href: "/calculators/engagement-rate", icon: Calculator },
  { name: "TikTok Creator Guide", href: "/influencers/tiktok-creator", icon: Search },
  { name: "Essential Tools", href: "/tools", icon: Wrench },
]

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20">
      <div className="text-center">
        <p className="text-8xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold text-foreground">{t("notFound.title")}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{t("notFound.description")}</p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Home className="h-5 w-5" />
          {t("notFound.backHome")}
        </Link>
      </div>

      <div className="mt-16 w-full max-w-md">
        <h2 className="mb-6 text-center text-lg font-semibold text-foreground">{t("notFound.popularPages")}</h2>
        <div className="grid gap-3">
          {popularPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <page.icon className="h-5 w-5" />
              </div>
              <span className="font-medium text-foreground">{page.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
