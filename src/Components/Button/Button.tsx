import { FC } from "react";
import "./Button.scss";

interface ButtonProps {
  type: string;
  label?: string;
  icon?: string;
  onClick: () => void;
}
const Button: FC<ButtonProps> = ({ type, label, icon, onClick }) => {
  return (
    <div className="button">
      <button>
        {icon && icon}
        {label && label}
      </button>
    </div>
  );
};

export default Button;
