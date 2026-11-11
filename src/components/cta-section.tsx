"use client";

import Link from "next/link";
import { useContent } from "@/components/content-provider";

export function CTASection() {
  const { cta, contact } = useContent();
  const availItems = cta.availItems;

  return (
    <section
      id="contact"
      className="scroll-mt-16 border-b-[2.5px]"
      style={{
        borderColor: "var(--ink)",
        background: "var(--surface)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div
          className="nb-box grid grid-cols-1 lg:grid-cols-[1.2fr_2.5px_0.8fr]"
          style={{ borderColor: "var(--ink)" }}
        >
          {/* Left Command Dispatch */}
          <div
            className="flex flex-col justify-between p-8 md:p-10 lg:p-12"
            style={{
              background: "#111210",
              color: "#F4F1EA",
            }}
          >
            <div>
              <h2
                className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-black uppercase leading-[0.88]"
                style={{ color: "#F4F1EA" }}
              >
                {cta.headline}{" "}
                <span
                  className="mt-1 block"
                  style={{ color: "#D9F938" }}
                >
                  {cta.subline}
                </span>
              </h2>

              <p
                className="mt-4 max-w-[60ch] text-[0.95rem] leading-[1.6]"
                style={{ color: "#D4D1C8" }}
              >
                {contact.tagline} Feel free to reach out for roles, open-source
                collaboration, or engineering conversations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="nb-btn px-5 py-3 text-[0.74rem]"
                  style={{
                    borderColor: "#F4F1EA",
                    background: "var(--signal)",
                    color: "#FFFFFF",
                    boxShadow: "3px 3px 0px #F4F1EA",
                  }}
                >
                  <span>Email: {contact.email}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="square"
                    aria-hidden="true"
                  >
                    <path d="M3 9L9 3M9 3H4M9 3V8" />
                  </svg>
                </a>

                <Link
                  href="/hire"
                  className="nb-btn px-5 py-3 text-[0.74rem]"
                  style={{
                    borderColor: "#F4F1EA",
                    background: "#D9F938",
                    color: "#111210",
                    boxShadow: "3px 3px 0px #F4F1EA",
                  }}
                >
                  <span>Resume &amp; Fit Check</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="square"
                    aria-hidden="true"
                  >
                    <path d="M3 9L9 3M9 3H4M9 3V8" />
                  </svg>
                </Link>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn px-4 py-3 text-[0.74rem]"
                  style={{
                    borderColor: "#F4F1EA",
                    background: "transparent",
                    color: "#F4F1EA",
                    boxShadow: "3px 3px 0px #F4F1EA",
                  }}
                >
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t pt-4 font-data text-[0.68rem] font-bold uppercase"
              style={{ borderColor: "rgba(244, 241, 234, 0.22)", color: "#D4D1C8" }}
            >
              <span>{contact.phone}</span>
              <span>{contact.location}</span>
            </div>
          </div>

          {/* Vertical Structural Rule */}
          <div
            className="hidden lg:block"
            style={{ background: "var(--ink)" }}
          />

          {/* Right Panel */}
          <div
            className="flex flex-col justify-between border-t-[2.5px] p-8 lg:border-t-0 lg:p-10"
            style={{
              borderColor: "var(--ink)",
              background: "var(--volt)",
              color: "#111210",
            }}
          >
            <div>
              <h3 className="font-display text-[1.75rem] font-black uppercase leading-none">
                Available For
              </h3>
              <p className="mt-2 text-[0.84rem] font-medium leading-relaxed">
                Open to connecting on:
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                {availItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-2 border-[#111210] bg-[#F4F1EA] px-4 py-3 text-[#111210]"
                    style={{ boxShadow: "3px 3px 0px #111210" }}
                  >
                    <span className="font-data text-[0.74rem] font-bold uppercase">
                      {item}
                    </span>
                    <span
                      className="inline-block h-2.5 w-2.5 border border-[#111210]"
                      style={{ background: "var(--emerald)" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
