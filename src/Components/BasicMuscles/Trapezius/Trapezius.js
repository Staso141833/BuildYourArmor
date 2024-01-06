import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  cardAndParagraphRowStyles,
  dividerStyles,
  mainHeaderStyles,
  mainStackStyles,
  secondaryHeaderStyles,
  secondaryStackStyles,
  tertiaryStackChildStyles,
  tertiaryStackStyles,
} from "../basicMuscles.styles.js";

export const Trapezius = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <Stack sx={mainStackStyles}>
        <Stack sx={secondaryStackStyles}>
          <Typography variant="h3" sx={mainHeaderStyles}>
            Trapezius
          </Typography>
          <Stack sx={dividerStyles}></Stack>
          <Typography variant="p">
            The trapezius muscle is the flat, triangular muscle that extends out
            and down from the neck and then down between the shoulder blades.
          </Typography>
          <Typography variant="p">
            To lift the entire shoulder girdle, move the scapula up, down and in
            towards the spine. It also helps to turn the head.
          </Typography>
        </Stack>

        <Stack sx={tertiaryStackStyles}>
          <Stack sx={tertiaryStackChildStyles}>
            <Typography variant="h4" sx={secondaryHeaderStyles}>
              TRAINING FOR THE TRAPEZIOUS MUSCLES
            </Typography>
            <Stack sx={dividerStyles}></Stack>

            <Typography variant="p">
              The trapezius muscles are an important part of the poses that are
              performed in front and back. In poses like the Double Back Biceps,
              the trapezius muscles help create that fantastic effect where your
              muscles curl from elbow to elbow across your upper back. In
              Lattice Back Pose, where your latissimus dorsi moves forward and
              curves to the side, the trapezius muscles form a clear triangle in
              the middle of your back. Developing the trapezius also helps to
              separate the back of the deltoids from the upper back. In most
              full-face poses, the trapezius line that runs from the neck to the
              deltoids is extremely important, especially if you want to perform
              the impressive most muscular pose.
            </Typography>

            <Stack sx={cardAndParagraphRowStyles}>
              <Card position="relative">
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Arnold"
                  image="https://i.ytimg.com/vi/xuwvNZm6_-8/hqdefault.jpg"
                ></CardMedia>
              </Card>
              <Typography variant="p">
                The trapezius muscles are important for both front and back
                poses. For example, see how they help with the overall
                "connection" of the back in the back double biceps.
              </Typography>
            </Stack>

            <Typography variant="p">
              However, the trapezius muscles should develop in proportion to the
              rest of your body. If they are too high and come down too
              obliquely, your deltoids will look too small.
            </Typography>
            <Typography variant="p">
              The trapezius muscles work in opposition to the downward pulling
              function of the latissimus dorsi, lifting the entire shoulder
              girdle upwards. In the Beginner's Training Program, I included
              Heavy Standing Barbell Rows as part of your strength training so
              that your trapezius muscles build mass and strength right from the
              start. In addition, the trapezius muscles can also benefit from
              the Deadlift exercise as well as heavy exercises such as the
              Deadlift.
            </Typography>
            <Stack>
              <Card position="relative">
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Arnold"
                  image="https://fitnessvolt.com/wp-content/uploads/2019/10/officialflexwheeler-70142918-184667699239093-2180375092819356685-n-820x1024.jpg"
                ></CardMedia>
              </Card>
            </Stack>

            <Typography variant="p">
              By the way, you'll get some development from the Dumbbell Lateral
              Raise as long as you do it the way I described it in the exercise
              section - starting by placing the dumbbells in front of your hips
              instead of letting them hang out to the sides of your body.
            </Typography>

            <Typography variant="p">
              In the Advanced Training Program, I have included Dumbbell Shrugs
              as part of your trapezius training. These work directly on the
              trapezius muscles, but you can reach a significant amount of
              weight when performing this exercise. In addition, in the Advanced
              Training Program, as well as in the Pre-Competition Program, you
              will find a large number of exercises that train the trapezius
              muscles, although they are not specifically designed for it.
              Almost every Rowing (inclined bar row, for example) or Shoulder
              Press (barbell or dumbbell) exercise involves a lifting movement
              that is performed by the trapezius muscles, which are also
              involved in other phases of the exercise performance. In addition
              to all this, strong trapezius muscles help you lift heavier
              weights in all these exercises.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};
