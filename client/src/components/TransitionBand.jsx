const TransitionBand = () => (
  <section className="relative bg-navy px-5 py-14 md:py-16" aria-label="What I'm working on now">
    <div className="absolute inset-x-0 top-0 h-1.5 bg-orange" aria-hidden="true" />

    <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
      <p className="w-fit -rotate-1 border-2 border-royal bg-white px-3 py-1 font-vt text-xl font-bold tracking-wider text-royal shadow-retro-sm">
        STEP 01 ✦ THE BEGINNING
      </p>

      <p className="font-vt text-xl tracking-widest text-white/55">
        I'm starting with the foundations.
      </p>

      <p className="pixel-title text-[clamp(15px,2.8vw,24px)] leading-relaxed text-paper">
        SO, WHAT AM I{" "}
        <span className="text-orange">WORKING ON</span> RIGHT NOW?
      </p>

      <svg
        className="h-2.5 w-[180px]"
        viewBox="0 0 180 10"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polyline
          points="0,8 10,2 20,8 30,2 40,8 50,2 60,8 70,2 80,8 90,2 100,8 110,2 120,8 130,2 140,8 150,2 160,8 170,2 180,8"
          fill="none"
          stroke="#ffce54"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <p className="pixel-title text-[clamp(13px,2.4vw,20px)] leading-relaxed text-cyan">
        BUILDING THE FOUNDATION.
      </p>
    </div>
  </section>
);

export default TransitionBand;