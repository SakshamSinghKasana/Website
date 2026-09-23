import { useNav } from "../router"
import { getCategoryById } from "../data/categories"
import { getPostsByCategory } from "../data/posts"

interface Props {
  categoryId: string
}

export default function CategoryPage({ categoryId }: Props) {
  const { navigate } = useNav()
  const category = getCategoryById(categoryId)

  if (!category) {
    navigate()
    return null
  }

  const { theme } = category
  const posts = getPostsByCategory(categoryId)

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
        <div className="mx-auto max-w-4xl px-8 flex items-center justify-between gap-4">
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
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: theme.accent,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {category.title}
          </span>
        </div>
      </header>

      <section
        className="relative overflow-hidden"
        style={{
          padding: "72px 0 64px",
          background: `radial-gradient(ellipse at 90% 0%, ${theme.accentSoft}, transparent 55%)`,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div className="mx-auto max-w-4xl px-8">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: theme.accent,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            {category.tagline}
          </p>
          <h1
            style={{
              fontFamily: theme.headingFont,
              fontWeight: 600,
              fontSize: "clamp(40px, 7vw, 72px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: theme.text,
              margin: "0 0 20px",
            }}
          >
            {category.title}
          </h1>
          <p
            style={{
              fontFamily: theme.bodyFont,
              fontSize: "17px",
              lineHeight: 1.65,
              color: theme.textSoft,
              maxWidth: "52ch",
              margin: 0,
            }}
          >
            {category.description}
          </p>
        </div>
      </section>

      <section style={{ padding: "56px 0 80px" }}>
        <div className="mx-auto max-w-4xl px-8">
          <h2
            style={{
              fontFamily: theme.headingFont,
              fontWeight: 600,
              fontSize: "14px",
              color: theme.textMuted,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 32px",
              paddingBottom: "16px",
              borderBottom: `1px solid ${theme.border}`,
            }}
          >
            All entries — {posts.length}
          </h2>

          {posts.length === 0 ? (
            <p
              style={{
                fontFamily: theme.bodyFont,
                color: theme.textMuted,
                fontSize: "16px",
              }}
            >
              No posts yet. Add a <code>.md</code> file to{" "}
              <code>src/posts/</code> with <code>category: {categoryId}</code>.
            </p>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {posts.map((post, i) => (
                <li
                  key={post.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "96px 1fr auto",
                    gap: "28px",
                    alignItems: "start",
                    padding: "24px 0",
                    borderBottom: `1px solid ${theme.border}`,
                    ...(i === 0 ? { paddingTop: 0 } : {}),
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: theme.textMuted,
                      paddingTop: "3px",
                    }}
                  >
                    {post.date}
                  </span>
                  <button
                    onClick={() => navigate(categoryId, post.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: theme.headingFont,
                        fontWeight: 500,
                        fontSize: "22px",
                        lineHeight: 1.25,
                        color: theme.text,
                        margin: 0,
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = theme.accent)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = theme.text)
                      }
                    >
                      {post.title}
                    </h3>
                  </button>
                  {post.tag && (
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        color: theme.accent,
                        background: theme.accentSoft,
                        padding: "5px 11px",
                        borderRadius: "2px",
                        whiteSpace: "nowrap",
                        height: "fit-content",
                      }}
                    >
                      {post.tag}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <footer
        style={{
          background: theme.surface,
          borderTop: `1px solid ${theme.border}`,
          padding: "24px 0 32px",
        }}
      >
        <div className="mx-auto max-w-4xl px-8 flex justify-between items-center flex-wrap gap-4">
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
            ← Back to categories
          </button>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: theme.textMuted,
              margin: 0,
            }}
          >
            Mr. Baguette
          </p>
        </div>
      </footer>
    </div>
  )
}
