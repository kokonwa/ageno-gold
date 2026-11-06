import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, List, X, Phone } from "@phosphor-icons/react";
import { useLang, CONTENT, type Lang } from "../data/content";

export default function Navbar({ onScroll }: { onScroll: (href: string) => void }) {
  const { lang, setLang } = useLang();
  const c = CONTENT[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "fr" : "en");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#D4AF37]/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#9A6024] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
              <span className="text-[#0B0F19] font-black text-base sm:text-lg tracking-tighter">A</span>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-bold tracking-wider text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors">
                AGENO
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#D4AF37]/70 uppercase font-medium">
                Mining Co.
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {c.nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => onScroll(link.href)}
                className="px-3 py-2 text-[13px] font-medium text-[#F8FAFC]/70 hover:text-[#D4AF37] transition-colors rounded-md hover:bg-white/[0.04]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 text-[12px] font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
              aria-label="Toggle language"
            >
              <Globe size={14} weight="bold" />
              {lang === "en" ? "FR" : "EN"}
            </button>

            {/* CTA Desktop */}
            <button
              onClick={() => onScroll("#contact")}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-[#0B0F19] text-[13px] font-bold hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all active:scale-[0.97]"
            >
              <Phone size={14} weight="fill" />
              {c.nav.inquiry}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#F8FAFC]/70 hover:text-[#D4AF37] transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0B0F19]/98 backdrop-blur-xl border-t border-[#D4AF37]/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {c.nav.links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { onScroll(link.href); setMobileOpen(false); }}
                  className="block w-full text-left px-4 py-3 text-[15px] font-medium text-[#F8FAFC]/80 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => { onScroll("#contact"); setMobileOpen(false); }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-[#0B0F19] font-bold text-sm"
                >
                  {c.nav.inquiry}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
