import * as React from "react";
import { MainFeatured, FeaturedPost, Navbar } from "../../components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { DATA } from "../../constants";

export default function () {
  const random = Math.floor(Math.random() * DATA.POST.length);
  const main = DATA.POST.find((element) => element.id == random);
  return (
    <>
      <Navbar />
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
