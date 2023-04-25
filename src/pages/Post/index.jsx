import * as React from "react";
import { Button, Typography, YoutubeEmbed } from "../../components";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams, useNavigate } from "react-router-dom";
import { DATA } from "../../constants";

export default function () {
  const params = useParams();
  const navigate = useNavigate();
  const found = DATA.POST.find((element) => element.id == params.id);
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container
          sx={{
            py: 8,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <YoutubeEmbed embedId={found.embedId} />

          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            title={found.title}
          />
          <Typography
            component="h1"
            variant="h6"
            color="text.primary"
            gutterBottom
            title={found.description}
          />
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {DATA.POST.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    title={card.title}
                  />

                  <Typography title={card.description}></Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    title="View"
                    onClick={() => {
                      navigate(`/${card.id}`);
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
