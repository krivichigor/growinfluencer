"use client"

import { useState, useEffect } from "react"
import { t } from "@/lib/i18n"
import { List } from "lucide-react"

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
  section?: "tools" | "guides" | "calculators" | "influencers" | "news"
}

export function TableOfContents({ items, section }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  const getActiveClass = (isActive: boolean) => {
    if (!isActive) return "text-muted-foreground hover:text-foreground"

    switch (section) {
      case "tools":
        return "font-medium text-orange-600 dark:text-orange-400"
      case "guides":
        return "font-medium text-purple-600 dark:text-purple-400"
      case "calculators":
        return "font-medium text-cyan-600 dark:text-cyan-400"
      case "influencers":
        return "font-medium text-rose-600 dark:text-rose-400"
      case "news":
        return "font-medium text-emerald-600 dark:text-emerald-400"
      default:
        return "font-medium text-primary"
    }
  }

  return (
    <nav className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
        <List className="h-4 w-4" />
        {t("guides.tableOfContents")}
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm transition-colors ${item.level === 2 ? "pl-0" : "pl-4"} ${getActiveClass(activeId === item.id)}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
