import { useNav } from '../router'
import { getCategoryById, getBlogById } from '../data/categories'
import { CategoryIcon } from '../components/CategoryIcons'

interface Props { categoryId: string; blogId: string }

export default function BlogPage({ categoryId, blogId }: Props) {
  const { navigate } = useNav()
  const category = getCategoryById(categoryId)
  const blog = getBlogById(categoryId, blogId)

  if (!category || !blog) { navigate(categoryId); return null }

  const { theme } = category
  const idx = category.blogs.findIndex(b => b.id === blogId)
  const prevBlog = idx > 0 ? category.blogs[idx - 1] : null
  const nextBlog = idx < category.blogs.length - 1 ? category.blogs[idx + 1] : null

  return (
    <div style={{ background: theme.bg, color: theme.text, minHeight: '100vh' }}>

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header style={{ background: theme.surface, borderBottom: `1px solid ${theme.border}`, padding: '22px 0' }}>
        <div className="mx-auto max-w-3xl px-8 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate()}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: theme.textMuted, background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = theme.textSoft)}
            onMouseLeave={e => (e.currentTarget.style.color = theme.textMuted)}
          >
            Categories
          </button>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: theme.accent, background: theme.accentSoft, padding: '4px 10px', borderRadius: '2px' }}>
            {blog.tag}
          </span>
        </div>
      </header>

      {/* ── Article header ────────────────────────────────────────────── */}
      <article>
        <header className="relative overflow-hidden" style={{ padding: '72px 0 64px', background: `radial-gradient(ellipse at 85% 10%, ${theme.accentSoft}, transparent 55%)`, borderBottom: `1px solid ${theme.border}` }}>
          <div aria-hidden="true" className="absolute pointer-events-none" style={{ top: '32px', right: '10%', width: '120px', height: '120px', opacity: 0.12 }}>
            <CategoryIcon id={category.id} color={theme.accent} />
          </div>
          <div className="mx-auto max-w-3xl px-8">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: theme.textMuted, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span>{blog.date}</span>
              <span style={{ opacity: 0.3 }}>·</span>
              <button onClick={() => navigate(category.id)} style={{ color: theme.accent, background: 'none', border: 'none', borderBottom: `1px solid ${theme.accentSoft}`, cursor: 'pointer', padding: 0, fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>
                {category.title}
              </button>
            </p>
            <h1 style={{ fontFamily: theme.headingFont, fontWeight: 600, fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: theme.text, margin: 0, maxWidth: '22ch' }}>
              {blog.title}
            </h1>
          </div>
        </header>

        {/* ── Article body placeholder ──────────────────────────────── */}
        <div style={{ padding: '56px 0 72px' }}>
          <div className="mx-auto max-w-3xl px-8">
            {['Introduction', 'Body', 'Conclusion'].map(heading => (
              <div key={heading} style={{ marginBottom: '32px' }}>
                <h2 style={{ fontFamily: theme.headingFont, fontWeight: 500, fontSize: '22px', color: theme.textSoft, marginBottom: '16px' }}>{heading}</h2>
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
              <button onClick={() => navigate(category.id, prevBlog.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: theme.textMuted, marginBottom: '8px' }}>← Previous</p>
                <p style={{ fontFamily: theme.headingFont, fontSize: '16px', color: theme.textSoft, margin: 0 }}>{prevBlog.title}</p>
              </button>
            ) : <div />}
            {nextBlog ? (
              <button onClick={() => navigate(category.id, nextBlog.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'right' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: theme.textMuted, marginBottom: '8px' }}>Next →</p>
                <p style={{ fontFamily: theme.headingFont, fontSize: '16px', color: theme.textSoft, margin: 0 }}>{nextBlog.title}</p>
              </button>
            ) : <div />}
          </div>
        </nav>
      )}

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer style={{ background: theme.surface, borderTop: `1px solid ${theme.border}`, padding: '24px 0 32px' }}>
        <div className="mx-auto max-w-3xl px-8 flex justify-between items-center flex-wrap gap-4">
          <button onClick={() => navigate()} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: theme.textMuted, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            ← All categories
          </button>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: theme.textMuted, margin: 0 }}>Meridian & Co.</p>
        </div>
      </footer>

    </div>
  )
}
