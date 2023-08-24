import { Box, Card, CardActions, CardContent, CardMedia, Typography, Link } from "@mui/material"

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
    weight,
    height,
    description,
    imageUrl,
    _ownerId,

}) => {


    return (
        <Box key={id}>
        <Card
          sx={{
            border: "1px outset  silver",
            backgroundColor: myColors.white,
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
              href={`/catalog/details`}
              variant="contained"
              sx={{
                backgroundColor: myColors["light-silver"],
                color: myColors.black,
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
    )
}