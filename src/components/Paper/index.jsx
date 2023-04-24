import React from "react";
import Paper from "@mui/material/Paper";

export default function (props) {
  const { sx, children } = props;
  return (
    <>
      <Paper sx={sx}>{children}</Paper>
    </>
  );
}
