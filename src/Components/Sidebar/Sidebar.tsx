import { useContext } from 'react';
import './Sidebar.scss';
import SidebarSection from './SidebarSection/SidebarSection';
import sections from './sections.json';
import Context, { ContextType } from '../../Context/Context';

const Sidebar = () => {
  const { sidebarOpen } = useContext(Context) as ContextType;

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      {sections.map((section, idx) => (
        <SidebarSection key={idx} items={section} />
      ))}
    </div>
  );
};

export default Sidebar;
