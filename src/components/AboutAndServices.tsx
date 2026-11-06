import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Compass,
  Factory,
  Flask,
  ArrowRight,
  ArrowLeft,
} from "@phosphor-icons/react";
import { TIMELINE, OPERATIONS, COMPARISON_SPECS } from "../data";

const GOLD = "#D4AF37";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
      {children}
    </span>
  );
}

function Timeline() {
  const [idx, setIdx] = useState(TIMELINE.length - 1);
  const m = TIMELINE[idx];
  const next = () => setIdx((i) => Math.min(TIMELINE.length - 1, i + 1));
  const prev = () => setIdx((i) => Math.max(0, i - 1));

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {TIMELINE.map((t, i) => (
          <button
            key={t.year}
            onClick={() => setIdx(i)}
            className={`rounded-full border px-4 py-2 font-mono text-sm transition-colors ${
              i === idx
                ? "border-transparent text-[#0B0F17]"
                : "border-white/15 text-slate-300 hover:border-white/30"
            }`}
            style={i === idx ? { background: GOLD } : undefined}
          >
            {t.year}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.4 }}
          >
            <span
              className="inline-block rounded-md border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ borderColor: `${GOLD}55`, color: GOLD }}
            >
              {m.tag}
            </span>
            <h4 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {m.title}
            </h4>
            <p className="mt-3 max-w-[52ch] leading-relaxed text-slate-300">{m.summary}</p>
            <ul className="mt-6 space-y-3">
              {m.achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-slate-200">
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                    style={{ background: `${GOLD}22`, color: GOLD }}
                  >
                    <Check weight="bold" size={13} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center gap-3">
              <button
                onClick={prev}
                disabled={idx === 0}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white transition-colors hover:bg-white/10 disabled:opacity-30"
                aria-label="Previous milestone"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={idx === TIMELINE.length - 1}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white transition-colors hover:bg-white/10 disabled:opacity-30"
                aria-label="Next milestone"
              >
                <ArrowRight size={18} />
              </button>
              <span className="ml-2 font-mono text-xs text-slate-500">
                {idx + 1} / {TIMELINE.length}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={m.image}
              src={m.image}
              alt={m.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/70 to-transparent" />
          <div className="absolute bottom-4 left-4 font-mono text-4xl font-bold text-white/90">
            {m.year}
          </div>
        </div>
      </div>
    </div>
  );
}

const opIcon = { compass: Compass, factory: Factory, flask: Flask } as const;

function Operations() {
  const [active, setActive] = useState(OPERATIONS[0].id);
  const op = OPERATIONS.find((o) => o.id === active)!;
  const OpIcon = opIcon[op.icon];
  const colIndex = OPERATIONS.findIndex((o) => o.id === active);

  return (
    <div className="mt-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {OPERATIONS.map((o) => {
          const Icon = opIcon[o.icon];
          const on = o.id === active;
          return (
            <button
              key={o.id}
              onClick={() => setActive(o.id)}
              className={`group relative overflow-hidden rounded-xl border p-6 text-left transition-all ${
                on ? "border-white/25 bg-white/[0.06]" : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <Icon weight="duotone" size={30} style={{ color: on ? GOLD : "#94A3B8" }} />
              <div className="mt-4 font-mono text-[11px] uppercase tracking-widest text-slate-500">
                {o.phase}
              </div>
              <div className="text-lg font-semibold text-white">{o.name}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{o.summary}</p>
              {on && (
                <motion.div
                  layoutId="op-active-bar"
                  className="absolute inset-x-0 bottom-0 h-0.5"
                  style={{ background: GOLD }}
                />
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={op.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6 grid gap-6 rounded-2xl border border-white/10 bg-[#111827] p-6 lg:grid-cols-2"
        >
          <div className="relative overflow-hidden rounded-xl">
            <img src={op.image} alt={op.name} className="h-full min-h-[260px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
              <OpIcon weight="fill" size={20} style={{ color: GOLD }} />
              <span className="font-semibold">{op.name} Detail</span>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Key Capabilities</h4>
            <ul className="mt-4 space-y-3">
              {op.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: GOLD }} />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {op.certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-md border px-3 py-1 font-mono text-xs"
                  style={{ borderColor: `${GOLD}44`, color: GOLD }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Comparison matrix */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-[#182234]">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Specification
                </th>
                {OPERATIONS.map((o, i) => (
                  <th
                    key={o.id}
                    onClick={() => setActive(o.id)}
                    className={`cursor-pointer px-5 py-4 text-sm font-semibold transition-colors ${
                      i === colIndex ? "text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {i === colIndex && (
                      <span className="mr-2 inline-block h-2 w-2 rounded-full align-middle" style={{ background: GOLD }} />
                    )}
                    {o.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_SPECS.map((row, r) => (
                <tr key={row.label} className={r % 2 ? "bg-white/[0.02]" : "bg-transparent"}>
                  <td className="px-5 py-3.5 text-sm font-medium text-slate-300">{row.label}</td>
                  {row.values.map((v, c) => (
                    <td
                      key={c}
                      className={`px-5 py-3.5 font-mono text-sm ${
                        c === colIndex ? "text-white" : "text-slate-400"
                      }`}
                      style={c === colIndex ? { background: `${GOLD}12` } : undefined}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function AboutAndServices() {
  return (
    <>
      <section id="about" className="border-t border-white/5 bg-[#0B0F17] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionEyebrow>Company History</SectionEyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Seventeen years, from first intercept to institutional producer.
          </h2>
          <p className="mt-4 max-w-[60ch] text-slate-400">
            Scrub the milestone timeline to trace how Ageno Gold built a certified, low-carbon
            resource base across four operating districts.
          </p>
          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      <section id="operations" className="border-t border-white/5 bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionEyebrow>Operations &amp; Services</SectionEyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Exploration to refining, engineered end to end.
          </h2>
          <p className="mt-4 max-w-[60ch] text-slate-400">
            Select a phase to compare depth, recovery, sustainability and technology across the
            full value chain.
          </p>
          <Operations />
        </div>
      </section>
    </>
  );
}
