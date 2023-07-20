import { Stack, Typography } from "@mui/material";

export const Triceps = () => {
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
        <Typography variant="h3">Triceps</Typography>
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
            Triceps axillary muscle (triceps) — a muscle with three heads, which
            has an opposite action to the biceps, and also begins under the
            deltoid muscle, and its final attachment point is under the elbow
            joint.
          </Typography>
          <Typography variant="p">
            Main function: In the shoulder joint, the triceps performs extension
            and adduction, and in the elbow joint - extension.
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
          <Typography variant="h4">Triceps training</Typography>
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
              The triceps represent a larger muscle mass than the biceps and
              therefore need to be trained at more angles. Likewise, both biceps
              and triceps should look good when viewed from any angle. Unlike
              them, however, the triceps should make your arm look big, massive
              and impressive, even when your arms are not tense. When someone
              says, “Wow! Look at the size of this one's arms!”, you can be sure
              that it's the triceps that create that effect.They are visible 90%
              of the time when you're on stage, whether you're standing relaxed
              or striking a pose.
            </Typography>
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
              pose when your hands are behind your head. ALTHOUGH it is possible
              to hide a weak bicep to some extent, such a tricep becomes
              apparent in almost any pose. When the judges look at you as you
              stand relaxed-
            </Typography>

          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};