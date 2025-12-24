import React from "react";

type GlowButtonProps = {
  label: string;
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
};

export const GlowButton: React.FC<GlowButtonProps> = ({
  label,
  ariaLabel,
  onClick,
  className,
}) => {
  return (
    <div className={`glow-button-wrapper ${className || ""}`}>
      <div>
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="unopaq" width="300%" height="300%" x="-100%" y="-100%">
            <feColorMatrix
              values="1 0 0 0 0 
            0 1 0 0 0 
            0 0 1 0 0 
            0 0 0 9 0"
            />
          </filter>
          <filter id="unopaq2" width="300%" height="300%" x="-100%" y="-100%">
            <feColorMatrix
              values="1 0 0 0 0 
            0 1 0 0 0 
            0 0 1 0 0 
            0 0 0 3 0"
            />
          </filter>
          <filter id="unopaq3" width="300%" height="300%" x="-100%" y="-100%">
            <feColorMatrix
              values="1 0 0 0.2 0 
            0 1 0 0.2 0 
            0 0 1 0.2 0 
            0 0 0 2 0"
            />
          </filter>
        </svg>
        <button
          className="glow-real-button"
          aria-label={ariaLabel ?? label}
          type="button"
          onClick={onClick}
        />
        <div className="glow-backdrop" />
        <div className="glow-button-container">
          <div className="glow-spin glow-spin-blur" />
          <div className="glow-spin glow-spin-intense" />
          <div className="glow-backdrop" />
          <div className="glow-button-border">
            <div className="glow-spin glow-spin-inside" />
            <div className="glow-button-inner">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


