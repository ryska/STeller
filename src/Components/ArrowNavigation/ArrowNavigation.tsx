import { FC } from "react";
import Icon from "../Icon/Icon";
import "./ArrowNavigation.scss";

interface ArrowNavigationProps {
  onNextClick: () => void;
  onPrevClick: () => void;
}
const ArrowNavigation: FC<ArrowNavigationProps> = ({
  onNextClick,
  onPrevClick,
}) => {
  return (
    <div className="arrow-navigation">
      <div className="arrow" onClick={onPrevClick}>
        <Icon name="arrow-left" color="#A3A4AB" />
      </div>
      <div className="arrow" onClick={onNextClick}>
        <Icon name="arrow-right" color="#A3A4AB" />
      </div>
    </div>
  );
};

export default ArrowNavigation;
