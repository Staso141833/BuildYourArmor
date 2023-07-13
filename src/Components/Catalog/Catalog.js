import { Masonry } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Paper,
  Typography,
} from "@mui/material";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const Catalog = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 400,
        margin: "auto",
        backgroundColor: myColors.gold,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Masonry columns={4} spacing={4} sx={{ margin: "32px 48px" }}>
        <Box>
          <Card
            sx={{
              border: "1px outset  silver",
              backgroundColor: myColors.white,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://i.ytimg.com/vi/6g57DJntRXk/maxresdefault.jpg"
              sx={{ opacity: 0.8 }}
            ></CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: myColors["dark-silver"] }}
              >
                Muscle group: biceps
              </Typography>
              <Typography variant="h4">Bozidar Vangelov</Typography>
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
                href="/details"
                variant="contained"
                sx={{
                  backgroundColor: myColors["light-silver"],
                  color: myColors.black,
                  padding: "8px",
                  borderRadius: "6px",
                  marginRight: 1,
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontFamily: "Robotto",
                  transition: "all 300ms",
                  "&:hover": {
                    backgroundColor: myColors.black,
                    color: myColors["dark-silver"],
                  },
                }}
              >
                Details
              </Link>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              border: "1px outset  silver",
              backgroundColor: myColors.white,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_554051863_1000x.jpg?v=1636207391"
              sx={{ opacity: 0.8 }}
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Muscle group: biceps
              </Typography>
              <Typography variant="h4">bat Radi Pankov</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1.5,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: myColors["light-silver"],
                  color: myColors.black,
                  fontWeight: "bold",
                }}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              border: "1px outset  silver",
              backgroundColor: myColors.white,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://hips.hearstapps.com/hmg-prod/images/gettyimages-481450928-1562018717.jpg"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Muscle group: biceps
              </Typography>
              <Typography variant="h4">Ventsislav Dulev</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1.5,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: myColors["light-silver"],
                  color: myColors.black,
                  fontWeight: "bold",
                }}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              border: "1px outset  silver",
              backgroundColor: myColors.white,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOJsWRN4DW4La-Mc2fuIqnTf0Da6ec3sGUkHNhi76iAPXC1l2Oj7zoaSA-mob7UunfPU&usqp=CAU"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Muscle group: biceps
              </Typography>
              <Typography variant="h4">Emo Ushev</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1.5,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: myColors["light-silver"],
                  color: myColors.black,
                  fontWeight: "bold",
                }}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              border: "1px outset  silver",
              backgroundColor: myColors.white,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://cdn.shopify.com/s/files/1/0752/5585/articles/biceps-exercises.png?v=1623163616&width=1500"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Muscle group: biceps
              </Typography>
              <Typography variant="h4">Cankata Botsev</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1.5,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: myColors["light-silver"],
                  color: myColors.black,
                  fontWeight: "bold",
                }}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              border: "1px outset  silver",
              backgroundColor: myColors.white,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://i.ytimg.com/vi/pR1PG69dAO8/maxresdefault.jpg"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Muscle group: biceps
              </Typography>
              <Typography variant="h4">Michail Tumbev</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1.5,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: myColors["light-silver"],
                  color: myColors.black,
                  fontWeight: "bold",
                }}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              border: "1px outset  silver",
              backgroundColor: myColors.white,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5VDdpvvg-gn8h-XWephnpeRpTIz0a54dp7-gBc-Q92-4wEhRCbi6agEQQN2PJ3VODBE&usqp=CAU"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Muscle group: biceps
              </Typography>
              <Typography variant="h4">Stanislav Stiptsov</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1.5,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: myColors["light-silver"],
                  color: myColors.black,
                  fontWeight: "bold",
                }}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box>
          <Card
            sx={{
              border: "1px outset  silver",
              backgroundColor: myColors.white,
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image="https://cdn.theworkoutdigest.com/wp-content/uploads/2020/09/cable-machine-exercises-for-arms.png"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Muscle group: biceps
              </Typography>
              <Typography variant="h4">Michail Ushev</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 1.5,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: myColors["light-silver"],
                  color: myColors.black,
                  fontWeight: "bold",
                }}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Masonry>
    </Box>
  );
};
