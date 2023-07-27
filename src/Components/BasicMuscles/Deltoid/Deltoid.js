import {
  Box,
  Typography,
  Paper,
  Stack,
  Card,
  CardMedia,
  Step,
} from "@mui/material";

export const DeltoidMuscle = () => {
  return (
    <>
      <Box sx={{ fontSize: "18px" }}>
        <Typography variant="h2" sx={{ margin: 4, letterSpacing: 4 }}>
          Shoulders
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 2,
            m: 2,
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-evenly",
              width: "50%",
              gap: 4,
              marginBottom: 4,
            }}
          >
            <Card position="relative" sx={{ width: "38%" }}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Arnold"
                image="https://images.saymedia-content.com/.image/t_share/MTc1MTI3MzYzOTcxOTgyNDMx/secret-tips-of-arnold-schwarzenegger.jpg"
              ></CardMedia>
            </Card>
            <Stack
              sx={{
                fontSize: "18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-evenly",
                width: "58%",
                gap: 4,
                marginBottom: 4,
              }}
            >
              <Typography variant="h4">MUSCLES OF THE SHOULDER</Typography>
              <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>

              <Typography variant="p">
                The deltoid is a large, triceps, thick, triangular muscle that
                starts at the collarbone (clavicle) and the crest of the patella
                (the scapula at the back of the shoulder), and ends at its point
                of insertion (insertion) on the arm.
              </Typography>
              <Typography variant="p">
                Main function: To rotate and raise the arm. The front part of
                the deltoid muscle raises the arm forward; the middle part lifts
                it outward, and the back part brings the arm back.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
