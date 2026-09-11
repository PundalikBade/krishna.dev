import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Learning", "Projects", "Contact"];

  const scrollTo = (item) => {
    const id = item.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo("Home"); }}>
        <span className="logo-bracket">{"{"}</span>
        <span className="logo-text">K</span>
        <span className="logo-bracket">{"}"}</span>
      </a>

      <ul className={`nav-links ${open ? "nav-links-open" : ""}`}>
        {navItems.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item);
              }}
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className={`nav-toggle ${open ? "nav-toggle-open" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.nav>
  );
};

export default Navbar;