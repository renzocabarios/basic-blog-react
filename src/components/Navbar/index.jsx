import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "../Button";
import Typography from "../Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function () {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small" title="Subscribe" />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          title="Renzo Blog"
          sx={{ flex: 1 }}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" title=" Sign up" />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
    </>
  );
}
