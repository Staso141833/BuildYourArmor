import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./catalogItem.css";
import {
  authorStyles,
  boxStyles,
  cardMediaStyles,
  cardStyles,
} from "./catalogItem.styles.js";

export const CatalogItem = ({ id, name, imageUrl }) => {
  return (
    <Box sx={boxStyles}>
      <Card sx={cardStyles}>
        <CardMedia
          component="img"
          image={imageUrl}
          sx={cardMediaStyles}
        ></CardMedia>
        <CardContent>
          <Typography variant="h4" sx={authorStyles}>{name}</Typography>
        </CardContent>
        <CardActions sx={cardMediaStyles}>
          <Link to={`/catalog/${id}`} className="details-button">
            Details
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};
