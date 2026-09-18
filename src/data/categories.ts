// ─────────────────────────────────────────────────────────────────────────────
// DATA FILE — add new categories here, or add blogs inside existing ones.
//
// To add a category:
//   1. Add a new object to CATEGORIES following the same shape.
//   2. Give it a unique `id` (used in the URL, e.g. "tech" → /tech).
//   3. Pick a `theme` — all color values are plain CSS strings.
//
// To add a blog post to a category:
//   1. Find the category in CATEGORIES.
//   2. Push a new object into its `blogs` array.
//   3. Give it a unique `id` within that category (used in the URL).
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

export interface BlogPost {
  id: string
  title: string
  date: string
  tag: string
}

export interface Category {
  id: string
  title: string
  tagline: string
  description: string
  theme: CategoryTheme
  blogs: BlogPost[]
}

export const CATEGORIES: Category[] = [
  // {
  //   id: 'ai',
  //   title: 'AI',
  //   tagline: 'Intelligence, examined',
  //   description:
  //     'Thinking about thinking machines — models, systems, and what they reveal about us.',
  //   theme: {
  //     bg: '#0D1117',
  //     bgDeep: '#010409',
  //     surface: '#161B22',
  //     accent: '#58A6FF',
  //     accentSoft: 'rgba(88,166,255,0.12)',
  //     text: '#E6EDF3',
  //     textSoft: '#8B949E',
  //     textMuted: '#484F58',
  //     border: 'rgba(240,246,252,0.1)',
  //     headingFont: "'Space Grotesk', system-ui, sans-serif",
  //     bodyFont: "'Inter', system-ui, sans-serif",
  //   },
  //   blogs: [
  //     { id: 'attention-mechanism', title: 'What the attention mechanism actually does', date: 'Sep 10', tag: 'Theory' },
  //     { id: 'prompting-is-programming', title: 'Prompting is just programming in prose', date: 'Sep 1', tag: 'Practice' },
  //     { id: 'when-models-confabulate', title: 'When models confabulate with confidence', date: 'Aug 22', tag: 'Behavior' },
  //     { id: 'embeddings-geometry', title: 'The geometry of embeddings', date: 'Aug 15', tag: 'Theory' },
  //     { id: 'inference-cost', title: 'Why inference cost changes everything', date: 'Aug 7', tag: 'Economics' },
  //   ],
  // },

  {
    id: 'watches',
    title: 'Watches',
    tagline: 'Time, made tangible',
    description:
      'Mechanical horology, complications worth understanding, and the pleasure of a well-made movement.',
    theme: {
      bg: '#0A0E1A',
      bgDeep: '#050710',
      surface: '#111827',
      accent: '#C9A84C',
      accentSoft: 'rgba(201,168,76,0.1)',
      text: '#F0EBE1',
      textSoft: '#9E9587',
      textMuted: '#5A5248',
      border: 'rgba(201,168,76,0.18)',
      headingFont: "'Fraunces', Georgia, serif",
      bodyFont: "'Source Serif 4', Georgia, serif",
    },
    blogs: [
      { id: 'why-mechanical', title: 'Why mechanical watches in a world of quartz', date: 'Sep 8', tag: 'Philosophy' },
      { id: 'reading-a-movement', title: 'How to read a movement for the first time', date: 'Aug 30', tag: 'Guide' },
      { id: 'five-complications', title: 'Five complications worth learning', date: 'Aug 19', tag: 'Horology' },
      { id: 'the-case-for-seconds', title: 'The case for the central seconds hand', date: 'Aug 9', tag: 'Design' },
      { id: 'tool-watch', title: 'The tool watch as a philosophy of objects', date: 'Jul 28', tag: 'Essay' },
    ],
  },

  {
    id: 'coffee',
    title: 'Coffee',
    tagline: 'The slow pour',
    description:
      'Brewing notes, origin stories, and the rituals that make a good cup worth making twice.',
    theme: {
      bg: '#EDE3D0',
      bgDeep: '#E4D6BC',
      surface: '#F5EFE3',
      accent: '#9C5A31',
      accentSoft: 'rgba(110,74,44,0.1)',
      text: '#2A1F16',
      textSoft: '#5B4A38',
      textMuted: '#9B8B7A',
      border: 'rgba(44,32,20,0.16)',
      headingFont: "'Fraunces', Georgia, serif",
      bodyFont: "'Source Serif 4', Georgia, serif",
    },
    blogs: [
      { id: 'pour-over-patience', title: 'Pour-over is a practice in patience', date: 'Sep 12', tag: 'Ritual' },
      { id: 'origin-ethiopia', title: 'Ethiopian naturals and the taste of fruit', date: 'Sep 4', tag: 'Origin' },
      { id: 'water-chemistry', title: 'Why water chemistry matters more than the bean', date: 'Aug 27', tag: 'Science' },
      { id: 'single-purpose-ten', title: 'Ten minutes with nothing but the cup', date: 'Aug 18', tag: 'Essay' },
      { id: 'three-cafes', title: 'Three cafés worth the walk', date: 'Aug 3', tag: 'Field notes' },
    ],
  },

  {
    id: 'cars',
    title: 'Cars',
    tagline: 'Motion with intention',
    description:
      'Engineering, design language, and what a well-made car tells you about the people who built it.',
    theme: {
      bg: '#111111',
      bgDeep: '#080808',
      surface: '#1A1A1A',
      accent: '#E02020',
      accentSoft: 'rgba(224,32,32,0.1)',
      text: '#F5F5F5',
      textSoft: '#9A9A9A',
      textMuted: '#555555',
      border: 'rgba(255,255,255,0.08)',
      headingFont: "'Space Grotesk', system-ui, sans-serif",
      bodyFont: "'Inter', system-ui, sans-serif",
    },
    blogs: [
      { id: 'oversteer-understeer', title: 'Oversteer, understeer, and what they teach you', date: 'Sep 9', tag: 'Dynamics' },
      { id: 'analogue-era', title: 'The last analogue era of driving', date: 'Sep 1', tag: 'Essay' },
      { id: 'inline-six', title: 'Why the inline-six refuses to die', date: 'Aug 23', tag: 'Engineering' },
      { id: 'cockpit-design', title: "What a cockpit reveals about a car's intent", date: 'Aug 14', tag: 'Design' },
      { id: 'daily-driver', title: 'The daily driver as a design constraint', date: 'Aug 4', tag: 'Essay' },
    ],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id)
}

export function getBlogById(categoryId: string, blogId: string): BlogPost | undefined {
  return getCategoryById(categoryId)?.blogs.find(b => b.id === blogId)
}
