import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

/*
 * PROJECT CARDS
 * Each project is a "work in progress" placeholder today.
 * When real projects exist, add:
 *   tags: ["React", "Node"],        <- technologies
 *   github: "https://...",          <- GitHub URL (optional)
 *   live: "https://..."             <- Live demo URL (optional)
 * The card renders them automatically and keeps the retro look.
 */
const projects = [
  {
    num: "01",
    title: "Projects in Progress",
    desc: "Building my first serious projects as I develop my programming and AI/ML skills.",
    status: "IN PROGRESS",
    icon: "★",
    gradient: "#1e2a6e",
    accent: "#ff7b2e",
  },
  {
    num: "02",
    title: "Learning Experiments",
    desc: "Small experiments and practice work created while learning programming, mathematics, AI/ML, and web development.",
    status: "EXPERIMENTING",
    icon: "⚙",
    gradient: "#3aa9d6",
    accent: "#ffce54",
  },
  {
    num: "03",
    title: "Future Builds",
    desc: "Turning the concepts I learn into practical projects as my skills grow.",
    status: "COMING SOON",
    icon: "☁",
    gradient: "#9d6bff",
    accent: "#51d0f5",
  },
];

const ProjectVisual = ({ p }) => (
  <div className="project-visual" style={{ background: p.gradient }}>
    <div className="project-shape circle" style={{ borderColor: p.accent }} />
    <div className="project-shape square" style={{ background: `${p.accent}22`, borderColor: p.accent }} />
    <div className="project-shape triangle" style={{ borderBottomColor: p.accent }} />
    <span className="project-icon">{p.icon}</span>
    <span className="project-number">{p.num}</span>
  </div>
);

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <div className="retro-section-header">
        <span className="retro-kicker">PROJECTS / 03</span>
        <h2 className="retro-section-title">
          Currently <span className="accent-word" style={{ color: "#ff5c86" }}>building</span>
        </h2>
        <p className="projects-intro">
          I'm currently learning and experimenting, working toward building
          projects across AI/ML, web development, and other areas of technology.
          Here's where I'm headed.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.article
            key={project.num}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-image">
              <ProjectVisual p={project} />
              {/* real links render only when they exist */}
              {project.live || project.github ? (
                <div className="project-overlay">
                  {project.github && (
                    <a href={project.github} className="project-link" aria-label="View GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="project-link" aria-label="View Live Demo">
                      <FaArrowUpRightFromSquare />
                    </a>
                  )}
                </div>
              ) : (
                <span className="project-status-stamp" style={{ color: project.accent, borderColor: project.accent }}>
                  {project.status}
                </span>
              )}
            </div>

            <div className="project-info">
              <h3 className="project-title">
                <span className="project-num-tag">{project.num}</span>
                {project.title}
              </h3>
              <p className="project-desc">{project.desc}</p>
              {project.tags && project.tags.length > 0 && (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
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

export default Projects;