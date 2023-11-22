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
import { cardMediaStyles, cardStyles } from "./catalogItem.styles.js";

export const CatalogItem = ({ id, name, imageUrl }) => {
  return (
    <Box>
      <Card sx={cardStyles}>
        <CardMedia
          component="img"
          height="auto"
          image={imageUrl}
          sx={{ opacity: 0.8 }}
        ></CardMedia>
        <CardContent>
          <Typography variant="h4">{name}</Typography>
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
