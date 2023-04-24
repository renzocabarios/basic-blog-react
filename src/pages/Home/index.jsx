import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography, MainFeatured } from "../../components";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
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
      <Container maxWidth="lg">
        <MainFeatured
          title="Title of a longer featured blog post"
          image="https://source.unsplash.com/random"
          imageText="main image description"
          linkText="Continue reading…"
          description="Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."
        />
      </Container>
    </>
  );
}
