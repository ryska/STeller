import { FC } from 'react';
import './SidebarSection.scss';
import SectionItem from '../SectionItem/SectionItem';
import Divider from '../../Divider/Divider';

type SidebarItem = {
  icon: string;
  title: string;
  link: string;
};

interface SidebarSectionProps {
  items: SidebarItem[];
}

const SidebarSection: FC<SidebarSectionProps> = ({ items }) => {
  return (
    <>
      <Divider />
      <div className="sidebarSection">
        {items.map(({ title, icon, link }, idx) => (
          <SectionItem key={idx} title={title} icon={icon} link={link} />
        ))}
      </div>
    </>
  );
};

export default SidebarSection;
