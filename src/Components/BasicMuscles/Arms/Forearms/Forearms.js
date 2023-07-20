import { Stack, Typography } from "@mui/material";

export const Forearms = () => {
  return (
    <Stack
      sx={{
        fontSize: "18px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Stack
        sx={{
          fontSize: "18px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-evenly",
          width: "80%",
          gap: 4,
          marginBottom: 4,
        }}
      >
        <Typography variant="h3">Forearms</Typography>
        <Stack sx={{ width: "50%", border: "1px solid black" }}></Stack>

        <Stack
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="p">
            Muscles of the forearm - here are a number of muscles that are
            located on the inside and outside of the forearm and control the
            actions of the wrist and fingers.
          </Typography>
          <Typography variant="p">
            MAIN FUNCTION: The flexors of the forearm bend the palm downward
            and backward, and the extensors extend it upward and forward..
          </Typography>
        </Stack>

        <Stack
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="h4">Forearms training</Typography>
          <Stack sx={{ width: "70%", border: "1px solid black" }}></Stack>

          <Stack
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              gap: 2,
            }}
          >
            <Typography variant="p">
              The forearms need to be taken just as seriously as any other part
              of the body if you want to develop a truly quality physique. They
              are involved in almost every upper body exercise, either helping
              you grip onto a piece of equipment or being part of all the
              pushing and pulling movements. So they get significant
              "accidental" strain even when you're not doing exercises
              specifically for them. In fact, every time you bend your elbows or
              wrists, you're stressing your forearm muscles.
            </Typography>
            <Typography variant="p">
              Good forearm development is necessary to create a championship
              physique, but forearm strength is also important. Strong forearms
              allow you to train with heavier weights, and in exercises like
              Deadlifts and Pulley Rows, where the palm and wrist are usually
              the weak 'link', give you the capacity to train intensely to put
              the muscles of greater load.
            </Typography>
            <Typography variant="p">
              As with other muscles, genetic makeup is also a factor that
              determines the potential size and strength of the forearms. The
              reason why some forearm muscles seem to run all the way up the
              forearm to the palm as if they have no tendons is because the
              person in question has extremely long muscles
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};