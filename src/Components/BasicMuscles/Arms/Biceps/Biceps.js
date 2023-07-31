import { Card, CardMedia, Stack, Typography } from "@mui/material";

export const Biceps = () => {
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
        <Typography variant="h3">Biceps</Typography>
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
            Biceps muscle (biceps) - is a biceps muscle, whose starting point of
            attachment is located under the deltoid muscle, and its final
            attachment point is located under the elbow joint.
          </Typography>
          <Typography variant="p">
            PRIMARY FUNCTION: Raises the arm forward at the shoulder joint,
            flexes the elbow joint and supinates the forearm (turns the palm of
            the hand upwards as if holding a soup plate - note ex).
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
          <Typography variant="h4">Biceps training</Typography>
          <Stack sx={{ width: "70%", border: "1px solid black" }}></Stack>

          <Stack
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              gap: 3,
            }}
          >
            <Typography variant="p">
              Hard training and proper training techniques will unlock the full
              potential of any muscle, but not everyone has the same degree of
              potential. Some bodybuilders have longer biceps, some shorter,
              some with a higher peak, some with a lower one. Some develop
              tremendous density and some do not. You can train each of these
              aspects of your development by improving the condition of your
              weak spots through smart planning, but it will definitely benefit
              you first if you have a genetic predisposition to great shapes and
              proportions.
            </Typography>
            <Typography variant="p">
              In fact, there are many different shaped biceps that can still be
              considered top notch. Among the bodybuilders I've competed
              against, Larry Scott was the epitome of long biceps that were both
              thick and full at the same time. My own are among the examples of
              extremely high peaked biceps. Franco Columbus's biceps were tall
              but short. Sergio Oliva had long biceps, but not particularly high
              ones. Boyer Cowie had tall and long biceps, but narrow. Despite
              these different arm structures, each of these bodybuilders has won
              impressive titles. The same is true today - you will see
              bodybuilders with different proportions, different genetic
              endowments, but anyone can be a champion if he or she possesses a
              certain "package" - a balanced set of characteristics.
            </Typography>
            <Typography variant="p">
              The underlying bone structure and physical proportions have
              everything to do with how the hands will end up looking. Since
              Franco has short arms, it's not difficult for him to develop
              biceps that look proportionally massive. However, Lou Ferrigno,
              with his long arms, needed 55.5cm arms to be proportionate to his
              118kg body. If he had 50cm arms, even though they might be some of
              the biggest on stage, he would look proportionally underdeveloped.
            </Typography>
            <Typography variant="p">
              The length of the biceps is also important. Many people do Reverse
              Bicep Curls as a forearm exercise. but I have noticed that this
              exercise also increases the visible length of the biceps. The
              muscle should be stretched to the maximum, followed by a full and
              powerful contraction.
            </Typography>

            <Typography variant="p">
              Also, when I do Bicep Curls, I like to change my arm position as
              often as possible so that I stimulate the different areas of the
              biceps as fully as possible. Barbell biceps curls lock the arm,
              Dumbbell biceps curls allow you to rotate (supinate - note ex) the
              arm, Reverse biceps curls bring the arm up in a palm-down
              position, and thumbs-up dumbbell curls (Hammer curls) affect
              brachii muscle directly, and are necessary for the full
              development of the biceps. I also vary my biceps training by using
              different types of equipment Explosive Handstand, Barbell, E-Z
              Barbell, Scott Bench, Vertical Bench, Dumbbells, Pulleys and
              machines. Once again, I want to emphasize that the main mistake I
              see in training the biceps is the lack of full range of motion.
              There is probably no other body part for which full range of
              motion training is so important. You'll limit your range of motion
              if you do things like lift your elbows up or keep them too far
              back, so you won't get a large enough range of motion.
            </Typography>

            <Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Card position="relative">
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Arnold"
                  image="https://i.pinimg.com/originals/99/d7/54/99d754c2b7adb6f9a39f296115adf27e.jpg"
                ></CardMedia>
              </Card>
              <Typography variant="p">
                Bicep density is important, but bicep height is an often
                overlooked quality. I've always trained hard to develop "peaks",
                and I think I've won a lot of competitions thanks to my high
                biceps.
              </Typography>
            </Stack>

            <Typography variant="p">
              Some bodybuilders don't want to go all the way down and get full
              elbow extension because they can't lift as much weight that way.
              However, they forget that it is this lower part of the movement
              that creates the true density in the lower part of the biceps and
              makes the muscles appear as if they are coming directly from the
              forearm - an important appearance that you need when performing
              poses with extended arms. This part of the muscle also contracts
              and helps create a larger peak when you bend the arm.
            </Typography>

            <Typography variant="p">
              You can see bodybuilders lock out their arms when doing bicep
              curls, but then they fail the exercise by not doing a strict curl
              from the start. Instead, they lift the weight up using part of
              their shoulders and back so that the first few inches of the
              movement are wasted because the biceps just aren't engaged.
            </Typography>

            <Typography variant="p">
              Another mistake is to lift the weight up, then forget to
              isometrically tense the muscle so that you get a fuller
              contraction. When the weight is up to your chin, the bones and
              joints take most of the load. To keep a muscle working, you have
              to really stretch it hard or it will stay soft because you're not
              keeping it loaded. You'll never get full, strong, tight biceps to
              impress the judges with if you're lazy at the top of the Biceps
              Curl movement.
            </Typography>

            <Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Card position="relative">
                <CardMedia
                  position="absolute"
                  component="img"
                  alt="Robby Robinson"
                  image="https://anabol.bg/image/data/BLOG/blog2/new/robby-robinson.jpg"
                ></CardMedia>
              </Card>
              <Typography variant="p">
                Robbie Robinson's arms are some of the best examples of sculpted
                and separated biceps. In this photo, Robbie looks like an
                anatomical atlas.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
