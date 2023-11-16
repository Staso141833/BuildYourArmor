import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Abs = () => {
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
          <Typography variant="h3">Abdominal muscles</Typography>
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
              The rectus abdominis muscle (m.rectus abdominis) is a long muscle
              that is located along the ventral (ie front - note) part of the
              abdomen. Its initial attachment site is from the anterior surface
              of the V to VIII costal cartilage and the xiphoid process, and its
              final attachment site is in the area of ​​the pubic bones.
            </Typography>
            <Typography variant="p">
              Main function: Bends the spine forward, bringing the chest and
              pelvis closer together.
            </Typography>
            <Typography variant="p">
              External and internal oblique abdominal muscles (m.obliquus
              externus et internus abdomminis) - these are the muscles located
              on both sides of the torso, attached to the lower eight ribs and
              ending on the side of the pelvis.
            </Typography>
            <Typography variant="p">
              Main function: Bending the spine forward, sideways and rotating
              it.
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
            <Typography variant="h4">ABDOMINAL TRAINING MUSCLES</Typography>
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
                Strong abdominal (abdominal) muscles are essential for
                maximizing performance in almost all sports. In bodybuilding,
                the abs play an extremely important role when it comes to the
                visual impression your physique makes on an onlooker. Abdominal
                muscles are actually the visual center of the body. If you
                superimpose the X sign on the body, with its endpoints located
                on the shoulders and legs, the two lines cross over the abdomen,
                and this is where the eye is inevitably drawn. Men carry a
                disproportionate number of fat cells in the abdominal area
                compared to women (who can often be relatively full (ie, with a
                large amount of fat), and yet their abs can be seen), so
                well-defined abs are one of the signs of being in top shape -
                strong and strong.
              </Typography>
              <Typography variant="p">
                A bodybuilder is likely to score points in a competition if he
                has broad shoulders and broad "fins" that are tapered down to a
                tight, narrow cross. A small cross can make your breasts and
                hips look bigger, more impressive and more aesthetic.
              </Typography>
              <Typography variant="p">
                A V-shaped torso is just as important as lean mass when it comes
                to creating a championship-quality physique. I have often seen
                competitions where good bodybuilders have appeared with a few
                pounds on top to make them look more massive, only to find that
                the extra weight they carry around their waist spoils the visual
                effect. When I got into bodybuilding, there were a few
                bodybuilders who made up for their lack of overall size with
                incredible abdominal development - competitors like Pierre
                Vandenstein and Vince Gironda for example. In modern
                bodybuilding, however, any future champion, regardless of body
                type, must have well-developed muscles to be competitive from
                the really massive bodybuilders (Dorian Yates, Nasser El
                Sonbati, Paul Dillet) and the medium-sized (Flex Wheeler) to the
                petite (Shawn Ray) and even the short (Lee Priest).
              </Typography>
              <Typography variant="p">
                If my waist had been small and tight, with embossed rectus
                abdominis and obliques, when I came to compete in the USA in
                1968, I might not have finished second to Frank Zane. At the
                same time, however, if Frank had gone to the 1982 London Olympia
                IN the form he achieved in 1979 when he beat Mike Menzer for
                that title, he might have crushed Chris Dickerson instead of
                finishing second. Frank had actually bulked up for this
                competition, but in doing so he appeared on stage without the
                chiseled abs that made him so incredibly impressive in his
                prime. Not having visible abs, or failing to show them off, can
                cost you dearly during a competition. Boyer Coe had great racing
                success in the 1960s and 1970s, but he was one of the few racers
                who did not boast well-developed F6 tiles”. Bowe's lack of abs
                development was genetic and not due to improper or sloppy
                training. However, the sport has become so competitive that
                there are no longer champion bodybuilders without excellent abs
                at almost any level of competition. Bigger men in sports today
                often have problems because their abs become too massive, and
                they become too thick in the middle and sides of the body. Often
                this happens as a result of performing very heavy exercises such
                as barbell squats for example, which require a strong
                involvement of the abdominal muscles and the oblique muscles in
                the role of stabilizers. Because of this, you will almost never
                see a bodybuilder using weights to train their rectus abdominis
                or obliques. However, the fact that you put so much stress on
                the muscles of the lumbar region when you train hard means that
                no one A bodybuilder, even a smaller one, does not need to train
                his abs using any kind of resistance (although many do before
                competing). Of course, there are some abdominal exercises that
                involve more effort, since they involve more than body weight,
                and therefore we will look at them in more detail.
              </Typography>

              <Stack>
                <Typography variant="p">
                  In a posedown, when you can get into any position you want, it
                  makes sense not to get into the same position as other
                  bodybuilders who have advantages as a result of the greater
                  development of a body part or because of their greater mass.
                </Typography>
                <Card position="relative" sx={{ width: "100%", mt: 2 }}>
                  <CardMedia
                    position="absolute"
                    component="img"
                    alt="chest musscle"
                    image="https://media.vanityfair.com/photos/5942e95de9423741a1f17762/master/w_2000,h_1333,c_limit/t-arnold-schwarzenegger-pumping-iron-ss.jpg"
                  ></CardMedia>
                </Card>
              </Stack>

              <Stack>
                <Typography variant="h4">POINT REDUCTION</Typography>
                <Stack
                  sx={{ width: "100%", border: "1px solid black" }}
                ></Stack>

                <Stack
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    gap: 2,
                  }}
                >
                  <Typography variant="p">
                    Strong abdominal (abdominal) muscles are essential for
                    maximizing performance in almost all sports. In
                    bodybuilding, the abs play an extremely important role when
                    it comes to the visual impression your physique makes on an
                    onlooker. Abdominal muscles are actually the visual center
                    of the body. If you superimpose the X sign on the body, with
                    its endpoints located on the shoulders and legs, the two
                    lines cross over the abdomen, and this is where the eye is
                    inevitably drawn. Men carry a disproportionate number of fat
                    cells in the abdominal area compared to women (who can often
                    be relatively full (ie, with a large amount of fat), and yet
                    their abs can be seen), so well-defined abs are one of the
                    signs of being in top shape - strong and strong. When I
                    started bodybuilding, most competitors believed in something
                    called "point reduction" and there are still many people who
                    believe it is possible. Spot reduction refers to training a
                    specific muscle to burn fat in a specific body part.
                    According to this idea, to develop abs, you do a lot of
                    volume training for your abs, a lot of reps, and you burn
                    the fat that hides your abs development.
                  </Typography>

                  <Typography variant="p">
                    Unfortunately, this doesn't work. When the body is in a
                    caloric deficit and starts metabolizing fat for energy, it
                    doesn't stop at an area where the muscles are working hard
                    to get additional energy resources. The body has a
                    genetically programmed model, according to which it
                    determines from which fat cells it can most easily obtain
                    the energy stored in the form of fat. Exercise does burn
                    calories, but of course, abs are relatively small muscles,
                    so NO MATTER how much you exercise them, you won't
                    metabolize as much energy as you would from even a simple
                    walk, in the same amount of time.
                  </Typography>

                  <Typography variant="p">
                    However, this does not mean that training an area, such as
                    the abs, does not increase the relief. As I explained, the
                    abs get a solid workout when you do heavy exercises, but
                    what they don't get is a quality workout—that is, isolated
                    (analytical) loading as well as full range of motion
                    exercises. Exercises that do this develop the full shape and
                    separation of the abs instead of just making them bigger. So
                    even though training your abs in this way doesn't do much to
                    reduce waist fat, it does create very nice toned muscles
                    that show up as soon as you've reduced your body fat enough
                    through diet and aerobic exercise.
                  </Typography>
                </Stack>

                <Stack>
                  <Card position="relative" sx={{ width: "100%", mt: 2 }}>
                    <CardMedia
                      position="absolute"
                      component="img"
                      alt="Bill Pearl"
                      image="https://www.greatestphysiques.com/wp-content/uploads/2016/07/bp22.jpg"
                    ></CardMedia>
                  </Card>
                  <Typography variant="p">
                    When Bill Pearl won his first race in the early 1950s,
                    incredible abs weren't considered a top priority. However,
                    by the time he won his NABBA Mr. Universe titles, although
                    his body weight had actually increased significantly, his
                    abs were fantastic.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};
