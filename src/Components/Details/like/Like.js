import { Button, Stack } from "@mui/material";

import { FingerprintSharp } from "@mui/icons-material";
import { colors } from "../../../metaData/colors.js";
import { useAuthContext } from "../../../contexts/AuthContext.js";
import { likeButtonStyles } from "./like.styles.js";

export const Like = ({ commentId, likesCount, onClickCommentLike }) => {
  const { userId } = useAuthContext();

  const onLikeClick = () => {
    onClickCommentLike(commentId, likesCount);
  };

  return (
    <Stack>
      <Button
        onClick={onLikeClick}
        variant="contained"
        startIcon={<FingerprintSharp />}
        sx={likeButtonStyles}
        style={{
          cursor: "pointer",
          color: likesCount?.includes(userId) ? colors["dark-silver"] : colors.black,
        }}
      >
        {likesCount?.length}Likes
      </Button>
    </Stack>
  );
};
