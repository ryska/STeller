import { ChangeEvent, FC, useContext } from 'react';
import Context, { ContextType } from '../../Context/Context';
import './DropdownSelect.scss';
import { Status } from '../../types/status';
import { ReactSVG } from 'react-svg';

interface DropdownSelectProps {
  options: { type: any; label: string }[];
}
const DropdownSelect: FC<DropdownSelectProps> = ({ options }) => {
  const { selectedStatus, updateSelectedStatus } = useContext(
    Context,
  ) as ContextType;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Status;
    updateSelectedStatus(value);
  };

  return (
    <div className="custom-select">
      <select
        className="select-input"
        value={selectedStatus}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.type} value={option.type}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="select-arrow">
        <ReactSVG
          src="/images/arrow-down.svg"
          style={{ fill: '#171A25' }}
          className="icon"
        />
      </div>
    </div>
  );
};

export default DropdownSelect;
