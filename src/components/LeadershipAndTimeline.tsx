import { useState } from "react";
import { motion } from "framer-motion";
import { IdentificationBadge, SealCheck, TrendUp, Calendar } from "@phosphor-icons/react";
import { useLang, CONTENT, IMG } from "../data/content";

export default function LeadershipAndTimeline() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  return (
    <>
      {/* Leadership Section */}
      <section className="py-20 sm:py-28 bg-[#1E293B]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">
                {lang === "en" ? "Our Director" : "Notre Directeur"}
              </span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#F8FAFC]">
              {c.leadership.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/15">
                <img
                  src={IMG.director}
                  alt={c.leadership.name}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-[#F8FAFC]">{c.leadership.name}</h3>
                  <p className="text-[13px] text-[#D4AF37] font-medium">{c.leadership.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Bio & Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/10">
                <SealCheck size={24} weight="fill" className="text-[#D4AF37]" />
                <div>
                  <p className="text-sm font-bold text-[#F8FAFC]">
                    {lang === "en" ? "Mining Code 2018 Compliant" : "Conforme au Code Minier 2018"}
                  </p>
                  <p className="text-[12px] text-[#F8FAFC]/50">
                    {lang === "en"
                      ? "Full regulatory alignment with DRC mining legislation"
                      : "Alignement réglementaire complet avec la législation minière congolaise"}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#F8FAFC] mb-3 flex items-center gap-2">
                  <IdentificationBadge size={16} className="text-[#D4AF37]" />
                  {lang === "en" ? "Background" : "Parcours"}
                </h4>
                <p className="text-sm text-[#F8FAFC]/60 leading-relaxed">{c.leadership.bio}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#F8FAFC] mb-3 flex items-center gap-2">
                  <TrendUp size={16} className="text-[#D4AF37]" />
                  {lang === "en" ? "Strategic Vision" : "Vision Stratégique"}
                </h4>
                <blockquote className="text-sm text-[#D4AF37]/80 italic leading-relaxed pl-4 border-l-2 border-[#D4AF37]/30">
                  {c.leadership.vision}
                </blockquote>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {c.leadership.focus.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 rounded-md bg-[#1E293B] border border-white/[0.06] text-[12px] font-semibold text-[#F8FAFC]/70"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">
                {lang === "en" ? "2025 to Present" : "2025 à Aujourd'hui"}
              </span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#F8FAFC]">
              {c.timeline.title}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/15 to-[#D4AF37]/30" />

            <div className="space-y-8 sm:space-y-12">
              {c.timeline.events.map((evt, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={evt.date}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className={`relative flex items-start gap-4 sm:gap-0 ${
                      isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-[12px] sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-[3px] border-[#0B0F19] z-10 mt-1" />

                    {/* Card */}
                    <div className={`ml-10 sm:ml-0 sm:w-[calc(50%-32px)] ${isLeft ? "sm:pr-0" : "sm:pl-0"}`}>
                      <div className="p-5 rounded-xl bg-[#1E293B]/50 border border-white/[0.05] hover:border-[#D4AF37]/15 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={14} weight="bold" className="text-[#D4AF37]" />
                          <span className="text-[12px] font-bold text-[#D4AF37] tracking-wide uppercase">
                            {evt.date}
                          </span>
                        </div>
                        <h3 className="text-[15px] font-bold text-[#F8FAFC] mb-1.5">{evt.title}</h3>
                        <p className="text-[13px] text-[#F8FAFC]/50 leading-relaxed">{evt.description}</p>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden sm:block sm:w-[calc(50%-32px)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
