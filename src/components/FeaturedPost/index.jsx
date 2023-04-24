import * as React from "react";
import Typography from "../Typography";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function (props) {
  const { image, date, title, description, imageLabel } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" title={title} />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              title={date}
            />
            <Typography variant="subtitle1" paragraph title={description} />
            <Typography
              variant="subtitle1"
              color="primary"
              title="Continue reading..."
            />
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={image}
            alt={imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
