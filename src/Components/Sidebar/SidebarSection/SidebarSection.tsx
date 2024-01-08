import { FC } from "react";
import "./SidebarSection.scss";
import SectionItem from "../SectionItem/SectionItem";
import Divider from "../../Divider/Divider";

interface SidebarSectionProps {
  items: any[]; // fix
}

const SidebarSection: FC<SidebarSectionProps> = ({ items }) => {
  return (
    <>
      <Divider />
      <div className="sidebarSection">
        {items.map(({ title, icon, link }) => (
          <SectionItem title={title} icon={icon} link={link} />
        ))}
      </div>
    </>
  );
};

export default SidebarSection;
