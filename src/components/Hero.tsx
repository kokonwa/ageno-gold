import { motion } from "framer-motion";
import {
  ArrowRight,
  Recycle,
  Coins,
  SealCheck,
  Leaf,
  ShieldCheck,
} from "@phosphor-icons/react";
import { IMAGES, METRICS } from "../data";
import type { Metric } from "../types";

const GOLD = "#D4AF37";

const iconMap = {
  coins: Coins,
  seal: SealCheck,
  leaf: Leaf,
  recycle: Recycle,
} as const;

function MetricCard({ m, i }: { m: Metric; i: number }) {
  const Icon = iconMap[m.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: 0.08 * i, duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-white/20"
    >
      <div className="flex items-center justify-between">
        <Icon weight="duotone" size={26} style={{ color: GOLD }} />
        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
          {m.unit}
        </span>
      </div>
      <div className="mt-4 font-mono text-3xl font-semibold text-white">{m.value}</div>
      <div className="mt-1 text-sm font-medium text-slate-200">{m.label}</div>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">{m.detail}</p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-[100dvh] overflow-hidden bg-[#0B0F17]">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Ageno Gold open-pit mine at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/85 via-[#0B0F17]/70 to-[#0B0F17]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/80 via-transparent to-transparent" />
      </div>

      {/* Aurora gold mesh accents */}
      <div
        className="ag-aurora pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.35), transparent 70%)" }}
      />
      <div
        className="ag-aurora pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.22), transparent 70%)",
          animationDelay: "4s",
        }}
      />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-5 pb-16 pt-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-300"
        >
          <ShieldCheck weight="fill" size={16} style={{ color: GOLD }} />
          Sustainable Exploration · Extraction · Refining
        </motion.div>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Responsible Extraction.
          <br />
          Uncompromising Precision.
          <br />
          <span style={{ color: GOLD }}>Institutional Scale.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Ageno Gold turns certified orebodies into four-nines bullion with the lowest carbon
          intensity in the corridor.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#operations"
            className="group flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-[#0B0F17] transition-transform active:scale-[0.98]"
            style={{ background: GOLD }}
          >
            Explore Operations
            <ArrowRight
              weight="bold"
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#case-studies"
            className="flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Review ESG Case Studies
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <MetricCard key={m.id} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
