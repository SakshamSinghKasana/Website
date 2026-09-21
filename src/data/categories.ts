// ─────────────────────────────────────────────────────────────────────────────
// CATEGORIES — visual config only. Blog posts live in src/posts/*.md.
//
// To add a new category:
//   1. Add a new object here with a unique `id`.
//   2. Create posts for it in src/posts/ with `category: <id>` in frontmatter.
// ─────────────────────────────────────────────────────────────────────────────

export interface CategoryTheme {
  bg: string
  bgDeep: string
  surface: string
  accent: string
  accentSoft: string
  text: string
  textSoft: string
  textMuted: string
  border: string
  headingFont: string
  bodyFont: string
}

export interface Category {
  id: string
  title: string
  tagline: string
  description: string
  theme: CategoryTheme
}

export const CATEGORIES: Category[] = [
  {
    id: "ai",
    title: "AI",
    tagline: "Intelligence, examined",
    description:
      "Thinking about thinking machines — models, systems, and what they reveal about us.",
    theme: {
      bg: "#0D1117",
      bgDeep: "#010409",
      surface: "#161B22",
      accent: "#58A6FF",
      accentSoft: "rgba(88,166,255,0.12)",
      text: "#E6EDF3",
      textSoft: "#8B949E",
      textMuted: "#484F58",
      border: "rgba(240,246,252,0.1)",
      headingFont: "'Space Grotesk', system-ui, sans-serif",
      bodyFont: "'Inter', system-ui, sans-serif",
    },
  },
  {
    id: "watches",
    title: "Watches",
    tagline: "Time, made tangible",
    description:
      "Mechanical horology, complications worth understanding, and the pleasure of a well-made movement.",
    theme: {
      bg: "#0A0E1A",
      bgDeep: "#050710",
      surface: "#111827",
      accent: "#C9A84C",
      accentSoft: "rgba(201,168,76,0.1)",
      text: "#F0EBE1",
      textSoft: "#9E9587",
      textMuted: "#5A5248",
      border: "rgba(201,168,76,0.18)",
      headingFont: "'Fraunces', Georgia, serif",
      bodyFont: "'Source Serif 4', Georgia, serif",
    },
  },
  {
    id: "coffee",
    title: "Coffee",
    tagline: "The slow pour",
    description:
      "Brewing notes, origin stories, and the rituals that make a good cup worth making twice.",
    theme: {
      bg: "#EDE3D0",
      bgDeep: "#E4D6BC",
      surface: "#F5EFE3",
      accent: "#9C5A31",
      accentSoft: "rgba(110,74,44,0.1)",
      text: "#2A1F16",
      textSoft: "#5B4A38",
      textMuted: "#9B8B7A",
      border: "rgba(44,32,20,0.16)",
      headingFont: "'Fraunces', Georgia, serif",
      bodyFont: "'Source Serif 4', Georgia, serif",
    },
  },
  {
    id: "cars",
    title: "Cars",
    tagline: "Motion with intention",
    description:
      "Engineering, design language, and what a well-made car tells you about the people who built it.",
    theme: {
      bg: "#111111",
      bgDeep: "#080808",
      surface: "#1A1A1A",
      accent: "#E02020",
      accentSoft: "rgba(224,32,32,0.1)",
      text: "#F5F5F5",
      textSoft: "#9A9A9A",
      textMuted: "#555555",
      border: "rgba(255,255,255,0.08)",
      headingFont: "'Space Grotesk', system-ui, sans-serif",
      bodyFont: "'Inter', system-ui, sans-serif",
    },
  },
]

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id)
}
