"use client"

import Link from "next/link"
import type { ReactNode } from "react"

interface MarkdownContentProps {
  content: string
  className?: string
}

// Parse basic markdown: **bold**, *italic*, and [text](url) links
export function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  const parseMarkdown = (text: string): ReactNode[] => {
    const elements: ReactNode[] = []
    let remaining = text
    let key = 0

    while (remaining.length > 0) {
      // Check for links: [text](url)
      const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/)
      if (linkMatch) {
        const [fullMatch, linkText, url] = linkMatch
        const isExternal = url.startsWith("http")

        if (isExternal) {
          elements.push(
            <a
              key={key++}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {linkText}
            </a>
          )
        } else {
          elements.push(
            <Link key={key++} href={url} className="text-primary hover:underline">
              {linkText}
            </Link>
          )
        }
        remaining = remaining.slice(fullMatch.length)
        continue
      }

      // Check for bold: **text**
      const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/)
      if (boldMatch) {
        const [fullMatch, boldText] = boldMatch
        elements.push(<strong key={key++}>{boldText}</strong>)
        remaining = remaining.slice(fullMatch.length)
        continue
      }

      // Check for italic: *text*
      const italicMatch = remaining.match(/^\*([^*]+)\*/)
      if (italicMatch) {
        const [fullMatch, italicText] = italicMatch
        elements.push(<em key={key++}>{italicText}</em>)
        remaining = remaining.slice(fullMatch.length)
        continue
      }

      // Find next special character
      const nextSpecialIndex = remaining.search(/\[|\*/)
      if (nextSpecialIndex === -1) {
        // No more special characters, add remaining text
        elements.push(remaining)
        break
      } else if (nextSpecialIndex === 0) {
        // Special character at start but didn't match a pattern, add it as text
        elements.push(remaining[0])
        remaining = remaining.slice(1)
      } else {
        // Add text before special character
        elements.push(remaining.slice(0, nextSpecialIndex))
        remaining = remaining.slice(nextSpecialIndex)
      }
    }

    return elements
  }

  return <span className={className}>{parseMarkdown(content)}</span>
}
