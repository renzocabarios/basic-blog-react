import React from "react";
import Typography from "@mui/material/Typography";

export default function (props) {
  const {
    component,
    variant,
    color,
    align,
    noWrap,
    sx,
    title,
    paragraph = false,
    gutterBottom = false,
    onClick = () => {},
  } = props;
  return (
    <>
      <Typography
        component={component}
        variant={variant}
        color={color}
        align={align}
        noWrap={noWrap}
        sx={sx}
        paragraph={paragraph}
        gutterBottom={gutterBottom}
        onClick={() => onClick()}
      >
        {title}
      </Typography>
    </>
  );
}
