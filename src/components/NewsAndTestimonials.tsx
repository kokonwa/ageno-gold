import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass, X, Newspaper, Calendar, Quotes, Clock,
} from "@phosphor-icons/react";
import { useLang, CONTENT } from "../data/content";
import type { Article } from "../data/content";

export default function NewsAndTestimonials() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<Article | null>(null);

  const categories = useMemo(() => {
    const set = new Set(c.news.articles.map((a) => a.category));
    return Array.from(set);
  }, [c]);

  const filtered = useMemo(() => {
    return c.news.articles.filter((a) => {
      const matchCat = category === "all" || a.category === category;
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.body.some((p) => p.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [c, query, category]);

  return (
    <>
      {/* News Section */}
      <section id="news" className="scroll-mt-20 py-20 sm:py-28 bg-[#1E293B]/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
              <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37]">
                {lang === "en" ? "Latest Updates" : "Dernières Nouvelles"}
              </span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#F8FAFC]">
              {c.news.title}
            </h2>
          </motion.div>

          {/* Search + Filters */}
          <div className="max-w-2xl mx-auto mb-10 space-y-4">
            <div className="relative">
              <MagnifyingGlass
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F8FAFC]/30"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={c.news.search}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#0B0F19]/80 border border-white/[0.06] text-sm text-[#F8FAFC] placeholder:text-[#F8FAFC]/25 focus:outline-none focus:border-[#D4AF37]/40 focus:ring-1 focus:ring-[#D4AF37]/20 transition-all"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F8FAFC]/30 hover:text-[#F8FAFC] transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setCategory("all")}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  category === "all"
                    ? "bg-[#D4AF37] text-[#0B0F19]"
                    : "bg-[#1E293B] text-[#F8FAFC]/50 hover:text-[#D4AF37] border border-white/[0.06]"
                }`}
              >
                {c.news.all}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                    category === cat
                      ? "bg-[#D4AF37] text-[#0B0F19]"
                      : "bg-[#1E293B] text-[#F8FAFC]/50 hover:text-[#D4AF37] border border-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Newspaper size={40} className="mx-auto text-[#F8FAFC]/15 mb-4" />
              <p className="text-sm text-[#F8FAFC]/40">
                {lang === "en" ? "No articles match your search." : "Aucun article ne correspond à votre recherche."}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {filtered.map((a, i) => (
                <motion.button
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setSelected(a)}
                  className="group text-left rounded-xl overflow-hidden bg-[#0B0F19]/60 border border-white/[0.05] hover:border-[#D4AF37]/20 transition-all"
                >
                  <div className="relative h-40 sm:h-44 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#D4AF37]/90 text-[#0B0F19] text-[10px] font-bold uppercase tracking-wider">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2 text-[11px] text-[#F8FAFC]/40 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {a.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {a.readTime}
                      </span>
                    </div>
                    <h3 className="text-[15px] font-bold text-[#F8FAFC] leading-snug mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-[13px] text-[#F8FAFC]/45 leading-relaxed line-clamp-2">{a.excerpt}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-[#0B0F19]/90 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#1E293B] border border-white/[0.08] shadow-2xl"
            >
              <div className="relative h-48 sm:h-60 overflow-hidden rounded-t-2xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#0B0F19]/60 backdrop-blur-sm text-[#F8FAFC]/70 hover:text-[#F8FAFC] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#D4AF37]/15 text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider">
                    {selected.category}
                  </span>
                  <span className="text-[12px] text-[#F8FAFC]/40 flex items-center gap-1">
                    <Calendar size={12} /> {selected.date}
                  </span>
                  <span className="text-[12px] text-[#F8FAFC]/40 flex items-center gap-1">
                    <Clock size={12} /> {selected.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-[#F8FAFC] leading-tight mb-6">
                  {selected.title}
                </h2>

                <div className="space-y-4">
                  {selected.body.map((p, i) => (
                    <p key={i} className="text-sm text-[#F8FAFC]/60 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
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
                {lang === "en" ? "Trusted By" : "Ils Nous Font Confiance"}
              </span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#F8FAFC]">
              {c.testimonials.title}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {c.testimonials.items.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[#1E293B]/40 border border-white/[0.04] hover:border-[#D4AF37]/15 transition-colors"
              >
                <Quotes size={20} weight="fill" className="text-[#D4AF37]/40 mb-4" />
                <p className="text-[13px] text-[#F8FAFC]/60 leading-relaxed mb-5 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#9A6024]/20 flex items-center justify-center">
                    <span className="text-[12px] font-black text-[#D4AF37]">
                      {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#F8FAFC]">{t.name}</p>
                    <p className="text-[11px] text-[#F8FAFC]/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
