"use client"

import Link from "next/link"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface MarkdownContentProps {
  content: string
  className?: string
}

type Alignment = "left" | "center" | "right"

const parseInline = (text: string): ReactNode[] => {
  const elements: ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
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

    const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/)
    if (boldMatch) {
      const [fullMatch, boldText] = boldMatch
      elements.push(<strong key={key++}>{boldText}</strong>)
      remaining = remaining.slice(fullMatch.length)
      continue
    }

    const italicMatch = remaining.match(/^\*([^*]+)\*/)
    if (italicMatch) {
      const [fullMatch, italicText] = italicMatch
      elements.push(<em key={key++}>{italicText}</em>)
      remaining = remaining.slice(fullMatch.length)
      continue
    }

    const nextSpecialIndex = remaining.search(/\[|\*/)
    if (nextSpecialIndex === -1) {
      elements.push(remaining)
      break
    } else if (nextSpecialIndex === 0) {
      elements.push(remaining[0])
      remaining = remaining.slice(1)
    } else {
      elements.push(remaining.slice(0, nextSpecialIndex))
      remaining = remaining.slice(nextSpecialIndex)
    }
  }

  return elements
}

const splitTableRow = (line: string) => line.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim())

const parseAlignment = (line: string): Alignment[] => {
  return splitTableRow(line).map((cell) => {
    const starts = cell.startsWith(":")
    const ends = cell.endsWith(":")
    if (starts && ends) return "center"
    if (ends) return "right"
    return "left"
  })
}

const renderTable = (lines: string[], key: number) => {
  const headers = splitTableRow(lines[0])
  const alignments = parseAlignment(lines[1])
  const rows = lines.slice(2).filter((line) => line.trim().length > 0)

  const alignmentClass = (alignment: Alignment) => {
    if (alignment === "center") return "text-center"
    if (alignment === "right") return "text-right"
    return "text-left"
  }

  return (
    <div key={key} className="my-4 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-muted/60">
          <tr>
            {headers.map((cell, idx) => (
              <th key={idx} className={cn("border border-border px-3 py-2 font-semibold text-foreground", alignmentClass(alignments[idx] || "left"))}>
                {parseInline(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => {
            const cells = splitTableRow(row)
            return (
              <tr key={rowIdx} className={rowIdx % 2 === 1 ? "bg-muted/30" : ""}>
                {cells.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={cn("border border-border px-3 py-2 text-muted-foreground", alignmentClass(alignments[cellIdx] || "left"))}
                  >
                    {parseInline(cell)}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const isTableSeparator = (line: string) => /^\s*\|?\s*(?::?-+:?\s*\|)+\s*:?-+:?\s*\|?\s*$/.test(line.trim())

const parseMarkdownBlocks = (markdown: string): ReactNode[] => {
  const lines = markdown.split(/\r?\n/)
  const blocks: ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    if (!line.trim()) {
      i++
      continue
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={key++} className="text-lg font-semibold text-foreground">
          {parseInline(line.replace("### ", "").trim())}
        </h3>
      )
      i++
      continue
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={key++} className="text-xl font-bold text-foreground">
          {parseInline(line.replace("## ", "").trim())}
        </h2>
      )
      i++
      continue
    }

    if (line.startsWith("# ")) {
      blocks.push(
        <h1 key={key++} className="text-2xl font-bold text-foreground">
          {parseInline(line.replace("# ", "").trim())}
        </h1>
      )
      i++
      continue
    }

    if (i + 1 < lines.length && lines[i].includes("|") && isTableSeparator(lines[i + 1])) {
      const tableLines = [lines[i], lines[i + 1]]
      i += 2
      while (i < lines.length && lines[i].includes("|") && lines[i].trim() !== "") {
        tableLines.push(lines[i])
        i++
      }
      blocks.push(renderTable(tableLines, key++))
      continue
    }

    if (line.trim().startsWith("- ")) {
      const items: string[] = []
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].replace(/^- /, ""))
        i++
      }
      blocks.push(
        <ul key={key++} className="list-disc space-y-2 pl-5">
          {items.map((item, idx) => (
            <li key={idx}>{parseInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    const paragraphLines: string[] = []
    while (i < lines.length && lines[i].trim() !== "") {
      paragraphLines.push(lines[i].trim())
      i++
    }
    const paragraphText = paragraphLines.join(" ")
    blocks.push(<p key={key++}>{parseInline(paragraphText)}</p>)
  }

  return blocks
}

export function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return <div className={cn("markdown-content space-y-4 text-muted-foreground leading-relaxed", className)}>{parseMarkdownBlocks(content)}</div>
}
