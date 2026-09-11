import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "About", "Learning", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (item) => {
    const el = document.getElementById(item.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-5 py-4 transition-all duration-300 md:px-10 ${
        scrolled || open
          ? "border-b-4 border-orange bg-navy/95 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "border-b-4 border-transparent bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* logo */}
      <a
        href="#home"
        className="flex items-center gap-2"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("Home");
        }}
      >
        <span className="font-pixel text-lg tracking-tight text-paper">
          <span className="text-orange">{"{"}</span>K<span className="text-orange">{"}"}</span>
        </span>
        <span className="hidden font-vt text-2xl font-bold tracking-widest text-paper sm:block">
          KRISHNA
        </span>
      </a>

      {/* desktop links */}
      <ul className="hidden items-center gap-1.5 md:flex">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="rounded border-2 border-transparent px-3 py-2 font-pixel text-[10px] uppercase tracking-wider text-white/70 transition-all duration-200 hover:border-orange hover:bg-orange/10 hover:text-paper"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* mobile toggle */}
      <button
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span
          className={`h-[3px] w-6 rounded bg-paper transition-all duration-300 ${
            open ? "translate-y-[8px] rotate-45" : ""
          }`}
        />
        <span className={`h-[3px] w-6 rounded bg-paper transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-[3px] w-6 rounded bg-paper transition-all duration-300 ${
            open ? "-translate-y-[8px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* mobile menu */}
      <div
        className={`fixed right-0 top-0 flex h-screen w-[74%] max-w-[300px] flex-col items-center justify-center gap-4 bg-navy/95 transition-transform duration-400 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backdropFilter: "blur(20px)", borderLeft: "3px solid var(--color-orange)" }}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-2 font-pixel text-[13px] uppercase tracking-wider text-paper/80 transition-colors hover:text-orange"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(item);
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;