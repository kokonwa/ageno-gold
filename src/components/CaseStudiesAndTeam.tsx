import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowsLeftRight,
  Quotes,
  Star,
  LinkedinLogo,
  X,
  MapPin,
  Check,
  Users,
  SealCheck,
} from "@phosphor-icons/react";
import { CASE_STUDIES, TEAM, TESTIMONIALS } from "../data";
import type { CaseStudy, TeamMember } from "../types";

const GOLD = "#D4AF37";

function BeforeAfter({ study }: { study: CaseStudy }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  };

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (dragging.current) update(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
      className="relative h-[320px] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-white/10 sm:h-[420px]"
    >
      <img src={study.afterImage} alt="After reclamation" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={study.beforeImage}
          alt="Before reclamation"
          className="h-full w-full object-cover"
          style={{ width: ref.current ? `${ref.current.offsetWidth}px` : "100%" }}
          draggable={false}
        />
      </div>
      <div className="absolute inset-y-0 w-0.5 bg-white/90" style={{ left: `${pos}%` }}>
        <div
          className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 shadow-lg"
          style={{ background: GOLD }}
        >
          <ArrowsLeftRight weight="bold" size={20} className="text-[#0B0F17]" />
        </div>
      </div>
      <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-white">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-md bg-black/60 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-white">
        After
      </span>
    </div>
  );
}

function CaseStudies() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {CASE_STUDIES.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.08 * i, duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]"
        >
          <BeforeAfter study={s} />
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-md px-2.5 py-1 font-semibold uppercase tracking-wider" style={{ background: `${GOLD}1f`, color: GOLD }}>
                {s.category}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin size={14} /> {s.location}
              </span>
              <span className="font-mono text-slate-500">{s.year}</span>
            </div>
            <h4 className="mt-4 text-xl font-bold text-white">{s.title}</h4>
            <p className="mt-3 text-sm text-slate-400">
              <span className="font-semibold text-slate-300">Challenge — </span>
              {s.challenge}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              <span className="font-semibold text-slate-300">Outcome — </span>
              {s.outcome}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {s.metrics.map((m) => (
                <div key={m.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
                  <div className="font-mono text-lg font-semibold text-white">{m.value}</div>
                  <div className="mt-1 text-[11px] leading-tight text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: GOLD }}>
              <SealCheck weight="fill" size={16} /> {s.roi}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TeamModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-5 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#111827]"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-md bg-black/40 text-white hover:bg-black/60"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <div className="flex gap-5 border-b border-white/10 p-6">
          <img src={member.photo} alt={member.name} className="h-24 w-24 rounded-xl object-cover" />
          <div>
            <h4 className="text-xl font-bold text-white">{member.name}</h4>
            <p className="text-sm font-medium" style={{ color: GOLD }}>
              {member.role}
            </p>
            <p className="mt-1 font-mono text-xs text-slate-500">{member.tenure}</p>
            <a
              href={member.linkedin}
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
            >
              <LinkedinLogo size={16} /> Connect
            </a>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm leading-relaxed text-slate-300">{member.bio}</p>
          <div className="mt-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Credentials
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {member.credentials.map((c) => (
                <span key={c} className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-200">
                  <Check weight="bold" size={12} style={{ color: GOLD }} /> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Team() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m, i) => (
          <motion.button
            key={m.id}
            onClick={() => setSelected(m)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.06 * i, duration: 0.45 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] text-left transition-colors hover:border-white/25"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={m.photo}
                alt={m.name}
                className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-200">
                {m.division}
              </span>
            </div>
            <div className="p-5">
              <h4 className="font-semibold text-white">{m.name}</h4>
              <p className="text-sm" style={{ color: GOLD }}>
                {m.role}
              </p>
              <p className="mt-2 line-clamp-2 text-xs text-slate-400">{m.bio}</p>
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}

function Testimonials() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {TESTIMONIALS.map((t, i) => (
        <motion.figure
          key={t.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.08 * i, duration: 0.5 }}
          className="flex flex-col rounded-2xl border border-white/10 bg-[#111827] p-6"
        >
          <Quotes weight="fill" size={30} style={{ color: `${GOLD}66` }} />
          <div className="mt-3 flex gap-0.5">
            {Array.from({ length: t.rating }).map((_, s) => (
              <Star key={s} weight="fill" size={15} style={{ color: GOLD }} />
            ))}
          </div>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-200">
            {t.quote}
          </blockquote>
          <figcaption className="mt-5 border-t border-white/10 pt-4">
            <div className="text-sm font-semibold text-white">{t.author}</div>
            <div className="text-xs text-slate-400">
              {t.title} · {t.org}
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

export default function CaseStudiesAndTeam() {
  return (
    <>
      <section id="case-studies" className="border-t border-white/5 bg-[#0B0F17] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
            Environmental Reclamation
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Drag to reveal ground we gave back.
          </h2>
          <p className="mt-4 max-w-[60ch] text-slate-400">
            Every site carries a rehabilitation commitment. Slide between the mined state and the
            restored habitat to see the measured outcome.
          </p>
          <div className="mt-12">
            <CaseStudies />
          </div>
        </div>
      </section>

      <section id="leadership" className="border-t border-white/5 bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-2">
            <Users weight="duotone" size={20} style={{ color: GOLD }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Leadership &amp; Operations
            </span>
          </div>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            The people accountable for every ounce.
          </h2>
          <p className="mt-4 max-w-[60ch] text-slate-400">
            Select a profile to open the full executive dossier and career credentials.
          </p>
          <div className="mt-12">
            <Team />
          </div>

          <h3 className="mt-24 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Institutional Validation
          </h3>
          <div className="mt-10">
            <Testimonials />
          </div>
        </div>
      </section>
    </>
  );
}
