import { FC } from 'react';
import './Badge.scss';
import { Status } from '../../types/status';

interface BadgeProps {
  type: Status;
}
const Badge: FC<BadgeProps> = ({ type }) => {
  return <div className={`badge ${type}`}>{type}</div>;
};

export default Badge;
