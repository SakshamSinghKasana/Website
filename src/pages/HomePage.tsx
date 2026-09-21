import { useNav } from "../router"
import { CATEGORIES } from "../data/categories"
import CategoryCard from "../components/CategoryCard"

const HOME = {
  paper: "#EDE3D0",
  ink: "#2A1F16",
  inkSoft: "#5B4A38",
  espresso: "#2C2014",
  rust: "#9C5A31",
  hair: "rgba(44,32,20,0.16)",
}

export default function HomePage() {
  const { navigate } = useNav()

  return (
    <div
      style={{ background: HOME.paper, color: HOME.ink, minHeight: "100vh" }}
    >
      <header
        style={{
          borderBottom: `1px solid ${HOME.hair}`,
          padding: "28px 0 24px",
        }}
      >
        <div className="mx-auto max-w-6xl px-8 flex items-center justify-between gap-6">
          <button
            onClick={() => navigate()}
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
              fontSize: "21px",
              color: HOME.espresso,
              letterSpacing: "0.01em",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Meridian{" "}
            <span
              style={{ fontStyle: "italic", fontWeight: 420, color: HOME.rust }}
            >
              &amp;
            </span>{" "}
            Co.
          </button>
        </div>
      </header>

      <section
        className="relative overflow-hidden"
        style={{ padding: "80px 0 72px" }}
      >
        <span
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            width: 260,
            height: 260,
            top: -60,
            right: -40,
            borderRadius: "50%",
            border: "7px solid rgba(74,51,31,0.09)",
          }}
        />
        <span
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            width: 120,
            height: 120,
            top: 130,
            right: 220,
            borderRadius: "50%",
            border: "5px solid rgba(74,51,31,0.06)",
          }}
        />
        <div className="mx-auto max-w-6xl px-8">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: HOME.inkSoft,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            A journal of considered things
          </p>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 480,
              fontSize: "clamp(52px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: HOME.espresso,
              margin: "0 0 24px",
            }}
          >
            Writing on things{" "}
            <em
              style={{ fontStyle: "italic", fontWeight: 420, color: "#6E4A2C" }}
            >
              worth
            </em>
            <br />
            paying attention to.
          </h1>
          <p
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "18px",
              lineHeight: 1.65,
              color: HOME.inkSoft,
              maxWidth: "52ch",
              margin: 0,
            }}
          >
            Four journals, each with its own pace and palette — artificial
            intelligence, horology, coffee, and the automobile. Pick a door.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: "80px" }}>
        <div className="mx-auto max-w-6xl px-8">
          <div
            style={{
              borderTop: `1px solid ${HOME.hair}`,
              paddingTop: "48px",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 480,
                fontSize: "26px",
                color: HOME.espresso,
                margin: 0,
              }}
            >
              The journals
            </h2>
          </div>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: HOME.espresso, padding: "28px 0 40px" }}>
        <div className="mx-auto max-w-6xl px-8">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12.5px",
              color: "rgba(242,233,216,0.45)",
              margin: 0,
            }}
          >
            © 2026 Meridian & Co. Written with care, published slowly.
          </p>
        </div>
      </footer>
    </div>
  )
}
