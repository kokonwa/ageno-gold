import { useState, useCallback } from "react";
import { Toaster } from "sonner";
import { LangContext, CONTENT, type Lang } from "./data/content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OperationsAndServices from "./components/OperationsAndServices";
import LeadershipAndTimeline from "./components/LeadershipAndTimeline";
import NewsAndTestimonials from "./components/NewsAndTestimonials";
import ContactAndFooter from "./components/ContactAndFooter";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const c = CONTENT[lang];

  const handleScroll = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="min-h-[100dvh] bg-[#0B0F19] text-[#F8FAFC] font-sans antialiased">
        <Navbar onScroll={handleScroll} />
        <main>
          <Hero onScroll={handleScroll} />
          <section id="about" className="scroll-mt-20">
            <OperationsAndServices />
          </section>
          <section id="leadership" className="scroll-mt-20">
            <LeadershipAndTimeline />
          </section>
          <section id="news" className="scroll-mt-20">
            <NewsAndTestimonials />
          </section>
          <section id="contact" className="scroll-mt-20">
            <ContactAndFooter />
          </section>
        </main>
      </div>
      <Toaster richColors position="top-right" closeButton />
    </LangContext.Provider>
  );
}
