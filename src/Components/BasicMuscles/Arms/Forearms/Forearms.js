import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Forearms = () => {
  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
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
                The forearms need to be taken just as seriously as any other
                part of the body if you want to develop a truly quality
                physique. They are involved in almost every upper body exercise,
                either helping you grip onto a piece of equipment or being part
                of all the pushing and pulling movements. So they get
                significant "accidental" strain even when you're not doing
                exercises specifically for them. In fact, every time you bend
                your elbows or wrists, you're stressing your forearm muscles.
              </Typography>
              <Typography variant="p">
                Good forearm development is necessary to create a championship
                physique, but forearm strength is also important. Strong
                forearms allow you to train with heavier weights, and in
                exercises like Deadlifts and Pulley Rows, where the palm and
                wrist are usually the weak 'link', give you the capacity to
                train intensely to put the muscles of greater load.
              </Typography>

              <Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Card position="relative">
                  <CardMedia
                    position="absolute"
                    component="img"
                    alt="Ronnie Coleman"
                    image="https://staticg.sportskeeda.com/editor/2022/06/92e28-16545063200741-1920.jpg"
                  ></CardMedia>
                </Card>
                <Typography variant="p">
                  Ronnie Coleman's arm development is a perfect example of how
                  development in the inner part of the biceps helps create the
                  necessary separation between the biceps and triceps, as well
                  as between the biceps and forearm.
                </Typography>
              </Stack>
              <Typography variant="p">
                As with other muscles, genetic makeup is also a factor that
                determines the potential size and strength of the forearms. The
                reason why some forearm muscles seem to run all the way up the
                forearm to the palm as if they have no tendons is because the
                person in question has extremely long muscle bellies - they
                represent the shortening parts of the muscle-tendon structure.
                Muscle size depends on the length of the muscle bellies, because
                mass is a product of volume - that is, it depends on three
                dimensions, not just one. So when the arm is 5 centimeters
                longer, it actually leads to a lot more additional potential
                when you consider what the increase in cubic units might be.
                Many bodybuilders who have this body structure claim that they
                do not need to train their forearms and that they get adequate
                results from exercises like heavy bicep curls with a barbell.
                However, when I trained with Casey Viater, who had incredible
                forearm development, I saw him do 70-pound barbell bicep curls
                and 61-pound reverse bicep curls.Sergio Oliva used to do endless
                sets of reverse biceps curls on the bench to get this HUGE
                development in his forearms. Dave Draper also worked out a lot
                for his forearms. So even if you're genetically gifted with good
                forearms, that doesn't mean you shouldn't train them.
              </Typography>

              <Typography variant="p">
                It is possible to have high forearms - this means having
                relatively short muscle bellies and long tendons, which limits
                the cubic volume of muscle mass. Most bodybuilders, myself
                included, fall somewhere in the middle, neither possessing the
                full forearm structure of Sergio Oliva nor incredibly high
                forearms. With this type of forearms, it is possible to build
                muscles to the point where they are proportional to the arm, but
                for this to happen, you need to train them hard.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};
