"use client";

import { useEffect, useMemo, useState } from "react";
import { MessageSquare, Bug, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const API_BASE = "https://api.my-resume.in/api";

const TABS = [
  {
    key: "feedback",
    label: "Feedback",
    icon: MessageSquare,
    blurb: "Tell us what you love, what to improve, what features you wish existed.",
    sla: "≈ 24h",
  },
  {
    key: "issue",
    label: "Report Issue",
    icon: Bug,
    blurb: "Found a bug, broken page, or something that should work but doesn't? Tell us here.",
    sla: "≈ 12h",
  },
];

const CHANNELS = [
  { k: "EMAIL", v: "info@zevo-works.in", href: "mailto:info@zevo-works.in", live: true },
  { k: "LINKEDIN", v: "/in/gangadhara-k-s", href: "https://www.linkedin.com/in/gangadhara-k-s-563142286/" },
  { k: "PORTFOLIO", v: "gangadharaks.in", href: "https://gangadharaks.in" },
];

export default function ContactForm() {
  const [tab, setTab] = useState("feedback");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [tick, setTick] = useState(0);

  // Stable per-mount ticket id for the console feel
  const ticketId = useMemo(() => {
    const hex = "0123456789ABCDEF";
    let s = "";
    for (let i = 0; i < 6; i++) s += hex[Math.floor(Math.random() * 16)];
    return `ZW-${s}`;
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 1000), 90);
    return () => clearInterval(id);
  }, []);

  useEffect(() => { setError(null); setSuccess(null); }, [tab]);

  const activeTab = TABS.find((t) => t.key === tab);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null); setSuccess(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Name, email, and message are required."); return;
    }
    if (message.trim().length < 10) {
      setError("Please write at least 10 characters so we have enough context."); return;
    }
    setBusy(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          type: tab,
          source: "zevo-works.in",
          ticketId,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      setSuccess(data.message || `Ticket ${ticketId} received — reply heading to your inbox.`);
      setSubject(""); setMessage("");
    } catch (err) {
      setError(err.message || "Could not send. Try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section id="contact" className="bg-paper border-b hairline">
      {/* Coord strip */}
      <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
        <span>08 / CONTACT</span>
        <span className="hidden md:inline">SUPPORT_CONSOLE · DIRECT_LINE</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-forest animate-[blink_1.4s_steps(2)_infinite]" />
          OPEN
        </span>
      </div>

      {/* ───── Heading row ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b hairline">
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 lg:border-r hairline bg-mosaic-faint">
          <div className="mono-label text-forest mb-4">/contact</div>
          <h1 className="h-display text-5xl md:text-7xl text-forest">
            Open a<br />
            <span className="bg-mint/55 px-2">ticket.</span>
          </h1>
          <p className="mt-6 text-[14px] text-grid leading-relaxed max-w-xl">
            Replies come from{" "}
            <span className="text-forest font-semibold">info@zevo-works.in</span>{" "}
            — usually within a day. Pick a channel, fill the form, hit send.
          </p>
        </div>

        <div className="lg:col-span-4 p-8 md:p-10 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="mono-label text-grid/55">§ METADATA</span>
            <span className="mono-label !text-[10px] px-2 py-0.5 border border-forest bg-mint/40 text-forest">
              READY
            </span>
          </div>
          <dl className="border hairline-strong">
            {[
              ["TICKET_ID", ticketId],
              ["TYPE", tab.toUpperCase()],
              ["SLA", activeTab.sla],
              ["TELEMETRY", `T+${String(tick).padStart(3, "0")}ms`],
              ["JURISDICTION", "BLR · IN"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] border-b hairline last:border-b-0">
                <dt className="px-3 py-2 mono-label text-grid/55 border-r hairline">{k}</dt>
                <dd className="px-3 py-2 mono-label !text-[11px] text-forest">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ───── Body: channels + ticket form ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
        {/* Channels sidebar */}
        <aside className="lg:border-r hairline">
          <div className="px-6 md:px-8 py-4 border-b hairline flex items-center justify-between bg-mosaic-faint">
            <span className="mono-label text-forest">§ CHANNELS</span>
            <span className="mono-label text-grid/55">n={CHANNELS.length}</span>
          </div>

          <ul>
            {CHANNELS.map((c, i) => (
              <li key={c.k}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block px-6 md:px-8 py-4 border-b hairline btn-snap hover:bg-mint/10"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="mono-label text-forest">
                      {String(i + 1).padStart(2, "0")} · {c.k}
                    </span>
                    {c.live ? (
                      <span className="mono-label text-mint inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-mint" /> LIVE
                      </span>
                    ) : (
                      <span className="mono-label text-grid/40">link</span>
                    )}
                  </div>
                  <div className="font-[JetBrains_Mono] text-[12px] text-grid group-hover:text-forest break-all">
                    {c.v}
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* SLA block */}
          <div className="px-6 md:px-8 py-5 border-b hairline">
            <div className="mono-label text-grid/55 mb-3">§ RESPONSE_SLA</div>
            <dl className="border hairline">
              <div className="grid grid-cols-[100px_1fr] border-b hairline">
                <dt className="px-3 py-2 mono-label text-grid/55 border-r hairline">FEEDBACK</dt>
                <dd className="px-3 py-2 mono-label !text-[11px] text-forest">≈ 24h</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] border-b hairline">
                <dt className="px-3 py-2 mono-label text-grid/55 border-r hairline">ISSUES</dt>
                <dd className="px-3 py-2 mono-label !text-[11px] text-forest">≈ 12h</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr]">
                <dt className="px-3 py-2 mono-label text-grid/55 border-r hairline">LEGAL</dt>
                <dd className="px-3 py-2 mono-label !text-[11px] text-forest">≈ 5d</dd>
              </div>
            </dl>
          </div>

          {/* Hours */}
          <div className="px-6 md:px-8 py-5 mono-label text-grid/55">
            <div>HOURS · MON–FRI · 09:00–18:00 IST</div>
            <div className="mt-1">RATE_LIMIT · 5 msg / hour</div>
          </div>
        </aside>

        {/* Ticket form */}
        <div className="bg-mosaic-faint">
          <div className="p-6 md:p-10">
            {/* Ticket chrome */}
            <div className="relative border hairline-strong corner-markers bg-paper">
              <span className="cm-tr" />
              <span className="cm-br" />

              {/* Console header */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center border-b hairline-strong">
                <div className="px-5 py-3 mono-label text-forest inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest animate-[blink_1.4s_steps(2)_infinite]" />
                  TICKET · {ticketId}
                </div>
                <div className="hidden md:block w-px self-stretch bg-grid/20" />
                <div className="px-5 py-3 mono-label text-grid/55 flex items-center justify-end gap-3 border-t md:border-t-0 hairline">
                  <span>STATUS</span>
                  <span className="px-2 py-0.5 border border-forest bg-mint/30 text-forest">
                    DRAFT
                  </span>
                  <span>·</span>
                  <span>T+{String(tick).padStart(3, "0")}</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-2 border-b hairline-strong">
                {TABS.map((t) => {
                  const Icon = t.icon;
                  const isActive = t.key === tab;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setTab(t.key)}
                      className={`relative flex items-center justify-center gap-2 px-4 py-4 mono-label transition-colors border-r hairline last:border-r-0 ${
                        isActive
                          ? "bg-mint/40 text-forest"
                          : "bg-paper text-grid/55 hover:text-forest hover:bg-mint/10"
                      }`}
                    >
                      <Icon size={12} />
                      <span>{t.label}</span>
                      {isActive && (
                        <>
                          <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-forest" />
                          <span className="absolute -top-px -right-px w-2 h-2 border-t border-r border-forest" />
                          <span className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-forest" />
                          <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-forest" />
                        </>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Form body */}
              <div className="p-5 md:p-7">
                <div className="flex gap-4 mb-5">
                  <div className="w-px bg-forest/45 shrink-0" />
                  <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.02em] leading-[1.7] text-grid uppercase">
                    {activeTab.blurb}
                  </p>
                </div>

                {error && (
                  <div className="mb-4 border border-coral bg-coral/10 px-3 py-2 flex items-center gap-2">
                    <AlertCircle size={14} className="text-coral" />
                    <span className="mono-label !text-[11px] !tracking-normal text-coral">{error}</span>
                  </div>
                )}
                {success && (
                  <div className="mb-4 border border-forest bg-mint/30 px-3 py-2 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-forest" />
                    <span className="mono-label !text-[11px] !tracking-normal text-forest">{success}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="mono-label text-grid/70 block mb-2">
                        NAME *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        maxLength={100}
                        placeholder="Your name"
                        className="w-full bg-paper border hairline-strong px-3 py-2.5 font-[JetBrains_Mono] text-[12.5px] text-forest placeholder:text-grid/40 focus:outline-none focus:border-forest focus:bg-mint/10"
                      />
                    </div>
                    <div>
                      <label className="mono-label text-grid/70 block mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        maxLength={200}
                        placeholder="you@domain.com"
                        className="w-full bg-paper border hairline-strong px-3 py-2.5 font-[JetBrains_Mono] text-[12.5px] text-forest placeholder:text-grid/40 focus:outline-none focus:border-forest focus:bg-mint/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mono-label text-grid/70 block mb-2">
                      {tab === "issue" ? "AFFECTED · page or feature" : "TOPIC"}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      maxLength={200}
                      placeholder={tab === "issue" ? "e.g. my-resume editor — PDF blank" : "e.g. roadmap suggestion"}
                      className="w-full bg-paper border hairline-strong px-3 py-2.5 font-[JetBrains_Mono] text-[12.5px] text-forest placeholder:text-grid/40 focus:outline-none focus:border-forest focus:bg-mint/10"
                    />
                  </div>

                  <div>
                    <label className="mono-label text-grid/70 block mb-2">
                      {tab === "issue" ? "DESCRIBE_ISSUE *" : "BODY *"}
                    </label>
                    <div className="relative border hairline-strong focus-within:border-forest">
                      <div className="flex items-center justify-between px-3 py-1.5 border-b hairline bg-mosaic-faint">
                        <span className="mono-label text-grid/55">message.txt</span>
                        <span className="mono-label text-grid/55">{message.length} / 5000</span>
                      </div>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value.slice(0, 5000))}
                        required
                        rows={7}
                        placeholder={tab === "issue"
                          ? "What did you try? What did you expect? What happened instead?"
                          : "Anything — design, content, ideas, complaints…"}
                        className="w-full bg-paper px-3 py-2.5 font-[JetBrains_Mono] text-[12.5px] text-forest placeholder:text-grid/40 focus:outline-none resize-y"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={busy}
                    className="group relative w-full bg-forest text-paper border border-forest hover:bg-forest-deep btn-snap overflow-hidden disabled:opacity-60"
                  >
                    <span className="absolute inset-y-0 left-0 w-1.5 bg-mint" />
                    <div className="px-5 py-4 flex items-center justify-between">
                      <div>
                        <div className="mono-label text-mint">
                          {busy ? "▶ TRANSMITTING…" : "▶ SUBMIT_TICKET"}
                        </div>
                        <div className="h-display text-xl text-paper mt-1">
                          {busy ? "sending…" : `Send ${tab}`}
                        </div>
                      </div>
                      {busy ? (
                        <Loader2 size={22} className="animate-spin text-paper" />
                      ) : (
                        <span className="h-display text-2xl text-paper group-hover:translate-x-1 transition-transform">→</span>
                      )}
                    </div>
                    <div className="px-5 py-2 border-t border-paper/20 flex items-center justify-between mono-label !text-[10px] text-paper/70">
                      <span>POST {API_BASE}/contact</span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-mint animate-[blink_0.9s_steps(2)_infinite]" />
                        secure
                      </span>
                    </div>
                  </button>

                  <p className="mono-label !text-[10px] text-grid/45 text-center pt-1">
                    5 messages per hour limit · IP &amp; browser logged with the message for abuse triage.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature stamp */}
      <div className="grid grid-cols-2 md:grid-cols-6 border-t hairline">
        {[
          ["TICKET", ticketId],
          ["CHANNEL", "ZW—01"],
          ["ROUTED_TO", "info@zevo-works.in"],
          ["RATE_LIMIT", "5 / hr"],
          ["RETENTION", "90d"],
          ["SHEET", "08 / 01"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className={`p-4 ${i !== 0 ? "border-l hairline" : ""} ${i === 3 ? "md:border-l" : ""}`}
          >
            <div className="mono-label !text-[9px] text-grid/55">{k}</div>
            <div className="font-[Space_Grotesk] text-[13px] font-semibold text-forest mt-1.5 truncate">
              {v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
