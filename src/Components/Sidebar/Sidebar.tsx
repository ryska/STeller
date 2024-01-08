import "./Sidebar.scss";
import SidebarSection from "./SidebarSection/SidebarSection";
import sections from "./sections.json";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sections.map((section, idx) => (
        <SidebarSection key={idx} items={section} />
      ))}
    </div>
  );
};

export default Sidebar;
