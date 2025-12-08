"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { t } from "@/lib/i18n"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: t("nav.home"), href: "/" },
  { name: t("nav.influencers"), href: "/influencers" },
  { name: t("nav.tools"), href: "/tools" },
  { name: t("nav.guides"), href: "/guides" },
  { name: t("nav.news"), href: "/news" },
  { name: t("nav.calculators"), href: "/calculators" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary flex-shrink-0">
              <span className="text-xl font-bold text-primary-foreground">G</span>
            </div>
            <span className="text-xl font-bold text-foreground whitespace-nowrap">
              Grow<span className="text-primary">Influencer</span>
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-shrink-0">
          <Link
            href="/calculators"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Free Calculators
          </Link>
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background px-6 py-6 shadow-xl lg:hidden border-l border-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                  <span className="text-lg font-bold text-primary-foreground">G</span>
                </div>
                <span className="text-lg font-bold text-foreground">GrowInfluencer</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold transition-colors hover:bg-muted ${
                        isActive(item.href) ? "text-primary bg-primary/10" : "text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/calculators"
                    className="block w-full rounded-lg border border-border px-4 py-2.5 text-center text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Free Calculators
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
