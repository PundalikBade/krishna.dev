import { useRef } from "react";
import "./retroHero.css";

const Lined = ({ children }) => (
  <span className="retro-highlight">{children}</span>
);

const RetroRocket = () => (
  <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
    <g stroke="#171737" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 6 C36 16 38 24 38 34 L26 34 C26 24 28 16 32 6 Z" fill="#ff5c86" />
      <path d="M38 40 L26 40 L30 54 L34 54 Z" fill="#51d0f5" />
      <path d="M30 54 l-4 6 M34 54 l4 6" stroke="#ff7b2e" strokeWidth="4" />
      <line x1="30" y1="20" x2="22" y2="14" />
      <line x1="34" y1="20" x2="42" y2="14" />
      <circle cx="32" cy="48" r="2.5" fill="#f3f0e8" stroke="none" />
    </g>
  </svg>
);

const RetroCharacter = () => (
  <svg
    className="retro-char"
    viewBox="0 0 480 560"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <clipPath id="cropper">
        <rect x="0" y="0" width="480" height="560" />
      </clipPath>
    </defs>

    <g clipPath="url(#cropper)">
      {/* retro sun */}
      <g stroke="#171737" strokeWidth="7" strokeLinecap="round">
        <circle cx="82" cy="86" r="40" fill="#ff7b2e" />
        <line x1="82" y1="26" x2="82" y2="10" />
        <line x1="118" y1="38" x2="130" y2="26" />
        <line x1="136" y1="74" x2="152" y2="74" />
        <line x1="46" y1="74" x2="30" y2="74" />
        <line x1="34" y1="38" x2="22" y2="26" />
      </g>

      {/* stars */}
      <g fill="#171737" opacity="0.3">
        <circle cx="360" cy="70" r="5" />
        <circle cx="404" cy="220" r="4" />
        <circle cx="60" cy="240" r="4" />
        <circle cx="120" cy="320" r="3" />
      </g>

      {/* orbiting ring behind character */}
      <g transform="rotate(18 240 230)">
        <ellipse
          cx="240"
          cy="230"
          rx="150"
          ry="46"
          fill="none"
          stroke="#51d0f5"
          strokeWidth="5"
          strokeDasharray="12 10"
          opacity="0.5"
        />
      </g>

      {/* star burst */}
      <path
        d="M372 128 l13 26 l26 13 l-26 13 l-13 26 l-13 -26 l-26 -13 l26 -13 Z"
        fill="#ff5c86"
        stroke="#171737"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M64 296 l7 14 l14 7 l-14 7 l-7 14 l-7 -14 l-14 -7 l14 -7 Z"
        fill="#51d0f5"
        stroke="#171737"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* ============ CHARACTER ============ */}
      <g stroke="#171737" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        <path d="M176 144 C168 96 192 68 244 68 C296 68 312 104 300 146 L300 128 C292 92 188 92 178 128 Z" fill="#4a2c8c" />
        <path d="M200 82 C196 62 210 52 222 62 C214 66 206 70 204 76 Z" fill="#4a2c8c" />

        <circle cx="180" cy="158" r="14" fill="#ffd9a3" />
        <circle cx="296" cy="158" r="14" fill="#ffd9a3" />

        <rect x="184" y="106" width="108" height="132" rx="26" fill="#ffd9a3" />
        <rect x="228" y="238" width="24" height="36" fill="#ffd9a3" />

        {/* shades */}
        <rect x="188" y="122" width="102" height="46" rx="14" fill="#171737" />
        <line x1="188" y1="140" x2="172" y2="140" strokeWidth="8" />
        <rect x="197" y="130" width="38" height="30" rx="8" fill="#51d0f5" />
        <rect x="243" y="130" width="38" height="30" rx="8" fill="#51d0f5" />
        <path d="M203 140 h22 M249 140 h22" stroke="#ffffff" strokeWidth="6" opacity="0.7" />

        <path d="M238 178 q10 12 18 4" strokeWidth="4" fill="none" />
        <path d="M224 206 Q240 218 256 206" strokeWidth="5" fill="none" />

        {/* collar + tie */}
        <path d="M206 268 L240 296 L274 268 Z" fill="#ff7b2e" />
        <path d="M240 296 l0 74 l-16 -70 Z" fill="#ff5c86" />

        {/* torso */}
        <rect x="188" y="266" width="104" height="186" rx="26" fill="#25227d" />
        <path d="M196 320 h88" stroke="#51d0f5" strokeWidth="8" strokeLinecap="round" />
        <path d="M196 352 h88" stroke="#51d0f5" strokeWidth="8" strokeLinecap="round" opacity="0.55" />

        <circle cx="240" cy="330" r="6" fill="#ff7b2e" />
        <circle cx="240" cy="404" r="6" fill="#ff7b2e" />

        <rect x="208" y="356" width="54" height="42" rx="8" fill="#51d0f5" />
        <rect x="224" y="336" width="10" height="28" rx="3" fill="#ff5c86" />
        <path d="M229 360 l6 8 l-6 8 Z" fill="#ffd9a3" />

        {/* left arm + pencil */}
        <path d="M198 284 Q150 302 148 344" stroke="#25227d" strokeWidth="26" />
        <rect x="136" y="336" width="30" height="20" rx="7" fill="#ff7b2e" />
        <circle cx="150" cy="372" r="15" fill="#ffd9a3" />
        <path d="M120 400 L196 368" stroke="#ff5c86" strokeWidth="11" />
        <path d="M196 368 l-16 -14 l20 6 Z" fill="#ffd9a3" />
        <path d="M133 382 l14 -8 M126 392 l14 -8" stroke="#171737" strokeWidth="4" opacity="0.35" />

        {/* right arm raised */}
        <path d="M284 280 Q338 274 344 232" stroke="#25227d" strokeWidth="24" />
        <rect x="356" y="222" width="22" height="20" rx="7" fill="#ff7b2e" />
        <circle cx="366" cy="204" r="14" fill="#ffd9a3" />
        <rect x="360" y="184" width="12" height="18" rx="5" fill="#ffd9a3" />

        <rect x="212" y="446" width="34" height="80" rx="10" fill="#171737" />
        <rect x="254" y="446" width="34" height="80" rx="10" fill="#171737" />
      </g>

      {/* text badge */}
      <g transform="rotate(-8 330 240)">
        <rect x="306" y="220" width="150" height="40" rx="10" fill="#ff5c86" stroke="#171737" strokeWidth="6" />
        <text
          x="381"
          y="246"
          textAnchor="middle"
          fill="#fff"
          fontFamily="'VT323', monospace"
          fontSize="20"
          stroke="none"
        >
          ★ LEARN &amp; BUILD ★
        </text>
      </g>
    </g>
  </svg>
);

const Hero = () => {
  const decorRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e) => {
    const el = decorRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.setProperty("--mx", x.toFixed(3));
    el.style.setProperty("--my", y.toFixed(3));
  };

  return (
    <section id="home" className="retro-hero">
      <div className="retro-card" onMouseMove={handleMouseMove}>
        <div className="retro-left">
          <p className="retro-tag">★ STUDENT PORTFOLIO — KRISHNA ★</p>

          <div className="retro-heading-wrap">
            <h1 className="retro-heading">
              Hi, I'm
              <br />
              Krishna
            </h1>
            <svg
              className="zigzag-underline"
              viewBox="0 0 180 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polyline
                points="0,8 10,2 20,8 30,2 40,8 50,2 60,8 70,2 80,8 90,2 100,8 110,2 120,8 130,2 140,8 150,2 160,8 170,2 180,8"
                fill="none"
                stroke="#ff7b2e"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="retro-sub">
            BS STUDENT <span className="sub-dot">•</span> AI/ML LEARNER{" "}
            <span className="sub-dot">•</span> BUILDER
          </p>

          <p className="retro-para">
            First-year <Lined>BS student in Aeronautical &amp; Space Technology</Lined>{" "}
            at IIT Madras, exploring AI/ML, mathematics, DSA, web development,
            and quantum computing.
          </p>

          <div className="retro-cta-row">
            <button className="retro-cta retro-cta--accent" type="button" onClick={() => scrollTo("learning")}>
              EXPLORE MY JOURNEY <span>↓</span>
            </button>
            <button className="retro-cta" type="button" onClick={() => scrollTo("contact")}>
              CONTACT ME <span>✉</span>
            </button>
          </div>

          <div className="retro-info">
            <div className="retro-contact-row">
              <span className="retro-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="2.4">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>IIT MADRAS — BS AERO &amp; SPACE TECH</span>
            </div>
            <div className="retro-contact-row">
              <span className="retro-icon retro-icon--pink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="2.4">
                  <path d="M12 2l2.1 5.6L20 9.3l-4.2 3.9 1.3 5.9L12 16l-5.1 3.1 1.3-5.9L4 9.3l5.9-1.7z" />
                </svg>
              </span>
              <span>LEARNING — AI/ML • MATH • DSA • WEB • QC</span>
            </div>
          </div>
        </div>

        <div className="retro-right" ref={decorRef}>
          <div className="orbit-ring" aria-hidden="true"></div>
          <RetroCharacter />
          <span className="float-chip rocket" aria-hidden="true">
            <RetroRocket />
          </span>
          <span className="float-chip ai chip-left">AI</span>
          <span className="float-chip sigma">Σ</span>
          <span className="float-chip ml chip-right">ML</span>
          <span className="retro-credit" aria-hidden="true">
            ✦ LEARN · PIXEL · GROW ✦
          </span>
        </div>
      </div>

      <div className="retro-marquee" aria-hidden="true">
        <div className="retro-marquee-track">
          {[0, 1].map((g) => (
            <div className="retro-marquee-group" key={g}>
              <span>HI, I'M KRISHNA</span>
              <span>★</span>
              <span>IIT MADRAS</span>
              <span>★</span>
              <span>AERO &amp; SPACE TECH</span>
              <span>★</span>
              <span>AI/ML</span>
              <span>★</span>
              <span>LINEAR ALGEBRA</span>
              <span>★</span>
              <span>DSA</span>
              <span>★</span>
              <span>WEB DEV</span>
              <span>★</span>
              <span>QUANTUM</span>
              <span>★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;