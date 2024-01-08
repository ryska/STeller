import { useState } from "react";
import "./Toggle.scss";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle">
      <div onClick={toggleOpen} className={`toggle-wrapper ${isOpen ? "open" : ""}`}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </div>
  );
};

export default Toggle;
