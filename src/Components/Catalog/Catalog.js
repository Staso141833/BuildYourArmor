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
import { useEffect, useState } from "react";
import { db } from "../../config/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const Catalog = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRefference = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRefference);

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
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
        {users.map((user) => {
          return (
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
              image={user.imageUrl}
              sx={{ opacity: 0.8 }}
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.muscleGroup}
              </Typography>
              <Typography variant="h4">{user.name}</Typography>
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
          )
        }) }

        {/* 

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
        </Box> */}
      </Masonry>
    </Box>
  );
};
