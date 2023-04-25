import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import {
  Button,
  Typography,
  MainFeatured,
  FeaturedPost,
} from "../../components";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { DATA } from "../../constants";

export default function () {
  const random = Math.floor(Math.random() * DATA.POST.length);
  const main = DATA.POST.find((element) => element.id == random);
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
          title={main.title}
          id={main.id}
          description={main.description}
        />
        <Grid container spacing={4}>
          {DATA.POST.map((post) => (
            <FeaturedPost
              key={post.title}
              image={post.image}
              date={post.date}
              title={post.title}
              description={post.description}
              imageLabel={post.imageLabel}
              id={post.id}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
