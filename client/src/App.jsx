import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TransitionBand from "./components/TransitionBand";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-3.5 bg-navy"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <span
              className="font-pixel text-[clamp(26px,4vw,38px)] tracking-wider text-paper"
              style={{ textShadow: "3px 3px 0 var(--color-orange)" }}
            >
              KRISHNA.DEV
            </span>
            <div className="h-3 w-[240px] max-w-[80vw] animate-loadbar border-2 border-paper bg-navy-3">
              <span className="block h-full w-0 overflow-hidden stripes-orange animate-loadbar" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <TransitionBand />
        <Learning />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;