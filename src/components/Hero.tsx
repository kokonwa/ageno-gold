import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, MapPin } from "@phosphor-icons/react";
import { useLang, CONTENT, IMG } from "../data/content";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString()}{suffix}
    </span>
  );
}

export default function Hero({ onScroll }: { onScroll: (href: string) => void }) {
  const { lang } = useLang();
  const c = CONTENT[lang];

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMG.hero}
          alt="Ageno Mining Operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/80 via-[#0B0F19]/60 to-[#0B0F19]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/70 via-transparent to-transparent" />
      </div>

      {/* Topographic Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(212,175,55,0.3) 60px, rgba(212,175,55,0.3) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(212,175,55,0.3) 60px, rgba(212,175,55,0.3) 61px)`
      }} />

      {/* Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.25em] uppercase text-[#D4AF37]">
              {c.hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.08] tracking-tight text-[#F8FAFC] mb-6"
          >
            {c.hero.headline}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#F8FAFC]/60 leading-relaxed mb-8 max-w-xl"
          >
            {c.hero.sub}
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {c.hero.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[12px] font-medium text-[#D4AF37]"
              >
                <MapPin size={12} weight="fill" />
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <button
              onClick={() => onScroll("#operations")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-[#0B0F19] font-bold text-sm hover:shadow-xl hover:shadow-[#D4AF37]/25 transition-all active:scale-[0.97]"
            >
              {c.hero.cta1}
              <ArrowRight size={16} weight="bold" />
            </button>
            <button
              onClick={() => onScroll("#contact")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#F8FAFC]/20 text-[#F8FAFC]/80 font-semibold text-sm hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all active:scale-[0.97]"
            >
              <Download size={16} />
              {c.hero.cta2}
            </button>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl"
        >
          {c.hero.metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 rounded-xl bg-[#1E293B]/50 backdrop-blur-sm border border-[#D4AF37]/10 hover:border-[#D4AF37]/25 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#D4AF37] mb-1">
                <AnimatedCounter target={m.value} suffix={m.suffix} />
              </div>
              <div className="text-[13px] text-[#F8FAFC]/50 font-medium">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
