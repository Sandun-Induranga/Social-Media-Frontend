import { Box, Paper } from "@mui/material";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <Box>
      <Paper elevation={1} sx={{ minHeight: "100vh", py: 6, px: 20 }}>
        <Post />
        <Post />
        <Post />
      </Paper>
    </Box>
  );
};

export default Feed;
