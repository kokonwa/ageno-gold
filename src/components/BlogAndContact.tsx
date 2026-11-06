import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass,
  Clock,
  Tag,
  X,
  ArrowUpRight,
  MapPin,
  Phone,
  Envelope,
  Globe,
  Scales,
  Megaphone,
  PaperPlaneRight,
  Check,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import { ARTICLES, LOCATIONS, INQUIRY_CHANNELS } from "../data";
import type { Article, ArticleCategory } from "../types";

const GOLD = "#D4AF37";

const CATEGORIES: (ArticleCategory | "All")[] = [
  "All",
  "Market Outlook",
  "ESG & Reclamation",
  "Tech in Mining",
  "Regulatory Updates",
];

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ArticleReader({ article, onClose }: { article: Article; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] overflow-y-auto bg-black/75 p-5 backdrop-blur-sm"
    >
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="mx-auto my-8 max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#111827]"
      >
        <div className="relative">
          <img src={article.cover} alt={article.title} className="h-56 w-full object-cover" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-md bg-black/50 text-white hover:bg-black/70"
            aria-label="Close article"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-7">
          <span className="rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider" style={{ background: `${GOLD}1f`, color: GOLD }}>
            {article.category}
          </span>
          <h3 className="mt-4 text-2xl font-bold leading-tight text-white">{article.title}</h3>
          <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
            <span>By {article.author}</span>
            <span>{fmtDate(article.date)}</span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {article.readingTime} min read
            </span>
          </div>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-300">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function Blog() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<Article | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const matchCat = cat === "All" || a.category === cat;
      const matchQ =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, cat]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xs">
          <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search intelligence..."
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                cat === c
                  ? "border-transparent text-[#0B0F17]"
                  : "border-white/15 text-slate-300 hover:border-white/30"
              }`}
              style={cat === c ? { background: GOLD } : undefined}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-12 grid place-items-center rounded-2xl border border-dashed border-white/10 py-16 text-center">
          <MagnifyingGlass size={28} className="text-slate-600" />
          <p className="mt-3 text-sm text-slate-400">No articles match your search.</p>
          <button
            onClick={() => {
              setQuery("");
              setCat("All");
            }}
            className="mt-3 text-xs font-medium"
            style={{ color: GOLD }}
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <motion.button
              key={a.id}
              layout
              onClick={() => setOpen(a)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827] text-left transition-colors hover:border-white/25"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={a.cover} alt={a.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-200">
                  <Tag size={11} /> {a.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="font-semibold leading-snug text-white group-hover:text-white">{a.title}</h4>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-400">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{fmtDate(a.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {a.readingTime} min
                  </span>
                </div>
                <span className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: GOLD }}>
                  Read article <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {open && <ArticleReader article={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </div>
  );
}

const channelIcon = { scales: Scales, megaphone: Megaphone, globe: Globe } as const;

function Contact() {
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0].id);
  const loc = LOCATIONS.find((l) => l.id === activeLoc)!;
  const [channel, setChannel] = useState(INQUIRY_CHANNELS[0].id);
  const [form, setForm] = useState({ name: "", email: "", message: "" });


  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please complete all fields before sending your inquiry.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    const subject = `${INQUIRY_CHANNELS.find((c) => c.id === channel)?.label} inquiry`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:godwinocama135@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.info("Email draft opened. Send it from your email app to complete your inquiry.");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Location / operational map */}
      <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Global Sites &amp; Offices
        </h4>
        <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#0B0F17]">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,55,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.12) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {LOCATIONS.map((l) => {
            const on = l.id === activeLoc;
            return (
              <button
                key={l.id}
                onClick={() => setActiveLoc(l.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${l.coords.x}%`, top: `${l.coords.y}%` }}
                aria-label={l.name}
              >
                <span
                  className="grid h-6 w-6 place-items-center rounded-full transition-all"
                  style={{
                    background: on ? GOLD : "rgba(148,163,184,0.4)",
                    boxShadow: on ? `0 0 0 6px ${GOLD}33` : "none",
                  }}
                >
                  <MapPin weight="fill" size={14} className={on ? "text-[#0B0F17]" : "text-white"} />
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-bold text-white">{loc.name}</h5>
            <span
              className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                loc.status === "Operational"
                  ? "bg-emerald-500/15 text-emerald-400"
                  : loc.status === "Commissioning"
                    ? "bg-amber-500/15 text-amber-400"
                    : "bg-sky-500/15 text-sky-400"
              }`}
            >
              {loc.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-400">{loc.type} · {loc.region}</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-300">
            <MapPin size={14} style={{ color: GOLD }} /> {loc.address}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {LOCATIONS.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLoc(l.id)}
              className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
                l.id === activeLoc ? "border-transparent text-[#0B0F17]" : "border-white/15 text-slate-300 hover:border-white/30"
              }`}
              style={l.id === activeLoc ? { background: GOLD } : undefined}
            >
              {l.name}
            </button>
          ))}
        </div>
      </div>

      {/* Inquiry form */}
      <div className="rounded-2xl border border-white/10 bg-[#111827] p-6">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Corporate Inquiry
        </h4>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {INQUIRY_CHANNELS.map((c) => {
            const Icon = channelIcon[c.icon];
            const on = c.id === channel;
            return (
              <button
                key={c.id}
                onClick={() => setChannel(c.id)}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors ${
                  on ? "border-white/25 bg-white/[0.05]" : "border-white/10 hover:border-white/20"
                }`}
              >
                <Icon weight="duotone" size={22} style={{ color: on ? GOLD : "#94A3B8" }} />
                <span className="text-xs font-medium text-slate-200">{c.label}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          {INQUIRY_CHANNELS.find((c) => c.id === channel)?.description}
        </p>

        <form onSubmit={submit} className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-medium text-slate-400">Full name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jane Doe"
              className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-white/30 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-400">Work email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="jane@fund.com"
              className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-white/30 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-400">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              placeholder="Tell us about your interest..."
              className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-white/30 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-[#0B0F17] transition-transform active:scale-[0.99] disabled:opacity-60"
            style={{ background: GOLD }}
          >
              <>
                <PaperPlaneRight weight="fill" size={16} /> Open Email Draft
              </>
          </button>
        </form>
        <div className="mt-5 flex flex-wrap gap-5 border-t border-white/10 pt-5 text-sm text-slate-400">
          <a href="tel:+256778775060" className="flex items-center gap-2 hover:text-white">
            <Phone size={16} style={{ color: GOLD }} /> +256 778 775 060
          </a>
          <a href="tel:+243819702362" className="flex items-center gap-2 hover:text-white">
            <Phone size={16} style={{ color: GOLD }} /> +243 819 702 362
          </a>
          <a href="mailto:godwinocama135@gmail.com" className="flex items-center gap-2 hover:text-white">
            <Envelope size={16} style={{ color: GOLD }} /> godwinocama135@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BlogAndContact() {
  return (
    <>
      <section id="insights" className="border-t border-white/5 bg-[#0B0F17] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
            Market Intelligence
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Research &amp; press from the Ageno desk.
          </h2>
          <p className="mt-4 max-w-[60ch] text-slate-400">
            Search and filter our outlook on markets, ESG, technology and regulation.
          </p>
          <div className="mt-12">
            <Blog />
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/5 bg-[#111827] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-2">
            <Check weight="fill" size={18} style={{ color: GOLD }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
              Get in touch
            </span>
          </div>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Investor, media &amp; partnership enquiries.
          </h2>
          <p className="mt-4 max-w-[60ch] text-slate-400">
            Explore our operating footprint and route your inquiry to the right desk.
          </p>
          <div className="mt-12">
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
}

