import { useNav } from "../router"
import { getCategoryById } from "../data/categories"
import { getPostById, getPostsByCategory } from "../data/posts"
import { CategoryIcon } from "../components/CategoryIcons"

interface Props {
  categoryId: string
  postId: string
}

export default function BlogPage({ categoryId, postId }: Props) {
  const { navigate } = useNav()
  const category = getCategoryById(categoryId)
  const post = getPostById(postId)

  if (!category || !post) {
    navigate(categoryId)
    return null
  }

  const { theme } = category
  const posts = getPostsByCategory(categoryId)
  const idx = posts.findIndex((p) => p.id === postId)
  const prevPost = idx > 0 ? posts[idx - 1] : null
  const nextPost = idx < posts.length - 1 ? posts[idx + 1] : null

  return (
    <div
      style={{ background: theme.bg, color: theme.text, minHeight: "100vh" }}
    >
      <header
        style={{
          background: theme.surface,
          borderBottom: `1px solid ${theme.border}`,
          padding: "22px 0",
        }}
      >
        <div className="mx-auto max-w-3xl px-8 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate()}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: theme.textMuted,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = theme.textSoft)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = theme.textMuted)
            }
          >
            Categories
          </button>
          <button
            onClick={() => navigate(categoryId)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: theme.accent,
              background: theme.accentSoft,
              padding: "4px 10px",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {category.title}
          </button>
        </div>
      </header>

      <article>
        <header
          className="relative overflow-hidden"
          style={{
            padding: "72px 0 64px",
            background: `radial-gradient(ellipse at 85% 10%, ${theme.accentSoft}, transparent 55%)`,
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              top: "32px",
              right: "10%",
              width: "120px",
              height: "120px",
              opacity: 0.12,
            }}
          >
            <CategoryIcon id={category.id} color={theme.accent} />
          </div>
          <div className="mx-auto max-w-3xl px-8">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: theme.textMuted,
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span>{post.date}</span>
              {post.tag && (
                <>
                  <span style={{ opacity: 0.3 }}>·</span>
                  <span style={{ color: theme.accent }}>{post.tag}</span>
                </>
              )}
            </p>
            <h1
              style={{
                fontFamily: theme.headingFont,
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: theme.text,
                margin: 0,
                maxWidth: "24ch",
              }}
            >
              {post.title}
            </h1>
          </div>
        </header>

        {/* ── Rendered markdown content ─────────────────────────────── */}
        <div style={{ padding: "56px 0 72px" }}>
          <div
            className="mx-auto max-w-3xl px-8 prose-content"
            style={{
              fontFamily: theme.bodyFont,
              fontSize: "17px",
              lineHeight: 1.75,
              color: theme.textSoft,

              /* Inline prose styles via CSS vars so they adapt to theme */
              ["--prose-heading" as string]: theme.text,
              ["--prose-accent" as string]: theme.accent,
              ["--prose-border" as string]: theme.border,
              ["--prose-code-bg" as string]: theme.surface,
            }}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

      {(prevPost || nextPost) && (
        <nav
          style={{ borderTop: `1px solid ${theme.border}`, padding: "40px 0" }}
        >
          <div
            className="mx-auto max-w-3xl px-8"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            {prevPost ? (
              <button
                onClick={() => navigate(categoryId, prevPost.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: theme.textMuted,
                    marginBottom: "8px",
                  }}
                >
                  ← Previous
                </p>
                <p
                  style={{
                    fontFamily: theme.headingFont,
                    fontSize: "16px",
                    color: theme.textSoft,
                    margin: 0,
                  }}
                >
                  {prevPost.title}
                </p>
              </button>
            ) : (
              <div />
            )}
            {nextPost ? (
              <button
                onClick={() => navigate(categoryId, nextPost.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "right",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: theme.textMuted,
                    marginBottom: "8px",
                  }}
                >
                  Next →
                </p>
                <p
                  style={{
                    fontFamily: theme.headingFont,
                    fontSize: "16px",
                    color: theme.textSoft,
                    margin: 0,
                  }}
                >
                  {nextPost.title}
                </p>
              </button>
            ) : (
              <div />
            )}
          </div>
        </nav>
      )}

      <footer
        style={{
          background: theme.surface,
          borderTop: `1px solid ${theme.border}`,
          padding: "24px 0 32px",
        }}
      >
        <div className="mx-auto max-w-3xl px-8 flex justify-between items-center flex-wrap gap-4">
          <button
            onClick={() => navigate()}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: theme.textMuted,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← All categories
          </button>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: theme.textMuted,
              margin: 0,
            }}
          >
            Meridian & Co.
          </p>
        </div>
      </footer>
    </div>
  )
}
