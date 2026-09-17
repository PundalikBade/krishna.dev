import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaCalculator,
  FaLayerGroup,
  FaCode,
  FaAtom,
  FaFlaskVial,
} from "react-icons/fa6";
import SectionHeading from "./ui/SectionHeading";
import StatusBadge from "./ui/StatusBadge";

const accents = ["#51d0f5", "#ffce54", "#ff7b2e", "#ff5c86", "#9d6bff", "#39c48d"];
const iconList = [
  <FaBrain key="brain" />,
  <FaCalculator key="calc" />,
  <FaLayerGroup key="layers" />,
  <FaCode key="code" />,
  <FaAtom key="atom" />,
  <FaFlaskVial key="flask" />,
];

const learningData = [
  {
    title: "AI / ML",
    desc: "Building an intuition for artificial intelligence and machine learning, starting with the concepts and mathematics behind them.",
    status: "LEARNING",
    tone: "cyan",
  },
  {
    title: "Mathematics",
    desc: "Building the mathematical foundation I need for AI/ML, starting with linear algebra and the language of vectors and transformations.",
    status: "BUILDING FOUNDATIONS",
    tone: "yellow",
  },
  {
    title: "DSA",
    desc: "Learning data structures, algorithms, complexity, and problem-solving through regular practice.",
    status: "PRACTICING",
    tone: "orange",
  },
  {
    title: "JavaScript / Web",
    desc: "Strengthening JavaScript fundamentals while learning how modern web applications are built.",
    status: "LEARNING",
    tone: "cyan",
  },
  {
    title: "Quantum Computing",
    desc: "Exploring the ideas and mathematics behind quantum computation.",
    status: "EXPLORING",
    tone: "pink",
  },
  {
    title: "AI / ML Research",
    desc: "Exploring what AI/ML research looks like and gradually building the foundations needed to move toward it.",
    status: "EXPLORING",
    tone: "pink",
  },
];

const mathCheckpoints = [
  "Vectors",
  "Magnitude",
  "L2 Norm",
  "Normalization",
  "Angle Between Vectors",
  "Cosine Similarity",
  "Orthogonal Vectors",
];

const rightNow = [
  { label: "STUDYING", value: "Linear Algebra + AI/ML Foundations", accent: "#51d0f5" },
  { label: "PRACTICING", value: "DSA + JavaScript", accent: "#ff7b2e" },
  { label: "EXPLORING", value: "Quantum Computing + AI/ML Research", accent: "#9d6bff" },
  { label: "BUILDING TOWARD", value: "My first meaningful projects", accent: "#ff5c86" },
];

const focusAreas = [
  { title: "PROGRAMMING", accent: "#ff5c86", items: ["JavaScript", "DSA"] },
  { title: "AI / ML", accent: "#51d0f5", items: ["AI/ML Foundations", "ML Concepts"] },
  { title: "MATHEMATICS", accent: "#ffce54", items: ["Linear Algebra", "Vectors", "L2 Norms", "Normalization", "Cosine Similarity", "Orthogonality"] },
  { title: "WEB DEVELOPMENT", accent: "#ff7b2e", items: ["HTML", "CSS", "JavaScript"] },
  { title: "EXPLORING", accent: "#9d6bff", items: ["Quantum Computing", "AI/ML Research"] },
];

const journey = [
  { step: "01", label: "PROGRAMMING", note: "Learning to think through code." },
  { step: "02", label: "DSA", note: "Turning problems into algorithms." },
  { step: "03", label: "MATHEMATICS", note: "Building the language behind ML." },
  { step: "04", label: "AI / ML", note: "Connecting concepts with computation." },
  { step: "05", label: "RESEARCH", note: "Learning how deeper questions are explored." },
  { step: "06", label: "PROJECTS", note: "Turning understanding into things I can build." },
];

const Learning = () => {
  const [checked, setChecked] = useState({});

  const toggle = (idx) => setChecked((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <section
      id="learning"
      className="relative bg-navy px-5 py-20 md:py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 90%, rgba(81,208,245,0.08), transparent 38%)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-cyan" aria-hidden="true" />

      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          kicker="LEARNING / 02"
          title="Currently"
          accent="exploring"
          kickerClass="bg-navy-2 text-cyan border-cyan"
          titleClass="text-paper"
          accentClass="text-cyan"
        />

        {/* learning cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learningData.map((item, i) => (
            <motion.div
              key={item.title}
              className="pixel-card-dark relative overflow-hidden p-6"
              style={{ borderTopColor: accents[i], borderTopWidth: "4px" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="absolute right-4 top-4 font-pixel text-3xl text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="pixel-icon-box mb-4 text-2xl"
                style={{ borderColor: accents[i], color: accents[i] }}
              >
                {iconList[i]}
              </div>

              <h3 className="font-pixel text-[13px] uppercase leading-relaxed text-paper">
                {item.title}
              </h3>

              <p className="mt-3 text-[16.5px] leading-relaxed text-white/60">
                {item.desc}
              </p>

              <StatusBadge tone={item.tone} className="mt-6">
                {item.status}
              </StatusBadge>
            </motion.div>
          ))}
        </div>

        {/* right now — snapshot panel */}
        <div className="mt-14">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="w-fit rotate-1 border-2 border-orange bg-white px-3 py-1 font-vt text-xl font-bold tracking-wider text-orange shadow-retro-sm">
              RIGHT NOW
            </span>
            <span className="font-vt text-lg tracking-wider text-white/50">
              a quick snapshot of where I am
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rightNow.map((r) => (
              <motion.div
                key={r.label}
                className="pixel-card-dark p-5"
                style={{ borderTop: `4px solid ${r.accent}` }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
              >
                <span className="font-pixel text-[9px] uppercase tracking-wider" style={{ color: r.accent }}>
                  {r.label}
                </span>
                <p className="mt-2.5 text-[15.5px] leading-relaxed text-white/75">{r.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* math journal */}
        <div className="mt-16 mb-7 flex items-center gap-3">
          <span className="h-0.5 w-10 bg-orange" aria-hidden="true" />
          <span className="font-vt text-xl tracking-wider text-white/65">
            and I'm documenting the concepts along the way
          </span>
        </div>

        <div className="grid gap-9 rounded-lg border-[3px] border-navy bg-paper p-8 shadow-retro journal-lines md:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-3">
            <span className="w-fit border-2 border-navy bg-yellow px-3 py-1.5 font-vt text-lg font-bold tracking-wider text-navy shadow-retro-sm -rotate-1">
              MATH LOG
            </span>
            <h3 className="pixel-title text-[clamp(14px,2vw,18px)] leading-relaxed text-navy">
              Linear Algebra —{" "}
              <span className="text-orange">learning checkpoints</span>
            </h3>
            <p className="text-[15.5px] leading-relaxed text-navy/70">
              Checkpoints I'm currently working through. Click to tick one off —
              otherwise it stays a work in progress, not an achievement list.
            </p>
            <span className="font-vt text-lg tracking-wider text-navy/50">
              SESSION #01 • FOUNDATIONS
            </span>
          </div>

          <ul className="flex flex-col gap-1">
            {mathCheckpoints.map((item, i) => {
              const isChecked = !!checked[i];
              return (
                <li
                  className="flex items-center gap-3 border border-navy/15 bg-white/80 px-3.5 py-2.5 transition-colors duration-150 hover:bg-white"
                  key={item}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-pressed={isChecked}
                    aria-label={`${isChecked ? "Uncheck" : "Check"} ${item}`}
                    className={`flex h-5 w-5 flex-shrink-0 items-center justify-center border-[3px] border-navy bg-white transition-colors duration-150 ${
                      isChecked ? "bg-orange" : "hover:bg-orange/20"
                    } shadow-[2px_2px_0_rgba(23,23,55,0.5)]`}
                  >
                    {isChecked && (
                      <span className="text-[12px] font-bold leading-none text-navy" aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </button>
                  <span
                    className={`font-vt text-xl font-bold text-navy transition-colors duration-150 ${
                      isChecked ? "text-navy/35 line-through decoration-orange decoration-2" : ""
                    }`}
                  >
                    <span className="mr-2 min-w-[28px] text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* learning areas */}
        <div className="mt-16">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-cyan" aria-hidden="true" />
            <span className="font-vt text-xl tracking-wider text-white/65">
              these ideas don't exist in isolation
            </span>
          </div>

          <div className="mb-7">
            <span className="w-fit -rotate-1 border-2 border-orange bg-white px-3 py-1 font-vt text-xl font-bold tracking-wider text-orange shadow-retro-sm">
              LEARNING MAP
            </span>
            <h3 className="pixel-title mt-4 text-[clamp(13px,2vw,16px)] text-paper">
              Areas I'm developing right now
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                className="pixel-card-dark p-5 transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{ borderTopColor: area.accent, borderTopWidth: "4px" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h4 className="font-pixel text-[11px] uppercase tracking-wider" style={{ color: area.accent }}>
                  {area.title}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <span className="rounded-[2px] border border-white/25 bg-white/5 px-2 py-0.5 font-vt text-lg font-bold text-white/75 transition-colors hover:border-white/50 hover:text-white" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* journey timeline */}
        <div className="mt-16">
          <div className="mb-9">
            <span className="w-fit -rotate-1 border-2 border-purple bg-white px-3 py-1 font-vt text-xl font-bold tracking-wider text-purple shadow-retro-sm">
              THE PATH
            </span>
            <h3 className="pixel-title mt-4 text-[clamp(13px,2vw,16px)] text-paper">
              My learning journey{" "}
              <span className="lowercase text-purple">(roadmap)</span>
            </h3>
            <p className="mt-3 max-w-[560px] text-[16px] leading-relaxed text-white/55">
              Building my foundation step by step. Some stages are in progress,
              none are finished — that's the point.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
            {journey.map((j, i) => (
              <div className="relative flex flex-col items-center gap-2 text-center" key={j.step}>
                <motion.div
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-orange bg-navy-2 shadow-retro-sm transition-transform duration-200 hover:-translate-y-1 hover:-rotate-[4deg]"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <span className="font-pixel text-base text-orange">{j.step}</span>
                </motion.div>

                <span className="font-pixel text-[9px] uppercase tracking-wider text-paper">
                  {j.label}
                </span>
                <span className="font-vt text-base leading-snug text-white/50">{j.note}</span>

                {i < journey.length - 1 && (
                  <span
                    className={`absolute -right-3 top-4 hidden text-sm lg:block ${
                      i % 3 === 0 ? "text-cyan" : i % 3 === 1 ? "text-pink" : "text-yellow"
                    } animate-arrow-bounce`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-12 text-center font-vt text-xl tracking-wide text-white/60">
            I'm not treating this as a checklist. It's a direction —{" "}
            <span className="text-orange">and I'm still moving through it.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Learning;