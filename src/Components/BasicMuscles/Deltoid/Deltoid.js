import { Box, Typography, Stack, Card, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import {
  dividerStyles,
  mainHeaderStyles,
  mainStackStyles,
  secondaryHeaderStyles,
  secondaryStackStyles,
  tertiaryStackChildStyles,
  tertiaryStackStyles,
} from "../basicMuscles.styles.js";

export const DeltoidMuscle = () => {
  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Stack sx={mainStackStyles}>
        <Stack sx={secondaryStackStyles}>
          <Typography variant="h2" sx={mainHeaderStyles}>
            Shoulders
          </Typography>
          <Stack sx={dividerStyles}></Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2,
              m: 2,
              width: "100%",
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
                gap: 1,
                marginBottom: 4,
              }}
            >
              <Typography variant="h4" sx={secondaryHeaderStyles}>
                Muscles of the shoulder
              </Typography>
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

              <Typography variant="p">
                The trapezius muscle is the flat, triangular muscle that extends
                out and down from the neck and then down between the shoulder
                blades.
              </Typography>
              <Typography variant="p">
                Main function: To lift the entire shoulder girdle, move the
                scapula up, down and in towards the spine. It also helps to turn
                the head.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={tertiaryStackStyles}>
          <Stack sx={tertiaryStackChildStyles}>
            <Typography variant="h4">LOOK OVER YOUR SHOULDER</Typography>
            <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>

            <Typography variant="p">
              In the 1840s, men wore outerwear with huge, padded shoulders and
              narrowed waists, giving them an exaggerated V-shape (a style that
              seems to be coming back into fashion recently). Coincidentally,
              this is the form of development that bodybuilders work very hard
              on. Part of this look is the broad, fully developed shoulders.
            </Typography>

            <Card position="relative" sx={{ width: "100%" }}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Arnold"
                image="https://i.pinimg.com/originals/8b/f9/90/8bf990c510fcb0c0f9cb6b7e98c366c1.jpg"
              ></CardMedia>
            </Card>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 2,
                width: "100%",
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
                  width: "58%",
                  gap: 1,
                }}
              >
                <Typography variant="p">
                  Steve Reeves was one of the first bodybuilders to develop the
                  classic V shape. He was able to achieve this look because he
                  had naturally broad shoulders and a small waist. Proportions
                  like these help create the most aesthetic looks in
                  bodybuilding.
                </Typography>

                <Typography variant="p">
                  To a large extent, shoulder width is determined by skeletal
                  structure. It's something you're born with. A bodybuilder like
                  Reeves, with his very broad shoulder structure, has a huge
                  advantage, especially when standing straight and relaxed. Don
                  Howarth, Dave Draper and Frank Zane, all champions who started
                  training around the time I did, are other good examples of
                  this broad-shouldered correct look. Kevin Levron and Nasser El
                  Sonbati also possess broad shoulders.
                </Typography>

                <Typography variant="p">
                  There is another type of physique that is characterized not by
                  narrow shoulders, but by a "sag" appearance. Reg Park wasn't
                  narrow shouldered, but his trapezius muscles and his shoulders
                  were "slumped" down. My own shoulders have the same "slumped"
                  look, so they look much narrower when I'm standing relaxed
                  than when I'm posing for example spreading out the latissimus
                  dorsi (when their true width becomes visible) Watch Paul
                  Dillet on stage and you'll see somewhat of the same structure.
                </Typography>

                <Typography variant="p">
                  The other factor that is associated with the broad-shouldered
                  look is the development of the middle portion of the deltoid
                  muscles. When these muscles are fully developed, you get a
                  very impressive look when they tense up. Sergio Oliva and Tom
                  Platz, for example, have huge shoulder development, yet they
                  don't look broad and well-built when they're slouching on
                  stage. The ideal appearance for bodybuilding competitions
                  requires that you have both proper bone structure and
                  excellent mid-deltoid development. Look at the shoulders of
                  Dorian Yeats and you will understand how valuable such a
                  structure can be.
                </Typography>
              </Stack>

              <Card position="relative" sx={{ width: "40%" }}>
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Steve Reeves"
                  image="https://www.muscleandfitness.com/wp-content/uploads/2013/06/Steve-Reeves-main.jpg?w=500&quality=86&strip=all"
                ></CardMedia>
              </Card>
            </Stack>
            <Stack
              sx={{
                fontSize: "18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-evenly",
                width: "100%",
                marginBottom: 4,
              }}
            >
              <Typography variant="p">
                By the way, bodybuilders who are known for their massive
                shoulder development are usually also known for their massive
                shoulder strength, such as being able to perform 100+ pound
                Shoulder Presses behind their necks; Shoulder presses in front
                of the body with 143 kilograms, as Sergio and Franco usually
                did; Ken Waller, who had a powerful front deltoid, was doing
                shoulder presses with 63-pound dumbbells.
              </Typography>

              <Typography variant="p">
                However, width, like lateral deltoid development, is only one
                aspect of overall deltoid development. The shoulders should also
                be "thick", show development in the front and rear, fit the
                pectorals and biceps properly, as well as the trapezius muscles
                and the rest of the back.
              </Typography>

              <Typography variant="p">
                The deltoid muscle is extremely mobile. To move the arm forward,
                backward or sideways, up and around, the muscle has three almost
                distinct parts that bodybuilders call heads: front, side, and
                back (comb).
              </Typography>

              <Typography variant="p">
                The deltoids play an important role in virtually every pose.
                They complement your width and size, in the front double biceps
                pose, they also complement the expression of muscles in the most
                muscular poses. The thickness and development of the three parts
                has a significant role in poses that are viewed from the side,
                for example the Triceps Pose. From the back, the effect of poses
                such as the Double Biceps Rear is highly dependent on how well
                the shape, separation and relief you have also affects the back
                of the deltoids.
              </Typography>

              <Typography variant="p">
                The development of the deltoid muscles should show relief and
                striation, no matter what movements you do while performing all
                the poses we have mentioned, as well as when moving from one
                pose to another. It should be interconnected so that the three
                heads of the deltoid muscle work together with all the nearby
                muscles, thus giving you a strong, muscular appearance.
              </Typography>

              <Typography variant="p">
                When standing relaxed, it is also important to have fully
                developed deltoids. When viewed from the front, as well as from
                the back, well-developed mid-deltoids make you appear wider.
                When viewed from the front, there should be complete separation
                between the deltoid and pectoral muscles. For some people, this
                separation is natural. Others require very specialized training
                on the weak spot.When viewed from the side, developing the back
                of the deltoids gives you that "bulge" on the back of the
                shoulders that you can clearly see in great champions like Flex
                Wheeler or Dorian Yates. Both the back of the deltoids and the
                trapezius are extremely important when viewed from the back.
              </Typography>

              <Typography variant="p">
                Of course shoulder width and deltoid development are actually
                two different things. Steve Reeves, for example, was not
                particularly dense and massive in his deltoid region despite his
                great width. In contrast, Larry Scott, who in 1960 won the first
                Mr. Olympia competition, displayed thick, muscular deltoid
                muscles, the massive development of which compensated for his
                natural, rather narrow proportions. Shawn Ray's shoulder width
                isn't exceptional, but you don't notice that because his
                deltoids are so tight and fully developed.
              </Typography>
              <Typography variant="p">
                Many bodybuilders with relatively narrow proportions have been
                "saved" by the incredible development of their deltoid muscles.
                My favorite example of this is Reg Park.
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  m: 1,
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    fontSize: "18px",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    width: "57%",
                  }}
                >
                  <Typography variant="p">
                    Reg worked very hard to compensate for his relatively narrow
                    skeletal proportions, and this resulted in tremendous
                    shoulder development. He was the first bodybuilder to do a
                    226.5 kg leg press, and this was possible because of the
                    size and strength of his front deltoids, which along with
                    his pectorals and triceps worked very hard for this lift.
                  </Typography>

                  <Typography variant="p">
                    An additional issue worth considering is that all of these
                    champions trained in very different ways. Franco had
                    developed huge front deltoids from all the push-ups he was
                    doing, so he needed to supplement his training with rear
                    deltoid exercises to get the balance right.
                  </Typography>

                  <Typography variant="p">
                    Larry Scott has gotten the best results in his shoulder
                    training using the stripping method, starting with heavier
                    weights and gradually reducing them set by set so that he
                    really trains and develops his deltoids - from 40 - kilogram
                    dumbbells up to 13.5 kilograms. Dorian Yates has spent years
                    performing high-intensity training using a relatively low
                    number of sets but applying all intensity techniques such as
                    negatives, forced reps, forced negatives and partial reps.
                  </Typography>
                </Stack>

                <Card position="relative" sx={{ width: "42%" }}>
                  <CardMedia
                    position="absolute"
                    component="img"
                    alt="Franco Columbu"
                    image="https://www.thebarbell.com/wp-content/uploads/2019/11/Franco-Columbu.jpg"
                  ></CardMedia>
                </Card>
              </Stack>

              <Typography variant="p">
                What I'm trying to say here is that no two people have their
                bodies exactly the same, or who, as they progress through their
                training, arrive at the same methods they use to train a given
                body part. There isn't a bodybuilder who hasn't had to adjust
                his training to overcome his weaknesses in order to create a
                proportionate and balanced appearance.
              </Typography>
            </Stack>
          </Stack>

          <Stack sx={tertiaryStackChildStyles}>
            <Typography variant="h4">
              TRAINING FOR THE DELTOVID MUSCLES
            </Typography>
            <Stack sx={dividerStyles}></Stack>

            <Typography variant="p">
              There are two main types of shoulder exercises. These are
              deadlifts and shoulder presses.
            </Typography>
            <Typography variant="p">
              Raises involve lifting your outstretched arms upward in a large
              arc of motion that better isolates parts of the muscle. You should
              do the forward, side and back lifts. When you do deadlifts, you're
              not engaging the triceps, you're almost completely isolating the
              different parts of the deltoid muscle. However, since these
              exercises are aimed at isolating the muscles (analytical training
              them - note, etc.), you cannot lift as much weight as in the
              Shoulder Press, because you maintain an upright position of your
              arm throughout the movement.With folded hands, the weight is
              located at shoulder level, and from this position you lift the
              barbell or dumbbells straight up over your head. Because in
              addition to pulling up, you straighten your arms, Presses involve
              working both the deltoids and triceps. To a certain extent, you
              can change the load on your shoulders by directing it to different
              parts of the deltoid muscles, performing different types of
              presses - for the front or for the rear parts, using a barbell,
              dumbbells or different machines.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};
