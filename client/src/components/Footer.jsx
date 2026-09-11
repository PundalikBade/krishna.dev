import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa6";

const Footer = () => (
  <footer className="border-t-[6px] border-orange bg-navy px-5 pb-6 pt-9">
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
      <motion.a
        href="#home"
        className="flex items-center gap-2"
        whileHover={{ rotate: -4 }}
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("home");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-pixel text-lg text-paper">
          <span className="text-orange">{"{"}</span>K<span className="text-orange">{"}"}</span>
        </span>
      </motion.a>

      <p className="flex items-center gap-1.5 text-[15.5px] text-white/60">
        Made with{" "}
        <FaHeart className="inline-block animate-heartbeat text-pink" /> &amp;
        retro pixels — built on the MERN stack
      </p>

      <p className="font-vt text-lg font-bold tracking-[1.5px] text-cyan">
        IIT MADRAS • BS AERO &amp; SPACE TECH
      </p>
    </div>

    <p className="mx-auto mt-6 max-w-[1200px] border-t-2 border-navy-3 pt-4 text-center text-[15px] text-white/40">
      © {new Date().getFullYear()} Krishna · First-year BS student at IIT Madras
    </p>
  </footer>
);

export default Footer;