import { href } from '../router'
import type { Category } from '../data/categories'
import { CategoryIcon } from './CategoryIcons'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { theme } = category

  return (
    <a
      href={href(category.id)}
      className="group block relative overflow-hidden"
      style={{
        aspectRatio: '1 / 1',
        background: theme.bg,
        border: `1px solid ${theme.border}`,
        borderRadius: '3px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        textDecoration: 'none',
      }}
    >
      {/* Subtle background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 80% 20%, ${theme.accentSoft}, transparent 65%)` }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 sm:p-10">
        {/* Icon top-right */}
        <div className="self-end w-16 h-16 sm:w-20 sm:h-20 opacity-80 group-hover:opacity-100 transition-opacity duration-200">
          <CategoryIcon id={category.id} color={theme.accent} />
        </div>

        {/* Text bottom-left */}
        <div>
          <p
            className="mb-2 text-xs uppercase tracking-widest"
            style={{ color: theme.accent, fontFamily: "'Inter', sans-serif" }}
          >
            {category.tagline}
          </p>
          <h2
            className="mb-0 leading-none"
            style={{
              fontFamily: theme.headingFont,
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              fontWeight: 600,
              color: theme.text,
              letterSpacing: '-0.02em',
            }}
          >
            {category.title}
          </h2>
          <div
            className="mt-5 flex items-center gap-2 text-xs"
            style={{ color: theme.textSoft, fontFamily: "'Inter', sans-serif" }}
          >
            <span>{category.blogs.length} entries</span>
            <span style={{ color: theme.accent }}>→</span>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{ background: `${theme.accent}08` }}
      />
    </a>
  )
}
