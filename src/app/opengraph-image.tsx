import { ImageResponse } from "next/og";

export const alt = "Sri Maniteja Chinnam — Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 40%, #1d253a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 900,
            padding: 48,
            borderRadius: 24,
            backgroundColor: "rgba(15, 23, 42, 0.95)",
            border: "1px solid rgba(148, 163, 184, 0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                padding: "6px 14px",
                borderRadius: 16,
                border: "1px solid rgba(148, 163, 184, 0.5)",
                fontSize: 14,
                color: "#e5e7eb",
              }}
            >
              sri-portfolio
            </span>
            <span style={{ fontSize: 13, color: "#9ca3af" }}>
              deployed · vercel
            </span>
          </div>

          <div
            style={{
              fontSize: 42,
              fontWeight: 900,
              letterSpacing: "0.08em",
              color: "#f9fafb",
              marginBottom: 16,
            }}
          >
            SRI MANITEJA CHINNAM
          </div>

          <div
            style={{
              padding: "6px 14px",
              borderRadius: 16,
              border: "1px solid rgba(148, 163, 184, 0.5)",
              fontSize: 15,
              color: "#a5b4fc",
              alignSelf: "flex-start",
              marginBottom: 12,
            }}
          >
            full-stack engineer — AI
          </div>

          <div
            style={{
              fontSize: 13,
              color: "#e5e7eb",
              marginBottom: 24,
            }}
          >
            const focus = &quot;LLM apps that ship&quot;;
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Next.js", "TypeScript", "LangChain · RAG"].map((label, i) => (
              <span
                key={label}
                style={{
                  padding: "6px 14px",
                  borderRadius: 15,
                  border: `1px solid ${["#38bdf8", "#22c55e", "#a855f7"][i]}80`,
                  fontSize: 13,
                  fontWeight: 600,
                  color: ["#e0f2fe", "#dcfce7", "#f5f3ff"][i],
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 70,
            fontSize: 13,
            color: "rgba(148, 163, 184, 0.88)",
          }}
        >
          srichinnam.space · Next.js · TypeScript · AI / RAG
        </div>
      </div>
    ),
    { ...size }
  );
}
