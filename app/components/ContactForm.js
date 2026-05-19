"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Bug, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// The Resume tool backend exposes /api/contact. We POST cross-origin from the
// marketing site directly to it. The backend's CORS allow-list already
// includes https://zevo-works.in.
const API_BASE = "https://api.my-resume.in/api";

const TABS = [
  { key: "feedback", label: "Feedback",     icon: MessageSquare,
    blurb: "Tell us what you love, what to improve, what features you wish existed." },
  { key: "issue",    label: "Report Issue", icon: Bug,
    blurb: "Found a bug, broken page, or something that should work but doesn't? Tell us here." },
];

export default function ContactForm() {
  const [tab, setTab]         = useState("feedback");
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy]       = useState(false);
  const [error, setError]     = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => { setError(null); setSuccess(null); }, [tab]);

  const activeTab = TABS.find(t => t.key === tab);

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
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      setSuccess(data.message || "Thanks — we received your message and will reply to your email.");
      setSubject(""); setMessage("");
    } catch (err) {
      setError(err.message || "Could not send. Try again in a moment.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="bg-paper">
      <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
        <span>07 / CONTACT</span>
        <span className="hidden md:inline">DIRECT LINE · admin@zevo-works.in</span>
        <span>v1.0</span>
      </div>

      <div className="px-4 md:px-8 py-6 md:py-10">
        <Link
          href="/"
          className="mono-label text-grid/55 hover:text-forest inline-flex items-center gap-1 mb-4"
        >
          <ArrowLeft size={11} /> Back home
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="mono-label text-forest mb-3 inline-flex items-center gap-2">
              <Mail size={12} /> Get in touch
            </div>
            <h1 className="h-display text-5xl md:text-7xl text-forest leading-[0.95]">
              Say hi.<br />
              <span className="bg-mint/55 px-2">We&apos;ll reply.</span>
            </h1>
            <p className="text-[14px] text-grid leading-relaxed mt-4 max-w-xl">
              Replies come from{" "}
              <span className="font-semibold text-forest">admin@zevo-works.in</span>.
              Pick one of the two below.
            </p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 border hairline-strong">
            {TABS.map(t => {
              const Icon = t.icon;
              const active = t.key === tab;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 mono-label uppercase tracking-widest text-sm transition-colors border-r hairline last:border-r-0 ${
                    active ? "bg-mint/40 text-forest font-bold" : "bg-paper text-grid/55 hover:text-forest hover:bg-mint/10"
                  }`}
                >
                  <Icon size={14} />
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Form */}
          <div className="border border-t-0 hairline-strong p-5 md:p-6 bg-paper">
            <p className="text-[14px] text-grid leading-relaxed mb-5">{activeTab.blurb}</p>

            {error && (
              <div className="mb-4 border border-coral bg-coral/10 px-3 py-2 flex items-center gap-2">
                <AlertCircle size={14} className="text-coral" />
                <span className="text-sm text-coral">{error}</span>
              </div>
            )}
            {success && (
              <div className="mb-4 border border-forest bg-mint/30 px-3 py-2 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-forest" />
                <span className="text-sm text-forest">{success}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="mono-label text-grid/55 block mb-1">Your name *</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} required maxLength={100}
                    className="w-full text-[14px] bg-paper border hairline-strong px-3 py-2 outline-none focus:bg-mint/10" />
                </div>
                <div>
                  <label className="mono-label text-grid/55 block mb-1">Your email *</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required maxLength={200}
                    className="w-full text-[14px] bg-paper border hairline-strong px-3 py-2 outline-none focus:bg-mint/10" />
                </div>
              </div>

              <div>
                <label className="mono-label text-grid/55 block mb-1">
                  {tab === "issue" ? "Page or feature affected (optional)" : "Topic (optional)"}
                </label>
                <input type="text" value={subject} onChange={e => setSubject(e.target.value)} maxLength={200}
                  placeholder={tab === "issue" ? "e.g. my-resume editor — PDF blank" : "e.g. Roadmap suggestion"}
                  className="w-full text-[14px] bg-paper border hairline-strong px-3 py-2 outline-none focus:bg-mint/10 placeholder-grid/40" />
              </div>

              <div>
                <label className="mono-label text-grid/55 block mb-1">
                  {tab === "issue" ? "Describe the issue *" : "Your feedback *"}
                </label>
                <textarea value={message} onChange={e => setMessage(e.target.value.slice(0, 5000))} required rows={7}
                  placeholder={tab === "issue"
                    ? "What did you try? What did you expect? What happened instead?"
                    : "Anything — design, content, ideas, complaints…"}
                  className="w-full text-[14px] bg-paper border hairline-strong px-3 py-2 outline-none focus:bg-mint/10 placeholder-grid/40 resize-y" />
                <div className="mono-label !text-[10px] text-grid/40 mt-1 text-right">{message.length}/5000</div>
              </div>

              <button type="submit" disabled={busy}
                className="w-full bg-forest text-paper py-3 px-4 mono-label uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-forest-deep transition-colors disabled:opacity-50">
                {busy ? (<><Loader2 size={14} className="animate-spin" /> Sending…</>) : <>Send {tab} →</>}
              </button>

              <p className="mono-label !text-[10px] text-grid/40 text-center pt-1">
                5 messages per hour limit · IP &amp; browser logged with the message for abuse triage.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
