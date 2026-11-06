import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, Download, ArrowUpRight, SealCheck } from "@phosphor-icons/react";
import { NAV_ITEMS } from "../data";
import type { SectionId } from "../types";

const GOLD = "#D4AF37";

export default function Navbar({ onDeck }: { onDeck: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("overview");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current: SectionId = "overview";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: SectionId) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0B0F17]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => go("overview")} className="flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-md font-bold text-[#0B0F17]"
            style={{ background: `linear-gradient(135deg, ${GOLD}, #F59E0B)` }}
          >
            A
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Ageno<span style={{ color: GOLD }}> Gold</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                active === item.id ? "text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-md bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
            <SealCheck weight="fill" size={16} />
            NYSE / TSX Verified Tier-1 Assets
          </span>
          <button
            onClick={onDeck}
            className="group flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-[#0B0F17] transition-transform active:scale-[0.98]"
            style={{ background: GOLD }}
          >
            <Download weight="bold" size={16} />
            Investor Deck
            <ArrowUpRight
              weight="bold"
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white lg:hidden"
          aria-label="Open menu"
        >
          <List size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0F17]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <span className="text-lg font-semibold text-white">
                Ageno<span style={{ color: GOLD }}> Gold</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-5 pt-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  onClick={() => go(item.id)}
                  className="flex items-center justify-between border-b border-white/5 py-4 text-left text-lg font-medium text-slate-100"
                >
                  {item.label}
                  <ArrowUpRight size={18} style={{ color: GOLD }} />
                </motion.button>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  onDeck();
                }}
                className="mt-6 flex items-center justify-center gap-2 rounded-md py-3.5 font-semibold text-[#0B0F17]"
                style={{ background: GOLD }}
              >
                <Download weight="bold" size={18} />
                Download Investor Deck
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
