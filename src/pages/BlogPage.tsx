import { href, navigate } from '../router'
import { getCategoryById, getBlogById } from '../data/categories'
import { CategoryIcon } from '../components/CategoryIcons'

interface Props { categoryId: string; blogId: string }

export default function BlogPage({ categoryId, blogId }: Props) {
  const category = getCategoryById(categoryId)
  const blog = getBlogById(categoryId, blogId)

  if (!category || !blog) {
    navigate(categoryId)
    return null
  }

  const { theme } = category
  const idx = category.blogs.findIndex(b => b.id === blogId)
  const prevBlog = idx > 0 ? category.blogs[idx - 1] : null
  const nextBlog = idx < category.blogs.length - 1 ? category.blogs[idx + 1] : null

  return (
    <div style={{ background: theme.bg, color: theme.text, minHeight: '100vh' }}>

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header style={{ background: theme.surface, borderBottom: `1px solid ${theme.border}`, padding: '22px 0' }}>
        <div className="mx-auto max-w-3xl px-8 flex items-center justify-between gap-4">
          <a
            href={href(category.id)}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: theme.textMuted, transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = theme.textSoft)}
            onMouseLeave={e => (e.currentTarget.style.color = theme.textMuted)}
          >
            ← {category.title}
          </a>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: '12px', color: theme.accent,
            background: theme.accentSoft, padding: '4px 10px', borderRadius: '2px',
          }}>
            {blog.tag}
          </span>
        </div>
      </header>

      {/* ── Article header ────────────────────────────────────────────── */}
      <article>
        <header
          className="relative overflow-hidden"
          style={{
            padding: '72px 0 64px',
            background: `radial-gradient(ellipse at 85% 10%, ${theme.accentSoft}, transparent 55%)`,
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <div aria-hidden="true" className="absolute pointer-events-none" style={{ top: '32px', right: '10%', width: '120px', height: '120px', opacity: 0.12 }}>
            <CategoryIcon id={category.id} color={theme.accent} />
          </div>

          <div className="mx-auto max-w-3xl px-8">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: theme.textMuted, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span>{blog.date}</span>
              <span style={{ opacity: 0.3 }}>·</span>
              <a href={href(category.id)} style={{ color: theme.accent, borderBottom: `1px solid ${theme.accentSoft}` }}>
                {category.title}
              </a>
            </p>
            <h1 style={{
              fontFamily: theme.headingFont, fontWeight: 600,
              fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1,
              letterSpacing: '-0.02em', color: theme.text, margin: 0, maxWidth: '22ch',
            }}>
              {blog.title}
            </h1>
          </div>
        </header>

        {/* ── Article body placeholder ──────────────────────────────── */}
        <div style={{ padding: '56px 0 72px' }}>
          <div className="mx-auto max-w-3xl px-8">
            {['Introduction', 'Body', 'Conclusion'].map(heading => (
              <div key={heading} style={{ marginBottom: '32px' }}>
                <h2 style={{ fontFamily: theme.headingFont, fontWeight: 500, fontSize: '22px', color: theme.textSoft, marginBottom: '16px' }}>
                  {heading}
                </h2>
                <div style={{ width: '100%', height: '1px', background: theme.border }} />
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* ── Prev / next ───────────────────────────────────────────────── */}
      {(prevBlog || nextBlog) && (
        <nav style={{ borderTop: `1px solid ${theme.border}`, padding: '40px 0' }}>
          <div className="mx-auto max-w-3xl px-8" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {prevBlog ? (
              <a href={href(category.id, prevBlog.id)} style={{ display: 'block' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: theme.textMuted, marginBottom: '8px' }}>← Previous</p>
                <p style={{ fontFamily: theme.headingFont, fontSize: '16px', color: theme.textSoft, margin: 0, transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = theme.text)}
                  onMouseLeave={e => (e.currentTarget.style.color = theme.textSoft)}
                >{prevBlog.title}</p>
              </a>
            ) : <div />}

            {nextBlog ? (
              <a href={href(category.id, nextBlog.id)} style={{ display: 'block', textAlign: 'right' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: theme.textMuted, marginBottom: '8px' }}>Next →</p>
                <p style={{ fontFamily: theme.headingFont, fontSize: '16px', color: theme.textSoft, margin: 0, transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = theme.text)}
                  onMouseLeave={e => (e.currentTarget.style.color = theme.textSoft)}
                >{nextBlog.title}</p>
              </a>
            ) : <div />}
          </div>
        </nav>
      )}

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer style={{ background: theme.surface, borderTop: `1px solid ${theme.border}`, padding: '24px 0 32px' }}>
        <div className="mx-auto max-w-3xl px-8 flex justify-between items-center flex-wrap gap-4">
          <a href={href()} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: theme.textMuted }}>
            ← All journals
          </a>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: theme.textMuted, margin: 0 }}>
            Meridian & Co.
          </p>
        </div>
      </footer>

    </div>
  )
}
