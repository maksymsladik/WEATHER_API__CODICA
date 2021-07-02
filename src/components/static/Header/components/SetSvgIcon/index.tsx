import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

interface SvgIconProps {
  color?: "action";
  fontSize?: "large";
}

const SetSvgIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

export default SetSvgIcon;
