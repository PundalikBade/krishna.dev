import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa6";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <motion.a
        href="#home"
        className="footer-logo"
        whileHover={{ rotate: -4 }}
      >
        <span className="logo-bracket">{"{"}</span>
        <span className="logo-text">K</span>
        <span className="logo-bracket">{"}"}</span>
      </motion.a>

      <p className="footer-copy">
        Made with <FaHeart className="footer-heart" /> &amp;
        retro pixels — built on the MERN stack
      </p>

      <p className="footer-school pixel">IIT MADRAS • BS AERO &amp; SPACE TECH</p>
    </div>

    <p className="footer-copyright">
      © {new Date().getFullYear()} Krishna · First-year BS student at IIT Madras
    </p>
  </footer>
);

export default Footer;