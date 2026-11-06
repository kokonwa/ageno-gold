import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass, Hammer, GlobeSimple, Recycle, HandHeart, Truck,
  MapPin, Check, Buildings, Mountains, TrendUp,
} from "@phosphor-icons/react";
import { useLang, CONTENT } from "../data/content";

const ICONS: Record<string, React.FC<{ size?: number; weight?: "fill" | "bold" | "regular"; className?: string }>> = {
  kinshasa: Buildings,
  "haut-uele": Mountains,
  ituri: Compass,
};

const SERVICE_ICONS: Record<string, React.FC<{ size?: number; weight?: "fill" | "bold" | "regular"; className?: string }>> = {
  exploration: Compass,
  extraction: Hammer,
  mapping: GlobeSimple,
  environment: Recycle,
  community: HandHeart,
  logistics: Truck,
};

export default function OperationsAndServices() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  const [activeTerritory, setActiveTerritory] = useState(0);

  const territory = c.operations.territories[activeTerritory];

  return (
    <>
      {/* About Section */}
      <section id="about" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-[2px] bg-[#D4AF37]" />
                  <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">
                    {lang === "en" ? "Who We Are" : "Qui Nous Sommes"}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#F8FAFC] mb-6">
                  {c.about.title}
                </h2>
                <p className="text-[15px] sm:text-base text-[#F8FAFC]/60 leading-relaxed mb-8">
                  {c.about.body}
                </p>
              </motion.div>

              <div className="space-y-4">
                {c.about.values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg bg-[#1E293B]/40 border border-white/[0.04]"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#D4AF37]/10 flex items-center justify-center">
                      <Check size={16} weight="bold" className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#F8FAFC] mb-1">{v.title}</h4>
                      <p className="text-[13px] text-[#F8FAFC]/50 leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Side Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-[#9A6024]/10 to-[#0B0F19] rounded-2xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#9A6024] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/30">
                      <span className="text-4xl font-black text-[#0B0F19]">A</span>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-[#F8FAFC]">EST. 2025</p>
                      <p className="text-sm text-[#F8FAFC]/40 mt-1">Kinshasa, DR Congo</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="p-4 rounded-xl bg-[#1E293B]/60 border border-[#D4AF37]/10">
                        <p className="text-xl font-black text-[#D4AF37]">3</p>
                        <p className="text-[11px] text-[#F8FAFC]/40 font-medium uppercase tracking-wider mt-1">
                          {lang === "en" ? "Provinces" : "Provinces"}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#1E293B]/60 border border-[#D4AF37]/10">
                        <p className="text-xl font-black text-[#D4AF37]">2018</p>
                        <p className="text-[11px] text-[#F8FAFC]/40 font-medium uppercase tracking-wider mt-1">
                          {lang === "en" ? "Mining Code" : "Code Minier"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,175,55,0.5) 40px, rgba(212,175,55,0.5) 41px),
                    repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212,175,55,0.5) 40px, rgba(212,175,55,0.5) 41px)`
                }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operations Territory Explorer */}
      <section id="operations" className="scroll-mt-20 py-20 sm:py-28 bg-[#1E293B]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">
                {lang === "en" ? "Where We Operate" : "Où Nous Opérons"}
              </span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#F8FAFC] mb-4">
              {c.operations.title}
            </h2>
            <p className="text-[15px] text-[#F8FAFC]/50 max-w-xl mx-auto">{c.operations.subtitle}</p>
          </motion.div>

          {/* Territory Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {c.operations.territories.map((t, i) => {
              const Icon = ICONS[t.id] || MapPin;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTerritory(i)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${
                    activeTerritory === i
                      ? "bg-[#D4AF37] text-[#0B0F19] shadow-lg shadow-[#D4AF37]/25"
                      : "bg-[#1E293B]/60 text-[#F8FAFC]/60 hover:text-[#D4AF37] border border-white/[0.06]"
                  }`}
                >
                  <Icon size={16} weight={activeTerritory === i ? "fill" : "regular"} />
                  <span className="hidden sm:inline">{t.name}</span>
                  <span className="sm:hidden">{t.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Territory Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTerritory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0B0F19]/60 border border-[#D4AF37]/10 backdrop-blur-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#9A6024]/20 border border-[#D4AF37]/20 flex items-center justify-center">
                  {(() => {
                    const Icon = ICONS[territory.id] || MapPin;
                    return <Icon size={24} weight="fill" className="text-[#D4AF37]" />;
                  })()}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">{territory.name}</h3>
                  <p className="text-[13px] font-semibold text-[#D4AF37] mb-3">{territory.role}</p>
                  <p className="text-sm text-[#F8FAFC]/60 leading-relaxed mb-5">{territory.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {territory.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#D4AF37]/8 border border-[#D4AF37]/15 text-[12px] font-medium text-[#D4AF37]/90"
                      >
                        <Check size={12} weight="bold" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">
                {lang === "en" ? "What We Do" : "Ce Que Nous Faisons"}
              </span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#F8FAFC] mb-4">
              {c.services.title}
            </h2>
            <p className="text-[15px] text-[#F8FAFC]/50 max-w-xl mx-auto">{c.services.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {c.services.items.map((s, i) => {
              const Icon = SERVICE_ICONS[s.id] || TrendUp;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group p-6 rounded-xl bg-[#1E293B]/40 border border-white/[0.04] hover:border-[#D4AF37]/20 hover:bg-[#1E293B]/60 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Icon size={20} weight="fill" className="text-[#D4AF37]" />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#F8FAFC] mb-2 leading-snug">{s.title}</h3>
                  <p className="text-[13px] text-[#F8FAFC]/50 leading-relaxed mb-4">{s.description}</p>
                  <div className="flex items-baseline gap-1.5 pt-3 border-t border-white/[0.06]">
                    <span className="text-lg font-black text-[#D4AF37]">{s.stat}</span>
                    <span className="text-[11px] text-[#F8FAFC]/40 font-medium uppercase tracking-wider">{s.statLabel}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}