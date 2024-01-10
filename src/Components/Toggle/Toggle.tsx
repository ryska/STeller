import { useContext } from "react";
import "./Toggle.scss";
import Context, { ContextType } from "../../Context/Context";

const Toggle = () => {
  const { sidebarOpen, updateSidebarOpen } = useContext(Context) as ContextType;

  const toggleOpen = () => {
    updateSidebarOpen()
  };

  return (
    <div className="toggle" onClick={toggleOpen}>
      <div className={`toggle-wrapper ${sidebarOpen ? "open" : ""}`}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </div>
  );
};

export default Toggle;
