import { FC } from 'react';
import Icon from '../../Icon/Icon';
import './SectionItem.scss';

interface SectionItemProps {
  title: string;
  icon: string;
  link: string;
}

const SectionItem: FC<SectionItemProps> = ({ title, icon, link }) => {
  return (
    <a className="section-item" href={link}>
      <Icon name={icon} color="#76A0F0" />
      <span className="section-title">{title}</span>
    </a>
  );
};

export default SectionItem;
