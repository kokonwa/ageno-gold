import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, Envelope, MapPin, FilePdf, ArrowUpRight,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import { useLang, CONTENT } from "../data/content";

export default function ContactAndFooter() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  const [form, setForm] = useState({ name: "", email: "", org: "", dept: c.contact.depts[0], msg: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = lang === "en" ? "Name is required" : "Le nom est requis";
    if (!form.email.trim()) e.email = lang === "en" ? "Email is required" : "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = lang === "en" ? "Invalid email" : "Email invalide";
    if (!form.msg.trim()) e.msg = lang === "en" ? "Message is required" : "Le message est requis";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(c.contact.success);
      setForm({ name: "", email: "", org: "", dept: c.contact.depts[0], msg: "" });
    }, 1200);
  };

  const inputCls = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-[#0B0F19]/60 border text-sm text-[#F8FAFC] placeholder:text-[#F8FAFC]/25 focus:outline-none focus:ring-1 transition-all ${
      errors[field]
        ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
        : "border-white/[0.06] focus:border-[#D4AF37]/40 focus:ring-[#D4AF37]/20"
    }`;

  const onScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 py-20 sm:py-28 bg-[#1E293B]/30">
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
                {lang === "en" ? "Reach Out" : "Contactez-Nous"}
              </span>
              <div className="w-8 h-[2px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#F8FAFC] mb-4">
              {c.contact.title}
            </h2>
            <p className="text-[15px] text-[#F8FAFC]/50 max-w-xl mx-auto">{c.contact.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-5"
            >
              {[c.contact.phone, c.contact.phoneSecondary].map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0F19]/60 border border-white/[0.05] hover:border-[#D4AF37]/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} weight="fill" className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F8FAFC]/40 font-medium uppercase tracking-wider mb-0.5">
                    {lang === "en" ? "Phone" : "Téléphone"}
                  </p>
                  <p className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors">
                    {phone}
                  </p>
                </div>
              </a>
              ))}

              <a
                href={`mailto:${c.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0F19]/60 border border-white/[0.05] hover:border-[#D4AF37]/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <Envelope size={18} weight="fill" className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F8FAFC]/40 font-medium uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors">
                    {c.contact.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0B0F19]/60 border border-white/[0.05]">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} weight="fill" className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[11px] text-[#F8FAFC]/40 font-medium uppercase tracking-wider mb-0.5">
                    {lang === "en" ? "Headquarters" : "Siège Social"}
                  </p>
                  <p className="text-sm font-semibold text-[#F8FAFC]">{c.contact.address}</p>
                  <p className="text-[12px] text-[#F8FAFC]/40 mt-1">{c.contact.bases}</p>
                </div>
              </div>

              <button
                onClick={() => toast.info(lang === "en" ? "Brochure download will begin shortly." : "Le téléchargement de la brochure commencera bientôt.")}
                className="flex items-center gap-3 w-full p-4 rounded-xl border border-dashed border-[#D4AF37]/25 text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors"
              >
                <FilePdf size={20} weight="fill" />
                <span className="text-sm font-semibold">
                  {lang === "en" ? "Download Institutional Brochure" : "Télécharger la Brochure Institutionnelle"}
                </span>
                <ArrowUpRight size={16} className="ml-auto" />
              </button>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#F8FAFC]/60 mb-1.5">{c.contact.labels.name} *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputCls("name")}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#F8FAFC]/60 mb-1.5">{c.contact.labels.email} *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputCls("email")}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#F8FAFC]/60 mb-1.5">{c.contact.labels.org}</label>
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className={inputCls("org")}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#F8FAFC]/60 mb-1.5">{c.contact.labels.dept}</label>
                  <select
                    value={form.dept}
                    onChange={(e) => setForm({ ...form, dept: e.target.value })}
                    className={inputCls("dept")}
                  >
                    {c.contact.depts.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#F8FAFC]/60 mb-1.5">{c.contact.labels.msg} *</label>
                <textarea
                  rows={5}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className={inputCls("msg")}
                />
                {errors.msg && <p className="text-[11px] text-red-400 mt-1">{errors.msg}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-[#0B0F19] font-bold text-sm hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting
                  ? (lang === "en" ? "Sending..." : "Envoi en cours...")
                  : c.contact.submit}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#0B0F19]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#9A6024] flex items-center justify-center">
                  <span className="text-sm font-black text-[#0B0F19]">A</span>
                </div>
                <span className="text-sm font-bold tracking-wider text-[#F8FAFC]">AGENO</span>
              </div>
              <p className="text-[13px] text-[#F8FAFC]/40 leading-relaxed mb-4">{c.footer.tagline}</p>
              <div className="flex flex-col items-start gap-3 text-[13px]">
                {[c.contact.phone, c.contact.phoneSecondary].map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="text-[#F8FAFC]/50 hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                  <Phone size={14} /> {phone}
                </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[12px] font-bold text-[#F8FAFC] uppercase tracking-wider mb-4">{c.footer.quickLinks}</h4>
              <ul className="space-y-2">
                {c.nav.links.map((l) => (
                  <li key={l.href}>
                    <button
                      onClick={() => onScroll(l.href)}
                      className="text-[13px] text-[#F8FAFC]/40 hover:text-[#D4AF37] transition-colors"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[12px] font-bold text-[#F8FAFC] uppercase tracking-wider mb-4">
                {lang === "en" ? "Contact" : "Contact"}
              </h4>
              <ul className="space-y-2 text-[13px] text-[#F8FAFC]/40">
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#D4AF37]/50" />
                  {c.contact.address}
                </li>
                <li>
                  <a href={`mailto:${c.contact.email}`} className="hover:text-[#D4AF37] transition-colors">
                    {c.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-[12px] font-bold text-[#F8FAFC] uppercase tracking-wider mb-4">{c.footer.newsletter}</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success(lang === "en" ? "Subscribed successfully." : "Inscription réussie.");
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder={c.footer.emailPlaceholder}
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-[#1E293B]/60 border border-white/[0.06] text-[13px] text-[#F8FAFC] placeholder:text-[#F8FAFC]/25 focus:outline-none focus:border-[#D4AF37]/40"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] text-[12px] font-bold hover:bg-[#D4AF37]/25 transition-colors"
                >
                  {c.footer.subscribe}
                </button>
              </form>
            </div>
          </div>

          {/* Legal */}
          <div className="pt-8 border-t border-white/[0.06]">
            <p className="text-[11px] text-[#F8FAFC]/25 leading-relaxed mb-4 max-w-3xl">{c.footer.legal}</p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-[12px] text-[#F8FAFC]/30">
                &copy; {new Date().getFullYear()} Ageno Mining Company. {c.footer.rights}
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => { /* lang toggle handled by parent */ }}
                  className="text-[11px] text-[#F8FAFC]/25 hover:text-[#D4AF37] transition-colors"
                >
                  {lang === "en" ? "Francais" : "English"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
