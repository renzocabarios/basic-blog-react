import React from 'react'
import Typography from "@mui/material/Typography";

export default function (props) {
    const { component, variant, color, align, noWrap, sx } = props;
  return (
    <><Typography component={component} variant={variant} 
    color={color} align={align} noWrap={noWrap} sx={sx}size={size}> </Typography>
    </>
  )
}
