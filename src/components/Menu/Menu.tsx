import { Box, Paper, Skeleton, Stack } from "@mui/material";

const Menu = () => {
  return (
    <Box>
      <Paper elevation={1} sx={{ width: 1 / 5, minHeight: "100vh" }}>
        <Stack spacing={2}>
          <Skeleton variant="text" height={100} />
        </Stack>
      </Paper>
    </Box>
  );
};

export default Menu;
