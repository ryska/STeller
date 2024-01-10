import { FC } from "react";
import "./Button.scss";
import Icon from "../Icon/Icon";

interface ButtonProps {
  type: "green" | "red";
  label?: string;
  icon?: string;
  onClick: () => void;
}
const Button: FC<ButtonProps> = ({ type, label, icon, onClick }) => {
  return (
    <div className={`button ${type}`} aria-roledescription="button" onClick={onClick} tabIndex={0} role="button" aria-label={icon ? label : undefined}>
      {icon && <Icon name={icon} />}
      {label && <span>{label}</span>}
    </div>
  );
};

export default Button;
