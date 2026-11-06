import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { X, Download, SealCheck, Coins, Leaf, Recycle } from "@phosphor-icons/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutAndServices from "./components/AboutAndServices";
import CaseStudiesAndTeam from "./components/CaseStudiesAndTeam";
import BlogAndContact from "./components/BlogAndContact";
import { METRICS, NAV_ITEMS } from "./data";

const GOLD = "#D4AF37";

const deckIcon = { coins: Coins, seal: SealCheck, leaf: Leaf, recycle: Recycle } as const;

function DeckModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-5 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#111827]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
              <div>
                <h3 className="text-lg font-bold text-white">Investor Quick Deck</h3>
                <p className="text-xs text-slate-400">Certified reserves &amp; operational KPIs at a glance.</p>
              </div>
              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-md bg-white/5 text-white hover:bg-white/10"
                aria-label="Close deck"
              >
                <X size={18} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 p-7">
              {METRICS.map((m) => {
                const Icon = deckIcon[m.icon];
                return (
                  <div key={m.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <Icon weight="duotone" size={24} style={{ color: GOLD }} />
                    <div className="mt-3 font-mono text-2xl font-semibold text-white">
                      {m.value}
                      <span className="ml-1 text-xs text-slate-500">{m.unit}</span>
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-300">{m.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 px-7 py-5 sm:flex-row">
              <p className="text-xs text-slate-500">
                JORC 2012 / SEC S-K 1300 · LBMA Good Delivery · SBTi-aligned
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-[#0B0F17]"
                style={{ background: GOLD }}
              >
                <Download weight="bold" size={16} /> Request Full Report
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <footer className="border-t border-white/10 bg-[#0B0F17]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="grid h-9 w-9 place-items-center rounded-md font-bold text-[#0B0F17]"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #F59E0B)` }}
              >
                A
              </span>
              <span className="text-lg font-semibold text-white">
                Ageno<span style={{ color: GOLD }}> Gold</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A responsible gold producer turning certified orebodies into four-nines bullion at
              the lowest carbon intensity in the corridor.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
              <SealCheck weight="fill" size={14} /> NYSE / TSX Verified Tier-1 Assets
            </span>
            <nav aria-label="Social and email links" className="mt-5 flex flex-wrap gap-4 text-sm text-slate-300">
              <a href="https://x.com/godwin_oca" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">X <span className="sr-only">(opens in a new tab)</span></a>
              <a href="https://www.linkedin.com/in/godwin-ocama-042580161" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn <span className="sr-only">(opens in a new tab)</span></a>
              <a href="mailto:godwinocama135@gmail.com" className="break-all transition-colors hover:text-white">godwinocama135@gmail.com</a>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <button onClick={() => go(n.id)} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Standards</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>LBMA Good Delivery</li>
              <li>IRMA Assured</li>
              <li>ISO 14001 / 45001</li>
              <li>SBTi Net-Zero 2040</li>
              <li>JORC 2012 / S-K 1300</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Ageno Gold Ltd. All rights reserved.</p>
          <p>Responsible Extraction · Uncompromising Precision · Institutional Scale</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [deckOpen, setDeckOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <Toaster theme="dark" position="top-center" />
      <Navbar onDeck={() => setDeckOpen(true)} />
      <main>
        <Hero />
        <AboutAndServices />
        <CaseStudiesAndTeam />
        <BlogAndContact />
      </main>
      <Footer />
      <DeckModal open={deckOpen} onClose={() => setDeckOpen(false)} />
    </div>
  );
}
