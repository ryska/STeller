import './Sidebar.scss';
import SidebarSection from './SidebarSection/SidebarSection';
import sections from './sections.json';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sections.map(section => <SidebarSection items={section} />)}
    </div >
  );
}

export default Sidebar;