import Link from "next/link"
import { t } from "@/lib/i18n"

const footerLinks = {
  influencers: [
    { name: "TikTok Creator", href: "/influencers/tiktok-creator" },
    { name: "YouTuber", href: "/influencers/youtuber" },
    { name: "Instagram Creator", href: "/influencers/instagram-creator" },
    { name: "Twitch Streamer", href: "/influencers/twitch-streamer" },
  ],
  tools: [
    { name: "Hootsuite", href: "/tools/hootsuite" },
    { name: "TubeBuddy", href: "/tools/tubebuddy" },
    { name: "Canva", href: "/tools/canva" },
    { name: "CapCut", href: "/tools/capcut" },
  ],
  guides: [
    { name: "How to Become an Influencer", href: "/guides/how-to-become-an-influencer" },
    { name: "How to Grow on TikTok", href: "/guides/how-to-grow-on-tiktok" },
    { name: "How to Negotiate Brand Deals", href: "/guides/how-to-negotiate-brand-deals" },
  ],
  calculators: [
    { name: "Engagement Rate", href: "/calculators/engagement-rate" },
    { name: "Collaboration Fee", href: "/calculators/collaboration-fee" },
    { name: "Sponsored Post ROI", href: "/calculators/sponsored-post-roi" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Grow<span className="text-primary">Influencer</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">{t("footer.aboutText")}</p>
          </div>

          {/* Influencers */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("nav.influencers")}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.influencers.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("nav.tools")}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("footer.resources")}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.calculators.slice(0, 2).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
