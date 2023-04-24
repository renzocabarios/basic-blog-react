import React from "react";
import Button from "@mui/material/Button";

export default function (props) {
  const { variant, size, title } = props;
  return (
    <>
      <Button variant={variant} size={size}>
        {title}
      </Button>
    </>
  );
}
