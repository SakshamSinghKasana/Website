// ─────────────────────────────────────────────────────────────────────────────
// POST SYSTEM
//
// Posts live in src/posts/*.md as markdown files with YAML frontmatter.
//
// Frontmatter fields:
//   title:    string   — post title (required)
//   date:     string   — YYYY-MM-DD or ISO string (required)
//   category: string   — category id, e.g. "ai", "coffee" (required)
//   tag:      string   — label shown on the listing, e.g. "Theory"
//   featured: boolean  — shows first in the listing
//   draft:    boolean  — if true, hidden from the site
//
// To add a new post: drop a new .md file in src/posts/ and fill in the
// frontmatter above. No other changes needed.
// ─────────────────────────────────────────────────────────────────────────────

import { marked } from "marked"

export interface Post {
  id: string
  title: string
  date: string // formatted: "Sep 10"
  dateRaw: string // ISO for sorting
  category: string
  tag: string
  featured: boolean
  contentHtml: string
}

// Vite glob — eagerly imports every .md in src/posts/ as a raw string.
// When you add a new .md file, Vite's dev server picks it up automatically.
const rawFiles = import.meta.glob<string>("../posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
})

function parseFrontmatter(
  raw: string,
): { meta: Record<string, unknown> body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }

  const [, fm, body] = match
  const meta: Record<string, unknown> = {}

  for (const line of fm.split("\n")) {
    const m = line.match(/^(\w+):\s*(.+)$/)
    if (!m) continue
    const [, key, rawVal] = m
    const val = rawVal.trim()
    if (val === "true") {
      meta[key] = true
      continue
    }
    if (val === "false") {
      meta[key] = false
      continue
    }
    if (val.startsWith("[")) {
      try {
        meta[key] = JSON.parse(val.replace(/'/g, '"'))
      } catch {
        meta[key] = []
      }
      continue
    }
    meta[key] = val.replace(/^["']|["']$/g, "")
  }

  return { meta, body: body.trim() }
}

function formatDate(raw: string): string {
  const d = new Date(raw)
  if (isNaN(d.getTime())) return raw
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

function slugFromPath(path: string): string {
  return path.replace(/^.*\//, "").replace(/\.md$/, "")
}

function parsePost(path: string, rawContent: string): Post | null {
  const { meta, body } = parseFrontmatter(rawContent)

  if (meta.draft === true) return null

  const title = meta.title as string ?? slugFromPath(path)
  const dateRaw = meta.date as string ?? ""
  const category = meta.category as string ?? ""
  const tag = meta.tag as string ?? ""
  const featured = meta.featured as boolean ?? false

  if (!category) return null

  const contentHtml = marked.parse(body) as string

  return {
    id: slugFromPath(path),
    title,
    date: formatDate(dateRaw),
    dateRaw,
    category,
    tag,
    featured,
    contentHtml,
  }
}

// All published posts, sorted: featured first, then by date descending.
export const ALL_POSTS: Post[] = Object.entries(rawFiles)
  .map(([path, raw]) => parsePost(path, raw))
  .filter((p): p is Post => p !== null)
  .sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    return new Date(b.dateRaw).getTime() - new Date(a.dateRaw).getTime()
  })

export function getPostsByCategory(categoryId: string): Post[] {
  return ALL_POSTS.filter((p) => p.category === categoryId)
}

export function getPostById(id: string): Post | undefined {
  return ALL_POSTS.find((p) => p.id === id)
}
