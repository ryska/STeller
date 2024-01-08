import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IconProps {
  name: string;
  color?: string;
}

const Icon: FC<IconProps> = ({ name, color }) => {
  return (
      <ReactSVG
        src={`/images/${name}.svg`}
        onError={(error: any) =>
          console.error(`Error loading SVG: ${error.message}`)
        }
        style={{ fill: color }}
      />
  );
};

export default Icon;
