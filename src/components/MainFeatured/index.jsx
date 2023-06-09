import * as React from "react";
import Typography from "../Typography";
import Paper from "../Paper";
import Link from "../Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
export default function (props) {
  const { id, image, imageText, title, description } = props;
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={image} alt={imageText} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom={true}
              title={title}
            />

            <Typography
              variant="h5"
              color="inherit"
              paragraph={true}
              title={description}
            />
            <Button
              onClick={() => {
                navigate(`/${id}`);
              }}
              title="View"
            ></Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
