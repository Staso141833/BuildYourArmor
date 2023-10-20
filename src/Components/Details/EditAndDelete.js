import { Button, Stack } from "@mui/material";

export const EditAndDelete = ({}) => {
  return (
    <Stack>

      <Button
        color="success"
        variant="contained"
        sx={{ width: "auto", textTransform: "lowercase" }}
        style={{
          cursor: "pointer",
        }}
      >
        Edit
      </Button>
      <Button
        color="success"
        variant="contained"
        sx={{ width: "auto", textTransform: "lowercase" }}
        style={{
          cursor: "pointer",
        }}
      >
        Delete
      </Button>
    </Stack>
  );
};
