import React, { useRef } from "react";
import "./AnimatedButton.css";

const AnimatedButton = ({ type = "button", text, bgColor, textColor, hoverColor, hoverTextColor }) => {
  const buttonRef = useRef(null);

  const handleMouseMove = e => {
    const btn = buttonRef.current;
    if (btn) {
      const x = e.pageX - btn.offsetLeft;
      const y = e.pageY - btn.offsetTop;
      btn.style.setProperty("--x", `${x}px`);
      btn.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <button
      className="btn"
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        "--hover-color": hoverColor,
        "--hover-text-color": hoverTextColor || "black",
      }}
      type={type}
    >
      <span>{text}</span>
    </button>
  );
};

export default AnimatedButton;
