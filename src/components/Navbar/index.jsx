import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "../Typography";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          title="Renzo Blog"
          sx={{ flex: 1 }}
          onClick={() => {
            navigate("/");
          }}
        />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
    </>
  );
}
