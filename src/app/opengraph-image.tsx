import { ImageResponse } from "next/og";

export const alt = "Sri Maniteja Chinnam — Software Engineer @ Rivian · Full-Stack & AI";
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
          justifyContent: "space-between",
          backgroundColor: "#F4F1EA",
          padding: "44px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#111210",
        }}
      >
        {/* Main Neobrutalist Chassis Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            backgroundColor: "#FAF8F3",
            border: "4px solid #111210",
            boxShadow: "10px 10px 0px #111210",
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#111210",
              color: "#F4F1EA",
              padding: "18px 32px",
              borderBottom: "4px solid #111210",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#FF521B",
                }}
              />
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                }}
              >
                SRICHINNAM.SPACE
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#D9F938",
                color: "#111210",
                padding: "6px 16px",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "0.06em",
              }}
            >
              12 SHIPPED PROJECTS · 2026
            </div>
          </div>

          {/* Center Identity & Proof */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "36px 40px",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "64px",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                  color: "#111210",
                }}
              >
                SRI MANITEJA CHINNAM
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#FF521B",
                  color: "#FFFFFF",
                  border: "3px solid #111210",
                  padding: "8px 18px",
                  fontSize: "22px",
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                }}
              >
                SOFTWARE ENGINEER @ RIVIAN
              </span>
              <span
                style={{
                  backgroundColor: "#ECE7DC",
                  color: "#111210",
                  border: "3px solid #111210",
                  padding: "8px 18px",
                  fontSize: "22px",
                  fontWeight: 800,
                }}
              >
                FULL-STACK &amp; AI SYSTEMS
              </span>
            </div>

            <div
              style={{
                fontSize: "24px",
                fontWeight: 500,
                color: "#3D3E3A",
                maxWidth: "960px",
                lineHeight: 1.4,
                marginTop: "6px",
              }}
            >
              Shipping production LLM &amp; RAG pipelines, semantic search, and
              full-stack web applications — Creator of Hoard &amp; Refrainly.
            </div>
          </div>

          {/* Bottom Stack Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#ECE7DC",
              borderTop: "4px solid #111210",
              padding: "18px 32px",
            }}
          >
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                "Next.js 16",
                "React 19",
                "TypeScript",
                "LangChain / LangGraph",
                "AWS Bedrock",
                "PostgreSQL",
                "Redis",
              ].map((tech) => (
                <span
                  key={tech}
                  style={{
                    backgroundColor: "#FAF8F3",
                    border: "2px solid #111210",
                    padding: "6px 14px",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#111210",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <span
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: "#111210",
              }}
            >
              M.S. DATA SCIENCE · SUNY BUFFALO
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
