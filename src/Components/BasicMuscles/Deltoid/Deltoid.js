import {
    Box,
    Typography,
    Paper,
    Stack,
    Card,
    CardMedia,
    Step,
  } from "@mui/material";
  
  export const DeltoidMuscle = () => {
    return (
      <>
        <Box sx={{ fontSize: "18px" }}>
          <Typography variant="h2" sx={{ margin: 4, letterSpacing: 4 }}>
            Deltoid Muscle
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 2,
              m: 2,
            }}
          >
            <Stack
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography variant="p" sx={{ width: "100%" }}>
                The deltoid muscle is the muscle forming the rounded contour of
                the human shoulder. It is also known as the 'common shoulder
                muscle', particularly in other animals such as the domestic cat.
                Anatomically, the deltoid muscle appears to be made up of three
                distinct sets of muscle fibers, namely the anterior or clavicular
                part (pars clavicularis) posterior or scapular part (pars
                scapularis) intermediate or acromial part (pars acromialis)
                However, electromyography suggests that it consists of at least
                seven groups that can be independently coordinated by the nervous
                system.[1] It was previously called the deltoideus (plural
                deltoidei) and the name is still used by some anatomists. It is
                called so because it is in the shape of the Greek capital letter
                delta (Δ). Deltoid is also further shortened in slang as "delt". A
                study of 30 shoulders revealed an average mass of 191.9 grams
                (6.77 oz) in humans, ranging from 84 grams (3.0 oz) to 366 grams
                (12.9 oz).[2]
              </Typography>
  
              <Stack>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  Function
                </Typography>
                <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>
                <Typography variant="p" sx={{ width: "100%" }}>
                  When all its fibers contract simultaneously, the deltoid is the
                  prime mover of arm abduction along the frontal plane. The arm
                  must be medially rotated for the deltoid to have maximum
                  effect.[11] This makes the deltoid an antagonist muscle of the
                  pectoralis major and latissimus dorsi during arm adduction. The
                  anterior fibers assist the pectoralis major to flex the
                  shoulder. The anterior deltoid also works in tandem with the
                  subscapularis, pecs and lats to internally (medially) rotate the
                  humerus. The intermediate fibers perform basic shoulder
                  abduction when the shoulder is internally rotated, and perform
                  shoulder transverse abduction when the shoulder is externally
                  rotated. They are not utilized significantly during strict
                  transverse extension (shoulder internally rotated) such as in
                  rowing movements, which use the posterior fibers. The posterior
                  fibers assist the latissimus dorsi to extend the shoulder. Other
                  transverse extensors, the infraspinatus and teres minor, also
                  work in tandem with the posterior deltoid as external (lateral)
                  rotators, antagonists to strong internal rotators like the pecs
                  and lats. An important function of the deltoid in humans is
                  preventing the dislocation of the humeral head when a person
                  carries heavy loads. The function of abduction also means that
                  it would help keep carried objects a safer distance away from
                  the thighs to avoid hitting them, as during a farmer's walk. It
                  also ensures a precise and rapid movement of the glenohumeral
                  joint needed for hand and arm manipulation.[2] The intermediate
                  fibers are in the most efficient position to perform this role,
                  though like basic abduction movements (such as lateral raise) it
                  is assisted by simultaneous co-contraction of anterior/posterior
                  fibers.[12] The deltoid is responsible for elevating the arm in
                  the scapular plane and its contraction in doing this also
                  elevates the humeral head. To stop this compressing against the
                  undersurface of the acromion the humeral head and injuring the
                  supraspinatus tendon, there is a simultaneous contraction of
                  some of the muscles of the rotator cuff: the infraspinatus and
                  subscapularis primarily perform this role. In spite of this
                  there may be still a 1–3 mm upward movement of the head of the
                  humerus during the first 30° to 60° of arm elevation.[2]
                </Typography>
              </Stack>
  
              <Stack>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  Clinical significance
                </Typography>
                <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>
                <Typography variant="p" sx={{ width: "100%" }}>
                  The most common abnormalities affecting the deltoid are tears,
                  fatty atrophy, and enthesopathy. Deltoid muscle tears are
                  unusual and frequently related to traumatic shoulder dislocation
                  or massive rotator cuff tears. Muscle atrophy may result from
                  various causes, including aging, disuse, denervation, muscular
                  dystrophy, cachexia and iatrogenic injury. Deltoideal humeral
                  enthesopathy is an exceedingly rare condition related to
                  mechanical stress. Conversely, deltoideal acromial enthesopathy
                  is likely a hallmark of seronegative spondylarthropathies and
                  its detection should probably be followed by pertinent clinical
                  and serological investigation.[13]
                </Typography>
              </Stack>
  
              <Stack>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  Function
                </Typography>
                <Stack sx={{ width: "100%", border: "1px solid black" }}></Stack>
                <Typography variant="p" sx={{ width: "100%" }}>
                  Contraction of the trapezius muscle can have two effects:
                  movement of the scapulae when the spinal origins are stable, and
                  movement of the spine when the scapulae are stable. Its main
                  function is to stabilize and move the scapula.
                </Typography>
              </Stack>
            </Stack>
  
            <Card position="relative" sx={{ width: "25%" }}>
              <CardMedia
                position="absolute"
                component="img"
                alt="Deltoid muscle"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Deltoideus.png/250px-Deltoideus.png"
              ></CardMedia>
              <CardMedia
                position="absolute"
                component="img"
                alt="Trapezius musscle"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/1119_Muscles_that_Move_the_Humerus_b.png/1024px-1119_Muscles_that_Move_the_Humerus_b.png"
              ></CardMedia>
            </Card>
          </Stack>
  
          <Stack></Stack>
        </Box>
      </>
    );
  };