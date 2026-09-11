import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { getProjects } from "../services/api";
import SectionHeading from "./ui/SectionHeading";

/* ---------- static work-in-progress cards (shown when DB is empty) ---------- */
const wipCards = [
  { num: "01", title: "Projects in Progress", desc: "Building my first serious projects as I develop my programming and AI/ML skills.", status: "IN PROGRESS", icon: "★", gradient: "#1e2a6e", accent: "#ff7b2e" },
  { num: "02", title: "Learning Experiments", desc: "Small experiments and practice work created while learning programming, mathematics, AI/ML, and web development.", status: "EXPERIMENTING", icon: "⚙", gradient: "#3aa9d6", accent: "#ffce54" },
  { num: "03", title: "Future Builds", desc: "Turning the concepts I learn into practical projects as my skills grow.", status: "COMING SOON", icon: "☁", gradient: "#9d6bff", accent: "#51d0f5" },
];

const accentForStatus = (s) => {
  if (s === "completed") return "#39c48d";
  if (s === "coming-soon") return "#9d6bff";
  return "#ff7b2e";
};

const ProjectVisual = ({ p }) => (
  <div className="relative flex h-[200px] items-center justify-center overflow-hidden border-b-[3px] border-navy" style={{ background: p.gradient }}>
    {!p.image && (
      <>
        <div className="absolute h-[130px] w-[130px] rounded-full border-[3px] opacity-25" style={{ borderColor: p.accent, animation: "floaty 12s ease-in-out infinite" }} />
        <div className="absolute h-[70px] w-[70px] border-[3px] bg-white/10 opacity-25" style={{ borderColor: p.accent, animation: "floaty 16s ease-in-out infinite reverse" }} />
      </>
    )}

    {p.image ? (
      <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
    ) : (
      <>
        <span className="relative z-10 text-5xl text-white drop-shadow-lg">{p.icon || "★"}</span>
        {p.num && <span className="absolute right-3.5 bottom-1 font-pixel text-[40px] text-white/15">{p.num}</span>}
      </>
    )}

    {p.github || p.demo ? (
      <div className="absolute inset-0 flex items-center justify-center gap-3.5 bg-navy/72 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {p.github && (
          <a href={p.github} className="flex h-12 w-12 items-center justify-center bg-pink text-xl text-paper" aria-label="View GitHub">
            <FaGithub />
          </a>
        )}
        {p.demo && (
          <a href={p.demo} className="flex h-12 w-12 items-center justify-center bg-pink text-xl text-paper" aria-label="View Live Demo">
            <FaArrowUpRightFromSquare />
          </a>
        )}
      </div>
    ) : (
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] whitespace-nowrap border-4 border-current bg-white/90 px-4 py-2.5 font-pixel text-sm uppercase text-navy shadow-lg transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
        style={{ color: p.accent || accentForStatus(p.status) }}
      >
        {p.status || "IN PROGRESS"}
      </span>
    )}
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch(() => {});
  }, []);

  const showReal = projects.length > 0;
  const cards = showReal
    ? projects.map((p, i) => ({
        ...p,
        num: String(i + 1).padStart(2, "0"),
        icon: p.status === "completed" ? "✓" : "★",
        gradient: "#1e2a6e",
        accent: accentForStatus(p.status),
      }))
    : wipCards;

  return (
    <section className="relative bg-white px-5 py-20 md:py-28" id="projects">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,92,134,0.06) 40px,rgba(255,92,134,0.06) 41px)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-1.5 bg-pink" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeading
          kicker="PROJECTS / 03"
          title="Currently"
          accent="building"
          kickerClass="bg-white text-pink border-pink"
          titleClass="text-royal"
          accentClass="text-pink"
          intro="I'm currently learning and experimenting, working toward building projects across AI/ML, web development, and other areas of technology. Here's where I'm headed."
          introClass="text-ink-blue"
        />

        {!showReal && (
          <p className="mb-6 font-vt text-xl tracking-wider text-navy/60">
            No finished projects yet — I'm focused on learning.
          </p>
        )}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((p) => (
            <motion.article
              key={p.num || p._id}
              className="group pixel-card overflow-hidden transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectVisual p={p} />

              <div className="flex flex-col gap-2 p-5">
                <h3 className="pixel-title text-[13px] leading-relaxed text-navy">
                  {p.num && <span className="mr-2.5 text-pink">{p.num}</span>}
                  {p.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-ink-blue">{p.desc}</p>

                {p.technologies && p.technologies.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.technologies.map((tag) => (
                      <span className="border-2 border-navy bg-paper px-2.5 py-0.5 font-vt text-lg font-bold text-navy" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;