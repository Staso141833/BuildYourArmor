import { Button, Stack } from "@mui/material";

import { FingerprintRounded, FingerprintSharp, FingerprintTwoTone } from "@mui/icons-material";
import { colors } from "../../metaData/colors.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { useState } from "react";

export const Like = ({
  commentId,
  likesCount,
  onLikeCommentSubmit,
  publicationId,
  onClickLikeCommentSubmit,
}) => {
  const { userId, userEmail } = useAuthContext();

  const [like, setLike] = useState();
  const [isLiked, setIsLiked] = useState(false);

  const onLikeClick = () => {
    onClickLikeCommentSubmit(commentId, likesCount);
  };

  return (
    <Stack>
      <Button
        onClick={onLikeClick}
        variant="contained"
        startIcon={<FingerprintSharp/>}
        sx={{ width: "74px", textTransform: "lowercase", backgroundColor: colors.gold }}
        style={{
          cursor: "pointer",
          color: likesCount?.includes(userId) ? colors.black : colors.white,
        }}
      >
        {likesCount?.length}Likes
      </Button>
    </Stack>
  );
};

{
  /* <Stack>
<FormGroup>
  <FormControl>
    <TextField
      label="kgs"
      type="number"
      variant="outlined"
      name="likes"
      placeholder="Other explanation"
      value={values.likes}
      onChange={changeHandler}
      sx={{ width: "100%" }}
    />

    <Button sx={{ backgroundColor: colors.gold }} onClick={onSubmit}>
      Like
    </Button>
  </FormControl>
</FormGroup>
</Stack> */
}
