import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  cardWidthStyles,
  dividerStyles,
  mainHeaderStyles,
  mainStackStyles,
  secondaryHeaderStyles,
  secondaryStackStyles,
  tertiaryStackChildStyles,
  tertiaryStackStyles,
} from "../../basicMuscles.styles.js";

export const Triceps = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <Stack sx={mainStackStyles}>
        <Stack sx={secondaryStackStyles}>
          <Typography variant="h3" sx={mainHeaderStyles}>
            Triceps
          </Typography>
          <Stack sx={dividerStyles}></Stack>

          <Stack>
            <Typography variant="p">
              Triceps axillary muscle (triceps) — a muscle with three heads,
              which has an opposite action to the biceps, and also begins under
              the deltoid muscle, and its final attachment point is under the
              elbow joint.
            </Typography>
            <Typography variant="p">
              Main function: In the shoulder joint, the triceps performs
              extension and adduction, and in the elbow joint - extension.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={tertiaryStackStyles}>
          <Stack sx={tertiaryStackChildStyles}>
            <Typography variant="h4" sx={secondaryHeaderStyles}>
              Triceps training
            </Typography>
            <Stack sx={dividerStyles}></Stack>
            <Stack sx={tertiaryStackChildStyles}>
              {" "}
              <Stack sx={tertiaryStackChildStyles}>
                <Stack sx={{ alignItems: "center" }}>
                  <Card position="relative" sx={cardWidthStyles}>
                    <CardMedia
                      position="absolute"
                      component="img"
                      alt="Serge Nubret"
                      image="https://skinnyfattransformation.com/wp-content/uploads/2014/05/Serge-Nubret.jpg"
                    ></CardMedia>
                  </Card>
                </Stack>

                <Typography variant="p">
                  Serge Noubré has full, thick triceps, so his arms look massive
                  even when he's standing relaxed.
                </Typography>
              </Stack>
              <Typography variant="p">
                The triceps represent a larger muscle mass than the biceps and
                therefore need to be trained at more angles. Likewise, both
                biceps and triceps should look good when viewed from any angle.
                Unlike them, however, the triceps should make your arm look big,
                massive and impressive, even when your arms are not tense. When
                someone says, “Wow! Look at the size of this one's arms!”, you
                can be sure that it's the triceps that create that effect.They
                are visible 90% of the time when you're on stage, whether you're
                standing relaxed or striking a pose.
              </Typography>
            </Stack>

            <Typography variant="p">
              Bill Pearl, Serge Noubré, Sergio Oliva, Albert Beckles, Freddie
              Orty, Casey Viater, Jusup Vilkosch and Frank Zane are good
              examples of bodybuilders who have amazing triceps. The triceps
              should be developed in such a way that they look good when doing
              Side Triceps Pose, Front or Back Biceps Pose, or if you pose with
              your arms raised overhead or held straight ahead (a pose that
              Larry Scott, Dave Draper and I became famous and which requires
              incredible triceps). Imagine doing the Wide Back from Behind pose
              and how impressive good triceps can be at that angle. Or the most
              muscular pose, where the triceps come out of the elbow itself and
              continue to the back of the deltoid muscle. Or in front abdominal
              pose when your hands are behind your head.
            </Typography>

            <Typography variant="p">
              Although it is possible to hide a weak bicep to some extent, such
              a tricep becomes apparent in almost any pose. When the judges look
              at you as you stand relaxed in the first round, they will
              immediately know if you have good triceps or not. For example,
              Sergio Oliva may just be standing there, but his triceps look huge
              and powerful, and they impress the judges, even though his biceps
              aren't that amazing.
            </Typography>

            <Typography variant="p">
              However, just like any other part of the body, there is a
              difference between big triceps and well-developed triceps. Each
              part of this relatively complex muscle must be fully developed.
              When your arms are relaxed, your triceps should be visible along
              their entire length, from the elbow to the back of the deltoid.
              When tense, each of their heads should be fully formed, separated
              and clearly defined.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};
