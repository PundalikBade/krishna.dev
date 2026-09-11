const SectionHeading = ({
  kicker,
  title,
  accent,
  accentClass = "text-orange",
  intro,
  titleClass = "text-royal",
  introClass = "text-ink-blue",
  kickerClass = "",
  className = "",
}) => (
  <div className={`mb-14 ${className}`}>
    <span className={`pixel-kicker ${kickerClass}`}>{kicker}</span>
    <h2 className={`pixel-title mt-5 text-[clamp(22px,3.6vw,36px)] ${titleClass}`}>
      {title}
      {accent && <span className={accentClass}> {accent}</span>}
    </h2>
    {intro && (
      <p className={`mt-5 max-w-[640px] text-[16.5px] leading-relaxed ${introClass}`}>
        {intro}
      </p>
    )}
  </div>
);

export default SectionHeading;