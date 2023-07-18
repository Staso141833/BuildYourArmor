import {
    Box,
    Typography,
    Stack,
    Card,
    CardMedia,
  } from "@mui/material";
  
  export const Trapezius = () => {
    return (
      <>
        <Box sx={{ fontSize: "18px" }}>
          <Typography variant="h2" sx={{ margin: 4, letterSpacing: 4 }}>
            Trapezius
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
                width: "60%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography variant="p" sx={{ width: "100%" }}>
                The trapezius[4] is a large paired trapezoid-shaped surface muscle
                that extends longitudinally from the occipital bone to the lower
                thoracic vertebrae of the spine and laterally to the spine of the
                scapula. It moves the scapula and supports the arm. The trapezius
                has three functional parts: an upper (descending) part which
                supports the weight of the arm; a middle region (transverse),
                which retracts the scapula; and a lower (ascending) part which
                medially rotates and depresses the scapula.
              </Typography>
  
              <Stack>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  Name and history
                </Typography>
                <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>
                <Typography variant="p" sx={{ width: "100%" }}>
                  The trapezius muscle resembles a trapezium, also known as a
                  trapezoid, or diamond-shaped quadrilateral. The word
                  "spinotrapezius" refers to the human trapezius, although it is
                  not commonly used in modern texts. In other mammals, it refers
                  to a portion of the analogous muscle.
                </Typography>
              </Stack>
  
              <Stack>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  Structure
                </Typography>
                <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>
                <Typography variant="p" sx={{ width: "100%" }}>
                  The superior or upper (or descending) fibers of the trapezius
                  originate from the spinous process of C7, the external occipital
                  protuberance, the medial third of the superior nuchal line of
                  the occipital bone (both in the back of the head), and the
                  ligamentum nuchae. From this origin they proceed downward and
                  laterally to be inserted into the posterior border of the
                  lateral third of the clavicle. The middle fibers, or transverse
                  of the trapezius arise from the spinous process of the seventh
                  cervical (both in the back of the neck), and the spinous
                  processes of the first, second, and third thoracic vertebrae.
                  They are inserted into the medial margin of the acromion, and
                  into the superior lip of the posterior border of the spine of
                  the scapula. The inferior or lower (or ascending) fibers of the
                  trapezius arise from the spinous processes of the remaining
                  thoracic vertebrae (T4–T12). From this origin they proceed
                  upward and laterally to converge near the scapula and end in an
                  aponeurosis, which glides over the smooth triangular surface on
                  the medial end of the spine, to be inserted into a tubercle at
                  the apex of this smooth triangular surface. At its occipital
                  origin, the trapezius is connected to the bone by a thin fibrous
                  lamina, firmly adherent to the skin. The superficial and deep
                  epimysia are continuous with an investing deep fascia that
                  encircles the neck and also contains both sternocleidomastoid
                  muscles. At the middle, the muscle is connected to the spinous
                  processes by a broad semi-elliptical aponeurosis, which reaches
                  from the sixth cervical to the third thoracic vertebræ and
                  forms, with that of the opposite muscle, a tendinous ellipse.
                  The rest of the muscle arises by numerous short tendinous
                  fibers. It is possible to feel the muscles of the superior
                  trapezius become active by holding a weight in one hand in front
                  of the body and, with the other hand, touching the area between
                  the shoulder and the neck.
                </Typography>
              </Stack>
  
              <Stack>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  Function
                </Typography>
                <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>
                <Typography variant="p" sx={{ width: "100%" }}>
                  Contraction of the trapezius muscle can have two effects:
                  movement of the scapulae when the spinal origins are stable, and
                  movement of the spine when the scapulae are stable. Its main
                  function is to stabilize and move the scapula.
                </Typography>
              </Stack>
            </Stack>
  
            <Card position="relative" sx={{ width: "25%" }}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Trapezius musscle"
                image="https://upload.wikimedia.org/wikipedia/commons/2/2d/Trapezius_Gray409.PNG"
              ></CardMedia>
            </Card>
          </Stack>
  
          <Stack></Stack>
        </Box>
      </>
    );
  };