import { Button, Stack } from "@mui/material";

import { FingerprintSharp } from "@mui/icons-material";
import { colors } from "../../metaData/colors.js";
import { useAuthContext } from "../../contexts/AuthContext.js";

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
        sx={{
          width: "74px",
          textTransform: "lowercase",
          backgroundColor: colors.gold,
        }}
        style={{
          cursor: "pointer",
          color: likesCount?.includes(userId) ? colors.white : colors.black,
        }}
      >
        {likesCount?.length}Likes
      </Button>
    </Stack>
  );
};
