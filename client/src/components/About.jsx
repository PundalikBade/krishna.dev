import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const DeskScene = () => (
  <svg
    className="h-auto w-full"
    viewBox="0 0 520 440"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* stars */}
    <g fill="#171737" opacity="0.3">
      <circle cx="40" cy="60" r="5" />
      <circle cx="120" cy="96" r="3" />
      <circle cx="470" cy="66" r="4" />
      <circle cx="430" cy="130" r="3" />
    </g>

    {/* planet with ring */}
    <g stroke="#171737" strokeWidth="5">
      <circle cx="66" cy="34" r="16" fill="#9d6bff" />
      <ellipse cx="66" cy="34" rx="27" ry="8" fill="none" stroke="#ff7b2e" strokeWidth="4" transform="rotate(-18 66 34)" />
    </g>

    {/* little rocket in the sky */}
    <g transform="translate(436, 60) rotate(28)" stroke="#171737" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M0 0 C2 10 4 16 4 22 L-4 22 C-4 16 -2 10 0 0 Z" fill="#ff5c86" />
      <path d="M-4 24 L-1 18 L1 18 L4 24 Z" fill="#51d0f5" />
      <circle cx="0" cy="8" r="2" fill="#f3f0e8" stroke="none" />
    </g>

    {/* plant */}
    <g stroke="#171737" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M92 320 q-4 -60 10 -92 M110 318 q-2 -70 18 -108 M118 316 q10 -50 36 -62" fill="none" />
      <ellipse cx="112" cy="140" rx="26" ry="42" fill="#7acf4e" transform="rotate(-18 112 140)" />
      <ellipse cx="96" cy="180" rx="22" ry="34" fill="#5db03a" transform="rotate(12 96 180)" />
      <ellipse cx="150" cy="172" rx="20" ry="30" fill="#8fdd5c" transform="rotate(-30 150 172)" />
      <rect x="72" y="314" width="80" height="52" rx="10" fill="#51d0f5" />
      <rect x="72" y="306" width="80" height="18" rx="6" fill="#3aa9d6" />
    </g>

    {/* desk */}
    <g stroke="#171737" strokeWidth="6" strokeLinejoin="round">
      <rect x="14" y="330" width="490" height="96" rx="14" fill="#1e2a6e" />
      <rect x="14" y="330" width="490" height="14" rx="7" fill="#ff7b2e" />
    </g>

    {/* monitor base + stand */}
    <g stroke="#171737" strokeWidth="6" strokeLinejoin="round">
      <rect x="208" y="326" width="150" height="14" rx="5" fill="#171737" />
      <rect x="272" y="272" width="20" height="56" fill="#171737" />
    </g>

    {/* monitor frame + screen */}
    <g stroke="#171737" strokeWidth="6" strokeLinejoin="round">
      <rect x="172" y="104" width="216" height="172" rx="12" fill="#171737" />
      <rect x="182" y="114" width="196" height="152" rx="6" fill="#101028" />
    </g>

    {/* window dots */}
    <circle cx="198" cy="128" r="5" fill="#ff5c86" stroke="none" />
    <circle cx="214" cy="128" r="5" fill="#ffce54" stroke="none" />
    <circle cx="230" cy="128" r="5" fill="#34d399" stroke="none" />

    {/* code lines */}
    <g fill="#51d0f5" opacity="0.9">
      <rect x="196" y="148" width="120" height="9" rx="3" />
    </g>
    <g fill="#ff5c86">
      <rect x="196" y="168" width="88" height="9" rx="3" />
    </g>
    <g fill="#9d6bff">
      <rect x="208" y="188" width="132" height="9" rx="3" />
    </g>
    <g fill="#ff7b2e">
      <rect x="208" y="208" width="72" height="9" rx="3" />
    </g>
    <g fill="#51d0f5" opacity="0.9">
      <rect x="196" y="228" width="150" height="9" rx="3" />
    </g>
    <g fill="#f3f0e8" opacity="0.6">
      <rect x="196" y="248" width="98" height="9" rx="3" />
    </g>

    {/* sticky note on screen */}
    <g transform="rotate(6 356 96)">
      <rect x="338" y="84" width="54" height="48" rx="4" fill="#ffce54" />
      <path d="M338 84 h54 v10 h-54 Z" fill="#e8b63c" />
      <line x1="346" y1="106" x2="384" y2="106" stroke="#171737" strokeWidth="3" />
      <line x1="346" y1="116" x2="376" y2="116" stroke="#171737" strokeWidth="3" />
    </g>

    {/* keyboard */}
    <g stroke="#171737" strokeWidth="4" strokeLinejoin="round">
      <rect x="180" y="356" width="210" height="60" rx="8" fill="#2a2a5c" />
      <rect x="190" y="366" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="218" y="366" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="246" y="366" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="274" y="366" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="302" y="366" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="330" y="366" width="46" height="12" rx="3" fill="#3a3a6c" />
      <rect x="190" y="384" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="218" y="384" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="246" y="384" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="274" y="384" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="302" y="384" width="22" height="12" rx="3" fill="#3a3a6c" />
      <rect x="330" y="384" width="46" height="12" rx="3" fill="#3a3a6c" />
      <rect x="190" y="402" width="186" height="10" rx="3" fill="#3a3a6c" />
    </g>

    {/* coffee mug + steam */}
    <g stroke="#171737" strokeWidth="6" strokeLinejoin="round">
      <path d="M398 300 q-3 -18 4 -34 M414 302 q4 -16 -2 -30" fill="none" />
      <rect x="388" y="308" width="46" height="44" rx="8" fill="#ff7b2e" />
      <path d="M434 322 h14 a14 14 0 0 1 0 22 h-14" fill="none" />
      <rect x="398" y="322" width="26" height="8" rx="3" fill="#f3f0e8" />
    </g>

    {/* floppy disk */}
    <g stroke="#171737" strokeWidth="5" strokeLinejoin="round">
      <rect x="96" y="362" width="58" height="66" rx="8" fill="#ff5c86" />
      <rect x="108" y="374" width="34" height="38" rx="4" fill="#f3f0e8" />
      <rect x="88" y="388" width="10" height="14" rx="2" fill="#171737" />
    </g>
  </svg>
);

const edu = [
  { label: "Education", value: "IIT Madras" },
  { label: "Year", value: "First Year" },
  { label: "Program", value: "BS — Aeronautical & Space Technology", wide: true },
  { label: "Current Focus", value: "AI/ML • Mathematics • DSA • Web Development • Quantum", wide: true },
];

const About = () => (
  <section className="relative bg-white px-5 py-20 md:py-28">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
    <div className="absolute inset-x-0 top-0 h-1.5 bg-orange" aria-hidden="true" />

    <div className="relative mx-auto max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading kicker="ABOUT / 01" title="Building my" accent="foundation" accentClass="text-orange" />
      </motion.div>

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-fit -rotate-2 border-2 border-navy bg-navy px-3 py-1.5 font-vt text-xl font-bold tracking-wider text-paper shadow-retro-sm">
            <span className="text-orange">*</span> ABOUT ME <span className="text-orange">*</span>
          </span>

          <h3 className="pixel-title text-[clamp(15px,2.4vw,21px)] leading-[1.55] text-navy">
            Hi, I'm Krishna — a first-year BS student in{" "}
            <span className="text-orange">Aeronautical &amp; Space Technology</span>{" "}
            at IIT Madras.
          </h3>

          <p className="text-[17px] leading-relaxed text-ink-blue">
            My academic path is rooted in aerospace, but I'm increasingly drawn
            toward the world of computing, mathematics, and artificial
            intelligence.
          </p>
          <p className="text-[17px] leading-relaxed text-ink-blue">
            Right now, I'm exploring how programming and mathematical ideas come
            together to create intelligent systems. That means spending time
            with linear algebra, algorithms, AI/ML fundamentals, JavaScript, web
            development, and even the foundations of quantum computing.
          </p>
          <p className="text-[17px] leading-relaxed text-ink-blue">
            I'm still early in this journey, and that's intentional. Instead of
            rushing toward a list of technologies, I'm focused on understanding
            the fundamentals well enough to build on them.
          </p>

          <p className="mt-3 font-vt text-xl tracking-wider text-navy-3">
            THE GOAL IS SIMPLE:
          </p>
          <div className="mt-1.5 flex w-fit flex-wrap items-center gap-x-2.5 gap-y-1.5 border-[3px] border-navy bg-paper-2 px-4 py-2.5 shadow-retro-sm">
            {["LEARN", "EXPERIMENT", "BUILD", "UNDERSTAND", "REPEAT"].map(
              (step, i) => (
                <span className="flex items-center gap-x-2.5" key={step}>
                  {i > 0 && <span className="text-orange">→</span>}
                  <span className="pixel-title text-[10px] text-navy">{step}</span>
                </span>
              )
            )}
          </div>

          <div className="mt-3 grid max-w-[560px] grid-cols-2 border-[3px] border-navy shadow-retro">
            {edu.map((d) => (
              <div
                className={`border-navy/15 p-4 ${d.wide ? "col-span-2" : ""}`}
                key={d.label}
                style={{
                  borderWidth: "1px",
                }}
              >
                <span className="block font-vt text-lg uppercase tracking-wider text-navy-3">{d.label}</span>
                <span className="block pt-0.5 text-[15px] font-bold leading-snug text-navy">{d.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <DeskScene />
          <span className="pixel-stamp absolute -bottom-3 right-5">
            IIT M
            <br />
            LEARNING
            <br />
            ZONE
          </span>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;