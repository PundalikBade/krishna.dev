import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
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
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <span className="loader-text">KRISHNA.DEV</span>
            <div className="loader-bar" />
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Learning />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;