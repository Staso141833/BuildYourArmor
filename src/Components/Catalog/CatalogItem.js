import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Button,
} from "@mui/material";


const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const CatalogItem = ({
  id,
  name,
  imageUrl,
}) => {


  return (
    <Box>
      <Card
        sx={{
          border: "1px outset  silver",
          backgroundColor: myColors.white,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={imageUrl}
          sx={{ opacity: 0.8 }}
        ></CardMedia>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
              {publication.muscleGroup}
            </Typography> */}
          <Typography variant="h4">{name}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 1.5,
          }}
        >
          <Link
            href={`/catalog/${id}`}
            variant="contained"
            sx={{
              backgroundColor: myColors.black,
              color: myColors.gold,
              fontWeight: "bold",
              textDecoration: "none",
              padding: "12px 16px",
              borderRadius: "4px",
            }}
          >
            Details
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};
