import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendMessage } from "../services/api";
import SectionHeading from "./ui/SectionHeading";

const initialState = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await sendMessage(form);
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputCls =
    "w-full border-2 border-navy-3 bg-navy rounded p-3 text-paper placeholder:font-vt placeholder:text-navy-3/80 focus:border-purple focus:shadow-[0_0_0_3px_rgba(157,107,255,0.25)] outline-none transition-all";

  return (
    <section
      id="contact"
      className="relative bg-navy px-5 py-20 md:py-28"
      style={{
        backgroundImage: "radial-gradient(circle at 90% 15%, rgba(157,107,255,0.08), transparent 35%)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-purple" aria-hidden="true" />

      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          kicker="CONTACT / 04"
          title="Let's"
          accent="connect"
          kickerClass="bg-navy-2 text-purple border-purple"
          titleClass="text-paper"
          accentClass="text-purple"
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-7 max-w-[420px] text-[17px] leading-relaxed text-white/70">
              I'm learning, building, and exploring. If you'd like to connect,
              collaborate, or talk about technology, AI/ML, or research, feel
              free to reach out.
            </p>

            <div className="flex flex-col gap-2.5">
              {[
                "I'm based at IIT Madras — first-year BS in Aeronautical & Space Technology.",
                "Currently focused on AI/ML, mathematics, DSA, web fundamentals, and quantum computing.",
                "Happy to chat about learning paths, AI/ML research, or interesting problems.",
              ].map((note) => (
                <p
                  className="flex items-start gap-2.5 rounded border-2 border-purple/25 bg-purple/5 p-3 text-[15.5px] leading-relaxed text-paper/80"
                  key={note}
                >
                  <span className="flex-shrink-0 text-purple">▸</span>
                  {note}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="pixel-card-dark p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block font-pixel text-[10px] uppercase tracking-widest text-purple">
                &#10148; Your Name
              </label>
              <input type="text" id="name" name="name" required placeholder="type your name..." value={form.name} onChange={handleChange} className={inputCls} />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block font-pixel text-[10px] uppercase tracking-widest text-purple">
                &#10148; Your Email
              </label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} className={inputCls} />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block font-pixel text-[10px] uppercase tracking-widest text-purple">
                &#10148; Your Message
              </label>
              <textarea id="message" name="message" rows={5} required placeholder="write something nice..." value={form.message} onChange={handleChange} className={`${inputCls} resize-y`}></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="pixel-btn w-full px-5 py-4"
              style={{ background: "var(--color-purple)", borderColor: "var(--color-purple)", color: "#fff", boxShadow: "var(--shadow-retro)" }}
            >
              {status === "sending" && (
                <span className="h-[18px] w-[18px] rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden="true" />
              )}
              {status === "sending" ? "Sending..." : `SEND MESSAGE ${status === "idle" ? "»" : ""}`}
            </button>

            <p className="mt-3.5 font-vt text-base tracking-wider text-navy-3">
              // messages are stored via the Express + MongoDB API
            </p>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  className="mt-3.5 rounded border-2 border-success bg-success/10 p-3 text-[15px] text-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✓ Message sent! I'll get back to you.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  className="mt-3.5 rounded border-2 border-red-400 bg-red-400/10 p-3 text-[15px] text-red-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✗ Couldn't send — try again in a moment.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;