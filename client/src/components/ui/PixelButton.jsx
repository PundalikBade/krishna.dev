const variants = {
  primary: "pixel-btn--primary",
  accent: "pixel-btn--accent",
  paper: "pixel-btn--paper",
};

const PixelButton = ({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const cls = `pixel-btn ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
};

export default PixelButton;