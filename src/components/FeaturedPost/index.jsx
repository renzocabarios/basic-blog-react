import * as React from "react";
import Typography from "../Typography";
import {
  Grid,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function (props) {
  const [more, setmore] = useState(false);
  const navigate = useNavigate();
  const { id, image, date, title, description, imageLabel } = props;

  const descriptionArray = description.split("");
  descriptionArray.splice(90);

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a">
        <Card
          sx={{ display: "flex" }}
          onClick={() => {
            navigate(`/${id}`);
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" title={title} />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              title={date}
            />
            <Typography
              variant="subtitle1"
              paragraph
              title={more ? description : descriptionArray.join("")}
            />
            <Typography
              variant="subtitle1"
              color="primary"
              title={more ? " Show Less" : "Continue reading"}
              onClick={() => setmore(!more)}
            />
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
