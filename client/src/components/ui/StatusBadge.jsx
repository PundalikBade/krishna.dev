const tones = {
  cyan: "pixel-status--cyan",
  yellow: "pixel-status--yellow",
  orange: "pixel-status--orange",
  pink: "pixel-status--pink",
  purple: "pixel-status--purple",
  green: "pixel-status--green",
};

const StatusBadge = ({ children, tone = "cyan", className = "" }) => (
  <span className={`pixel-status ${tones[tone]} ${className}`}>{children}</span>
);

export default StatusBadge;