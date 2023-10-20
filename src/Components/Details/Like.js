import { Button, Stack } from "@mui/material";

import { FingerprintRounded } from "@mui/icons-material";
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
  onLikeClick,
}) => {
  const { userId, userEmail } = useAuthContext();

  const [like, setLike] = useState();
  const [isLiked, setIsLiked] = useState(false);

  const onLikeCommentClick = () => {
    onLikeClick(commentId, likesCount);
  };

  return (
    <Stack>
      <Button
        onClick={onLikeCommentClick}
        variant="contained"
        startIcon={<FingerprintRounded />}
        sx={{ width: "74px", textTransform: "lowercase", backgroundColor: colors.gold }}
        style={{
          cursor: "pointer",
          color: likesCount?.includes(userId) ? "red" : "blue",
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
