import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  cardAndParagraphRowStyles,
  cardWidthStyles,
  dividerStyles,
  mainHeaderStyles,
  mainStackStyles,
  secondaryHeaderStyles,
  secondaryStackStyles,
  stackCardAndParagraphStyles,
  tertiaryStackChildStyles,
  tertiaryStackStyles,
} from "../basicMuscles.styles.js";

export const Calves = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <Stack sx={mainStackStyles}>
        <Stack sx={secondaryStackStyles}>
          <Typography variant="h3" sx={mainHeaderStyles}>
            Calves
          </Typography>
          <Stack sx={dividerStyles}></Stack>
          <Typography variant="h4" sx={secondaryHeaderStyles}>CALF MUSCLES</Typography>
          <Stack sx={dividerStyles}></Stack>
          <Stack sx={stackCardAndParagraphStyles}>
            <Card position="relative" sx={cardWidthStyles}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Bill Pearl"
                image="https://www.builtreport.com/wp-content/uploads/2018/05/Tom_Platz_calves-300x212.jpg"
              ></CardMedia>
            </Card>

            <Typography variant="p">
              The flat muscle (m.soleus) is the wide and deep muscle that is
              located under the two heads of the calf muscle, and whose starting
              point is at the upper end of the bones of the tibia and tibia.
            </Typography>
            <Typography variant="p">
              Main function: To flex the foot (plantar flexion in the ankle
              joint - note pr.).
            </Typography>

            <Typography variant="p">
              The calf muscle has two heads. One of its heads starts from the
              posterior surface of the medial condyle of the femur, and the
              other from the posterior surface of the lateral condyle. Both
              heads join together with that of the flat muscle and form the
              Achilles tendon, which grips the heel bone.
            </Typography>
            <Typography variant="p">
              Main function: Plantar flexion in the ankle joint.
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={tertiaryStackStyles}>
          <Stack sx={tertiaryStackChildStyles}>
            <Typography variant="h4" sx={secondaryHeaderStyles}>
              CALF TRAINING
            </Typography>
            <Stack sx={dividerStyles}></Stack>

            <Typography variant="p">
              The calves, as well as the deltoid and abdominal muscles,
              represent a very aesthetic body part. Nice calves look good on the
              beach or on the tennis court, as well as on stage. What's more,
              incredible calf development has historically been associated with
              the ideal male physique. Huge deltoid muscles, embossed abdominal
              muscles and powerful calves are qualities that Greek sculptors
              extolled in their classical depictions of warriors and athletes.
            </Typography>
            <Typography variant="p">
              Ideally, the development of your calves should match the
              development of your biceps. If your calves are smaller than your
              arms, then you should pay special attention to them. (One
              exception to this rule is Chris Dickerson, the only bodybuilder
              whose calves are naturally bigger than his arms.)
            </Typography>
            <Typography variant="p">
              Calves are considered the most difficult muscle group in the body
              to shape. However, they respond to training in the same way as any
              other muscle - you just need to keep in mind that they need to be
              trained at many different angles and with extremely heavy weights.
            </Typography>

            <Typography variant="p">
              Think about what happens when you walk or run: you turn your foot
              and ankle first in one direction, then in another; you push off,
              stop unexpectedly, turn and change direction, go up, go down. With
              each different movement you make, your calf muscles take your
              weight, lifting you up on your toes, bringing you back down on
              your heels, and helping you rotate your feet in different
              directions.
            </Typography>

            <Typography variant="p">
              When I was training with Reg Park, I had problems with my calves -
              they weren't as big as I wanted them to be. I was doing Toe Raises
              with 226.5 or 271 kg, but he was using 453! He noted that each of
              my calves could easily lift my 113kg, so 226kg was actually normal
              for them. So by training with the weight I was loading them with,
              it hardly resulted in any growth spurt!
            </Typography>

            <Typography variant="p">
              The main exercise for building calf mass is Standing Toe Raises,
              and this is where the extra weight is really important. This
              exercise, along with the Donkey Ride, trains both the calf muscle
              and the calf muscle. Seated toe raises work the flat muscle
              better.
            </Typography>

            <Typography variant="p">
              Many bodybuilders do their calf training as a supplement. Before
              or after their regular training, they spend about 10 minutes on
              them, which is significantly less than the time spent on other
              body parts. They then complain that their calves are not
              responding.
            </Typography>

            <Typography variant="p">
              I believe that calves should be trained in the same way as any
              other body part. Since calves are built for constant work and
              quick recovery, I train them 30 to 45 minutes a day. Also, I use a
              variety of exercises, not just a few standing and seated bench
              presses. I do enough upper, lower, inner and outer calf exercises.
            </Typography>

            <Typography variant="p">
              Calves are hardy and used to very heavy loading, and the best way
              to increase their size is by constantly shocking them using every
              possible training principle. For example, when I was doing Donkey
              Ride, I would often start with three 100-pound bodybuilders
              sitting on my back. I would continue the set until I couldn't do
              another rep, then one of them would go down, and I would continue
              until my calves screamed in agony. I ended up finishing my set
              using my own weight until my calves felt like they were going to
              explode.
            </Typography>

            <Typography variant="p">
              Another shocking method involves performing Partial Reps. About
              one in four of my calf workouts involves performing half and
              three-quarter movements with extremely heavy weights, which puts
              incredible strain on the calves. In fact, you can use literally
              all of the shocking principles described in this book to develop
              your calves Zigzag Sets, Rest/Pause, Forced Reps, 21s supersets,
              sprints, etc. The more you shock the calves, the more you subject
              them to unexpected stimulation, the more they will respond with
              growth.
            </Typography>

            <Typography variant="p">
              Once, while I was doing Standing Toe Raises, a young bodybuilder
              came up to me and told me how much he admired the development of
              my calves. I replied, "You can have calves just as good if you're
              willing to pay the price." He looked at me confused and asked what
              I meant. "Calves like these will cost you five hundred hours if
              you put in less efforts, you will not get any results."
            </Typography>

            <Typography variant="p">
              If you analyze these 500 hours, you will realize that this equates
              to more than 660 workouts of 45 minutes each. 660 divided by 4
              workouts per week equals about 165 weeks, or over 3 years! So
              unless you're genetically gifted like Chris Dickerson, and born
              with magnificent calves, building them will take a minimum of
              three years of brutal training.
            </Typography>

            <Typography variant="p">
              Even after all these efforts, you may not be able to turn your
              calves into your best body part. Still, I doubt there are many
              bodybuilders with enough talent to build the rest of their bodies
              whose calves won't respond to the regimen I recommend.
            </Typography>
          </Stack>

          <Stack sx={tertiaryStackChildStyles}>
            <Typography variant="h4" sx={secondaryHeaderStyles}>
              CALF STRETCH
            </Typography>
            <Stack sx={dividerStyles}></Stack>

            <Typography variant="p">
              To get one full contraction (contraction) of a muscle, you need to
              get one full extension (extension). For the calves, this means
              going through the full range of motion when doing the exercises,
              lowering your heels as much as possible before coming back up on
              your toes to get a contraction.
            </Typography>
            <Typography variant="p">
              Tom Platz takes this condition to its extreme by having his
              partner sit on the Seated Toe Raise machine in such a way that he
              forces his heels to come down further and further, thereby
              stretching the calves to their limit (something which other
              bodybuilders should do extremely carefully if they try to copy him
              (as they can get injured - ed.). What Tom Platz does is to use a
              principle that I myself discovered many years ago: the greater the
              range of motion, and the more complete the extension and
              contraction of the muscle, the more it will develop. This is
              especially valuable in calf training, because in normal calf use,
              when we walk or run, we mostly use some mid-range of their range
              of motion functions.
            </Typography>
            <Typography variant="p">
              For Standing Toe Raises, I like to use a block that is high enough
              for my calves to touch the floor at the bottom of the exercise.
              That way, I know I'll have lowered my heels enough to get the
              maximum stretch in my calf muscles.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};
