import { Card, CardMedia, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Back = () => {
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
            gap: 6,
          }}
        >
          <Typography variant="h2">Back</Typography>
          <Stack sx={{ width: "50%", border: "1px solid black" }}></Stack>

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
            <Typography variant="h4">Back muscles</Typography>
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
                Latissimus dorsi - this is the large triangular muscle that runs
                from the level of your armpits down to the narrowest part of
                your back on either side. These are the largest muscles in the
                upper body.
              </Typography>

              <Typography variant="p">
                Main function: adduction, internal rotation and retroversion of
                the arm (to pull the shoulders down and back).
              </Typography>

              <Typography variant="p">
                Levators of the back (spinal levators) these are several muscles
                along the spine that stand out more clearly in the lumbar
                region. They protect the nerves exiting the spine and help
                straighten the back. These are the slowest recovering muscles in
                the human body after heavy exercise.
              </Typography>

              <Typography variant="p">
                Main function: To keep the spine straight.
              </Typography>
            </Stack>

            <Card position="relative" sx={{ width: "70%", mt: 2 }}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Bill Pearl"
                image="https://i.pinimg.com/originals/8b/f9/90/8bf990c510fcb0c0f9cb6b7e98c366c1.jpg"
              ></CardMedia>
            </Card>
          </Stack>

          <Stack
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Stack
              sx={{
                width: "58%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                gap: 2,
              }}
            >
              <Typography variant="h4">Upper back</Typography>
              <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>

              <Typography variant="p">
                Upper back development involves much more than the back muscles
                themselves. When you're in Double Biceps Back Pose, the
                trapezius and upper and middle back muscles are dominant, but
                all the muscles from elbow to elbow have a role to play,
                including the biceps and rear deltoids.
              </Typography>
              <Typography variant="p">
                The central muscle in the upper back is the trapezius, an
                angular muscle that extends down from the shoulders on either
                side of the neck, then meets at a point on the spine, roughly
                mid-back. With a highly developed back, the trapezius muscles
                will be large and massive, balancing the broad back muscles on
                each side, and clearly separated from them in the back poses.
                The exercises that train especially the trapezius muscles, cover
                everything, at which is included lifting the shoulders - in the
                first place Trapezoid shrugs and Standing Barbell Rows, but also
                Rowing in some poses and some types of push-ups. They are
                discussed in the training program for training the trapezius
                muscles.
              </Typography>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "38%",
                gap: 1,
              }}
            >
              <Card position="relative" sx={{ width: "100%" }}>
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Arnold"
                  image="https://www.greatestphysiques.com/wp-content/uploads/2016/09/1970-Arnold-1.jpg"
                ></CardMedia>
              </Card>
              <Typography variant="p">
                In the arched back pose, you need a solid, muscular upper back
                to balance the development of the shoulders, biceps, triceps and
                forearms.
              </Typography>
            </Stack>
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
            <Card position="relative" sx={{ width: "70%" }}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Lee Haney"
                image="https://i.skyrock.net/6142/43896142/pics/1769350702_small.jpg"
              ></CardMedia>
            </Card>
            <Typography variant="h4">Latissimus Dorsi</Typography>
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
                The most impressive part of a fully developed back is the curve
                of the latissimus dorsi. It is this breadth of musculature that
                proves to the world that you are indeed a bodybuilder. The lats
                are the most likely to catch the judges' attention first, even
                when you're standing relaxed during the first round. The
                traditional V-shape of the bodybuilder - with broad shoulders to
                a stable narrow waist - is directly dependent on the right kind
                of development of the latissimus dorsi.
              </Typography>
              <Typography variant="p">
                The width of the latissimus dorsi is developed through all kinds
                of downward pulling movements, such as pull-ups or barbell
                pull-ups. The exact way the twitchy movement affects the
                latissimus dorsi muscle is determined by the angle you train at,
                how far apart they are your arms, and whether you're pulling
                down in front of your body or behind.
              </Typography>
              <Typography variant="p">
                Except these broad back muscles are visible when viewed from the
                front, as complement the chest with an expansion of the torso,
                with the line of the back muscles that have the role of a frame
                for the pectoral muscles. The latissimus dorsi contribute to the
                performance of a large number of poses, including full-face
                ones, as well as the Double pose front and back biceps, and
                various bent over poses.
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: 1,
                }}
              >
                <Card position="relative" sx={{ width: "100%" }}>
                  <CardMedia
                    position="absolute"
                    component="img"
                    alt="Ronnie Coleman"
                    image="https://scontent.fsof10-1.fna.fbcdn.net/v/t1.6435-9/87260582_10158041932444621_7648843790714667008_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=aKg-1slaUE4AX9NOEQt&_nc_ht=scontent.fsof10-1.fna&oh=00_AfC2nx71aCVlb1zzPKoFu1YE8798KKMAGxmxWtD4DIUK6w&oe=64E9AD53"
                  ></CardMedia>
                </Card>
                <Typography variant="p">
                  Lee Haney, Ronnie Coleman and Robbie Robinson are three
                  incredible bodybuilders known for their V-shaped torsos in the
                  back and front, which is the result of the exceptional
                  development of the latissimus dorsi.
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Card position="relative" sx={{ width: "38%" }}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Frank Zane"
                image="https://i.pinimg.com/564x/c2/ba/76/c2ba76f61eeda7af08ccc1bff6f39c52.jpg"
              ></CardMedia>
            </Card>

            <Stack
              sx={{
                width: "58%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography variant="h4">
                Lower part of the latissimus dorsi
              </Typography>
              <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>

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
                  When you see Franco Columbo or Frank Zane doing arched back
                  pose, you can't help but be impressed by the way the lower
                  part of the latissimus dorsi extend to their starting point at
                  the waist. This gives these muscles an incredibly aesthetic
                  look.
                </Typography>
                <Typography variant="p">
                  In order to develop the lower part of these muscles, you
                  should perform your back exercises with a lot of weight -
                  Close Grip Barbell Pulls and Close Grip Pull Ups for example,
                  as well as One Arm Pulley Pull Ups and One Arm Dumbbell Rows
                  hand. In addition, it is important to perform stretching
                  exercises between sets so that you feel a complete stretch in
                  the lower part of the muscle.
                </Typography>
                <Typography variant="p">
                  A well-developed lower latissimus dorsi will also help you in
                  back poses, as they angle downward and form a sort of frame
                  that reveals a well-toned lower back.
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h4">Density in the middle back</Typography>
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
                The latissimus dorsi should not only be broad and curving, but
                should also appear thick and powerful where its individual parts
                meet in the middle of the back. Many bodybuilders have broad
                backs with arching lats, but they can't achieve the best
                possible look while performing backbends because their central
                back lacks that strong, solid look that a truly great
                bodybuilder has. must own. When you look at Dorian Yates for
                example, you are immediately struck by the solid thickness and
                density of his back muscles. Dorian's back shows solidity even
                when he sits relaxed.
              </Typography>
              <Typography variant="p">
                The density of the back is mainly achieved by performing Rowing
                exercises - Barbell Rows, Pulley Rows, T-bar Rows and so on.
                However, if you want to focus on the mid back, you should do
                rowing exercises that have a higher range of motion so that you
                can induce a full contraction of this part of the muscle -
                Pulley Rows with single ropes or wide grip, One Arm Rows or
                Wider Grip Barbell Rows.
              </Typography>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                gap: 1,
              }}
            >
              <Card position="relative">
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Flex Wheeler"
                  image="https://preview.redd.it/one-of-bodybuildings-most-sculpted-backs-flex-wheeler-v0-s3qiygw5t8y91.png?width=640&crop=smart&auto=webp&s=20be455c76e5c8593281319b918da445f20bb94b"
                ></CardMedia>
              </Card>
              <Typography variant="p">
                The flex wheeler has the advantage due to an excellent genetic
                predisposition: the density and musculature of his back shows
                how hard he has trained to realize his potential.
              </Typography>
            </Stack>
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
            <Stack
              sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                gap: 2,
              }}
            >
              <Typography variant="h4">
                Lower back (waist area, lower back)
              </Typography>
              <Stack sx={{ width: "70%", border: "1px solid black" }}></Stack>
              <Typography variant="p">
                Many of the best bodybuilders have a perfect upper back, but
                have never been able to develop the waist area to the extent
                that they should. A truly perfect lumbar region should have two
                columns of muscle that stand off each part of the spine—a
                testament to years of practicing Heavy Deadlifts, Incline Rows,
                and other strength exercises. over poses. When you see Boyer
                Cowie on stage, you will notice the incredible curve of his
                broad back muscles, but when he stands next to someone like
                Danny Padilla, with his thick and powerful lower back, you can
                see that he is underdeveloped specifically in that area.
              </Typography>
              <Typography variant="p">
                A truly Herculean physique needs this development and density of
                the waist area. Look at Sergio Oliva, Franco Columbo, Dorian
                Yates or Nasser El Sonbati and you will see a magnificent
                development of the waist area.
              </Typography>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                gap: 1,
              }}
            >
              <Card position="relative">
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Dorian Yates"
                  image="https://fitnessvolt.com/wp-content/uploads/2021/03/dorian-yates-christmas-tree-back.jpg"
                ></CardMedia>
              </Card>
              <Typography variant="span">Dorian Yates</Typography>
            </Stack>
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
            <Typography variant="h4">Functions of the back muscles</Typography>
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
                The latissimus dorsi have two main functions as far as
                bodybuilding is concerned: they pull the shoulder back (a rowing
                motion), and they pull the shoulders down (a pull-up or curling
                motion). A common mistake in performing these movements is using
                too much effort from the biceps and not enough tension in the
                back, or not including the muscles of the lumbar region in the
                swinging movement, instead of letting the latissimus dorsi do
                the bulk of the work. You should make an effort when training
                the latissimus dorsi to isolate them so that only they
                participate in the movement.
              </Typography>
              <Typography variant="p">
                The muscles in the lower back function differently than other
                muscles in the body. They are stabilizers that keep the body
                stable rather than contracting and relaxing along an arc of
                motion like say the biceps. Therefore, when you perform full
                range of motion exercises such as Hyperextensions or Deadlifts
                with extended legs, you are putting such a strain on your low
                back that it may take you a week or so to fully recover. Tova
                oznachava, che trenirovkata na poyasnata oblast chrez usiliya,
                koito vklyuchvat tsyaloto tyalo, pri izpolzvaneto na
                uprazhneniya za sila s maksimalna tezhest, e neobkhodima samo po
                vednŭzh v sedmitsata. V ostanalite dni izpŭlnyavaĭte seriite si
                s nesilovi uprazhneniya i s po-malka ot maksimalnata tezhest.
                This means that training the lumbar region through efforts that
                involve the whole body, using maximum weight strength exercises,
                is only necessary once a week. On the other days, perform your
                sets with non-strength exercises and with less than maximum
                weight.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
};
