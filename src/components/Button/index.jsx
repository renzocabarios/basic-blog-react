import React from "react";
import Button from "@mui/material/Button";

export default function (props) {
  const { variant, size, title, onClick = () => {} } = props;
  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => {
          onClick();
        }}
      >
        {title}
      </Button>
    </>
  );
}
