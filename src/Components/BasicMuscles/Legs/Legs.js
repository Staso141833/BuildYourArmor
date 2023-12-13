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
  tertiaryStackChildStyles,
  tertiaryStackStyles,
} from "../basicMuscles.styles.js";

export const Legs = () => {
  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Stack sx={mainStackStyles}>
        <Stack sx={secondaryStackStyles}>
          <Typography variant="h3" sx={mainHeaderStyles}>
            Thighs
          </Typography>
          <Stack sx={dividerStyles}></Stack>
          <Typography variant="h4" sx={secondaryHeaderStyles}>
            Muscles of the thighs
          </Typography>
          <Stack sx={dividerStyles}></Stack>
          <Stack sx={cardAndParagraphRowStyles}>
            <Stack sx={{ width: "100%" }}>
              <Card position="relative">
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Arnold"
                  image="https://www.evolutionofbodybuilding.net/wp-content/uploads/2015/06/arnold-legs.jpg"
                ></CardMedia>
              </Card>
            </Stack>

            <Stack>
              <Typography variant="p">
                The quadriceps femoris (m.quadriceps femoris) is made up of the
                muscles on the front outer surface of your thighs that act as
                leg extensors. The four muscles are m.rectus femoris - straight
                thigh muscle, m.vasus intermedius - broad intermediate thigh
                muscle (invisible because it is located under m.rectus femoris),
                m.vastus medialis - occupies the front-inner part of the thigh,
                and m.vastus lateralis- occupies the front-outer part of the
                thigh. joint.
              </Typography>
              <Typography variant="p">
                Main function: A single extensor (extensor) in the knee joint.
                m.rectus femoris is also a flexor (flexcop) in the hip joint.
              </Typography>

              <Typography variant="p">
                Biceps femoris muscle (m.biceps femoris) and associated flexor
                muscles in the knee joint, located on the back surface of the
                thighs.
              </Typography>
              <Typography variant="p">
                Main function: bending at the knee joint. Other important
                muscles of the thigh include: m.tensor fasciae lattae - tensor
                muscle of the broad femoral fascia, which descends from the hip
                to the outer part of the thigh; and tailor's muscle
                (m.sartorius) - the longest muscle in the human body, which runs
                diagonally across the upper-inner thigh.
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={cardAndParagraphRowStyles}>
            <Card position="relative" sx={cardWidthStyles}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Bill Pearl"
                image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9f4980e-c692-4451-b3a9-849e4fb25fa0/dx02pc-62c0dd7c-d774-476b-9651-ef5efb9400bb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5ZjQ5ODBlLWM2OTItNDQ1MS1iM2E5LTg0OWU0ZmIyNWZhMFwvZHgwMnBjLTYyYzBkZDdjLWQ3NzQtNDc2Yi05NjUxLWVmNWVmYjk0MDBiYi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9e3LV_iGjWMGgZwzduBwDg6vRmLly669Bc9KxUj72xk"
              ></CardMedia>
            </Card>

            <Card position="relative" sx={cardWidthStyles}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Bill Pearl"
                image="https://d3i71xaburhd42.cloudfront.net/c014f3c1d62d28e39f4a5e77d73ae2f6f170602c/3-Figure1-1.png"
              ></CardMedia>
            </Card>
          </Stack>
        </Stack>
        <Stack sx={tertiaryStackStyles}>
          <Stack sx={tertiaryStackChildStyles}>
            <Typography variant="h4" sx={secondaryHeaderStyles}>
              On the importance of training the thighs
            </Typography>
            <Stack sx={dividerStyles}></Stack>
            <Typography variant="p">
              The thigh muscles are the largest and most powerful muscles in the
              human body. There are few movements in sports that do not involve
              intense leg effort. Baseball players, golfers, discus throwers,
              shot putters, and boxers all initiate their respective actions
              with a powerful leg-starting movement.
            </Typography>
            <Typography variant="p">
              In weightlifting, the most powerful movements (such as Powerlifts,
              Deadlifts, and Deadlifts) involve a large proportion of leg
              effort, as do the lifts used in Olympic weightlifting
              competitions.
            </Typography>
            <Typography variant="p">
              However, there is no sport where hip development is as important
              as bodybuilding. While the judges' attention in the upper body is
              focused on the shoulders, chest, arms, back and abs, when they
              look at the lower body, the single and most fascinating element is
              the thighs - the quadriceps and the back of the thighs. The thighs
              are the most massive muscle group in the body, and proportionately
              make up almost half of your physique.
            </Typography>
            <Typography variant="p">
              Can you imagine Sergio Oliva with skinny thighs? Or Nasser El
              Sonbati with skinny legs? What's the point of building your arms
              up to 53 centimeters or more if you're showing them against a body
              whose hips are roughly the same size?
            </Typography>
            <Typography variant="p">
              When I played soccer and skied as a teenager in Austria, the
              referees made us do exercises like Squats, Hanagu and Toe Raises
              to strengthen our legs. These early training sessions eventually
              led to my falling in love with bodybuilding. In those days we were
              lucky that the judges understood our need for stronger legs and
              knew how to train for that purpose. Today, whenever I talk to
              coaches around the world, they all agree that great leg
              development is the foundation of athletic excellence, and that
              weight training is the best way to develop that strength.
            </Typography>
            <Typography variant="p">
              But the legs have another quality besides their great strength -
              they are also capable of great endurance. Able to move up to a ton
              of weight, the legs are also designed to carry you over great
              distances without tiring. A person in good physical shape can walk
              for weeks over rough terrain and run 100 miles. There are no other
              muscles in the body that provide this combination of great
              strength and great endurance.
            </Typography>

            <Typography variant="p">
              This is why leg training in bodybuilding demands so much from you.
              It's not enough just to put your feet under a lot of stress. You
              need to use heavy weights and enough training volume to stress
              their muscle fibers and exhaust their endurance capacity. Doing 5
              sets of Barbell Bicep Curls can be difficult for your biceps, but
              doing 5 sets of heavy Barbell Squats with 181 or 226.5 kg on your
              shoulders can be compared to jogging of a mini-marathon, with the
              same kind of complete exhaustion achieved within 8 or 9 minutes of
              concentrated effort.
            </Typography>

            <Typography variant="p">
              Like many young bodybuilders, I tended to train my upper body
              harder than my thighs. Fortunately, I realized in time how
              important this muscle group was to achieving a championship
              physique, and so I began performing superhuman barbell squats and
              other thigh exercises to build this muscle mass.
            </Typography>

            <Typography variant="p">
              One exception to the trend of young bodybuilders neglecting leg
              development is Tom Platz. He actually had the opposite problem. He
              put a heavy emphasis on leg training, after which it turned out
              that he had developed his legs to the level of Mr. Olympia, which
              exceeded the level of development of his upper body by several
              classes. Since then, he has gone to great lengths to create a
              perfectly proportioned body, but his incredible leg development
              has set new standards for new generations of bodybuilders to
              aspire to.
            </Typography>
            <Stack sx={{alignItems: "center"}}>
              <Card position="relative" sx={cardWidthStyles}>
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Bill Pearl"
                  image="https://pbs.twimg.com/media/DxyjvSoW0AI16c-.jpg"
                ></CardMedia>
              </Card>
            </Stack>

            <Stack sx={tertiaryStackChildStyles}>
              <Card position="relative" sx={cardWidthStyles}>
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Bill Pearl"
                  image="https://i.redd.it/azic9vu6e5lz.jpg"
                ></CardMedia>
              </Card>
              <Typography variant="p">
                No one has achieved more quadriceps fullness and density than
                Tom Platz, especially in the lower area where the hamstrings
                attach to the knee.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};
