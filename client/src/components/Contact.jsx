import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to send");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setError(err.message);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="retro-section-header">
          <span className="retro-kicker">CONTACT / 04</span>
          <h2 className="retro-section-title">
            Let's <span className="accent-word" style={{ color: "#9d6bff" }}>connect</span>
          </h2>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="contact-text">
              I'm learning, building, and exploring. If you'd like to connect,
              collaborate, or talk about technology, AI/ML, or research, feel
              free to reach out.
            </p>

            <div className="contact-notes">
              <p className="contact-note">
                <span className="contact-note-icon">▸</span>
                I'm based at IIT Madras — first-year BS in Aeronautical &amp; Space Technology.
              </p>
              <p className="contact-note">
                <span className="contact-note-icon">▸</span>
                Currently focused on AI/ML, mathematics, DSA, web fundamentals, and quantum computing.
              </p>
              <p className="contact-note">
                <span className="contact-note-icon">▸</span>
                Happy to chat about learning paths, AI/ML research, or interesting problems.
              </p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">&#10148; Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="type your name..."
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">&#10148; Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">&#10148; Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="what's it about?"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">&#10148; Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="write something nice..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="retro-btn btn-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <span className="loading-spinner"></span>
              ) : (
                <span className="btn-accent">&gt;&gt;</span>
              )}
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            <p className="form-footnote">// messages are stored via the Express + MongoDB API</p>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  className="form-status form-status-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✓ Message sent! I'll get back to you.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  className="form-status form-status-error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✗ {error}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;