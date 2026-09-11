import { motion } from "framer-motion";
import {
  FaBrain,
  FaCalculator,
  FaLayerGroup,
  FaCode,
  FaAtom,
  FaFlaskVial,
} from "react-icons/fa6";

const accents = ["#51d0f5", "#ffce54", "#ff7b2e", "#ff5c86", "#9d6bff", "#39c48d"];

const learningData = [
  {
    title: "AI / ML",
    desc: "Building foundations in artificial intelligence and machine learning.",
    status: "LEARNING",
    icon: <FaBrain />,
  },
  {
    title: "Mathematics",
    desc: "Learning the math needed for AI/ML, including linear algebra.",
    status: "BUILDING FOUNDATIONS",
    icon: <FaCalculator />,
  },
  {
    title: "DSA",
    desc: "Learning data structures, algorithms, complexity, and problem-solving.",
    status: "PRACTICING",
    icon: <FaLayerGroup />,
  },
  {
    title: "JavaScript / Web",
    desc: "Building a stronger foundation in JavaScript and web development.",
    status: "LEARNING",
    icon: <FaCode />,
  },
  {
    title: "Quantum Computing",
    desc: "Exploring the concepts and mathematics behind quantum computing.",
    status: "EXPLORING",
    icon: <FaAtom />,
  },
  {
    title: "Research",
    desc: "Exploring AI/ML research and building the foundations to move toward it.",
    status: "EXPLORING",
    icon: <FaFlaskVial />,
  },
];

const statusTone = (status) => {
  switch (status) {
    case "LEARNING":
    case "PRACTICING":
      return "tone-cyan";
    case "BUILDING FOUNDATIONS":
      return "tone-yellow";
    case "EXPLORING":
      return "tone-pink";
    default:
      return "tone-orange";
  }
};

const mathCheckpoints = [
  "Vectors",
  "Magnitude",
  "L2 Norm",
  "Normalization",
  "Angle Between Vectors",
  "Cosine Similarity",
  "Orthogonal Vectors",
];

const focusAreas = [
  {
    title: "PROGRAMMING",
    accent: "#ff5c86",
    items: ["JavaScript", "DSA"],
  },
  {
    title: "AI / ML",
    accent: "#51d0f5",
    items: ["AI/ML Foundations", "Machine Learning Concepts"],
  },
  {
    title: "MATHEMATICS",
    accent: "#ffce54",
    items: ["Linear Algebra", "Vectors", "L2 Norms", "Normalization", "Cosine Similarity", "Orthogonality"],
  },
  {
    title: "WEB DEVELOPMENT",
    accent: "#ff7b2e",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "EXPLORING",
    accent: "#9d6bff",
    items: ["Quantum Computing", "AI/ML Research"],
  },
];

const journey = [
  { step: "01", label: "PROGRAMMING", note: "JavaScript foundations" },
  { step: "02", label: "DSA", note: "algorithms & complexity" },
  { step: "03", label: "MATHEMATICS", note: "linear algebra for ML" },
  { step: "04", label: "AI / ML", note: "concepts & foundations" },
  { step: "05", label: "RESEARCH", note: "reading & building depth" },
  { step: "06", label: "PROJECTS", note: "learning into builds" },
];

const LearningCard = ({ item, accent, index }) => (
  <motion.div
    className="skill-card"
    style={{ "--skill-accent": accent }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
  >
    <span className="skill-number">{index + 1}</span>
    <div className="skill-icon">{item.icon}</div>
    <h3 className="skill-title">{item.title}</h3>
    <p className="skill-desc">{item.desc}</p>
    <span className={`status-chip ${statusTone(item.status)}`}>
      {item.status}
    </span>
  </motion.div>
);

const Learning = () => (
  <section id="learning" className="learning">
    <div className="container">
      <div className="retro-section-header">
        <span className="retro-kicker">LEARNING / 02</span>
        <h2 className="retro-section-title">
          Currently <span className="accent-word" style={{ color: "#51d0f5" }}>exploring</span>
        </h2>
      </div>

      {/* learning cards */}
      <div className="skills-grid">
        {learningData.map((item, i) => (
          <LearningCard
            key={item.title}
            item={item}
            accent={accents[i % accents.length]}
            index={i}
          />
        ))}
      </div>

      {/* math journal */}
      <div className="journal">
        <div className="journal-meta">
          <span className="journal-tag">MATH LOG</span>
          <h3 className="journal-title">
            Linear Algebra — <span className="journal-accent">learning checkpoints</span>
          </h3>
          <p className="journal-note">
            Checkpoints I'm currently working through. Nothing is checked yet —
            it's a work in progress, not an achievement list.
          </p>
          <span className="journal-session">SESSION #01 • FOUNDATIONS</span>
        </div>

        <ul className="journal-list">
          {mathCheckpoints.map((item, i) => (
            <li className="journal-item" key={item}>
              <span className="journal-checkbox" aria-hidden="true"></span>
              <span className="journal-item-text">
                <span className="journal-index">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* learning areas */}
      <div className="areas">
        <div className="areas-head">
          <span className="retro-kicker">LEARNING MAP</span>
          <h3 className="areas-title">Areas I'm developing right now</h3>
        </div>

        <div className="areas-grid">
          {focusAreas.map((area, i) => (
            <motion.div
              className="area-card"
              key={area.title}
              style={{ "--area-accent": area.accent }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h4 className="area-title">{area.title}</h4>
              <div className="area-chips">
                {area.items.map((item) => (
                  <span className="area-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* journey timeline */}
      <div className="journey">
        <div className="journey-head">
          <span className="retro-kicker">THE PATH</span>
          <h3 className="journey-title">
            My learning journey <span className="journey-accent">(roadmap)</span>
          </h3>
          <p className="journey-note">
            Building my foundation step by step. Some stages are in progress,
            none are finished — that's the point.
          </p>
        </div>

        <div className="journey-track">
          {journey.map((j, i) => (
            <div className="journey-step" key={j.step}>
              <motion.div
                className="journey-node"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="journey-num">{j.step}</span>
              </motion.div>
              <div className="journey-label">{j.label}</div>
              <div className="journey-note-sub">{j.note}</div>
              {i < journey.length - 1 && (
                <span className={`journey-arrow arrow-${(i % 3) + 1}`} aria-hidden="true">
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Learning;