import { FC } from 'react';
import './Input.scss';

interface InputProps {
  value: number;
  placeholder?: string;
  onChange: () => void;
}

const Input: FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <>
      <div className="input-component">
        <input
          className="input"
          type="text"
          placeholder={placeholder || 'Type'}
          value={value}
          onChange={onChange}
          name="searchInput"
        />
      </div>
    </>
  );
};

export default Input;
