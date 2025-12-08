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
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

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
              className={`block text-sm transition-colors ${item.level === 2 ? "pl-0" : "pl-4"} ${
                activeId === item.id ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
