import { Box, Paper } from "@mui/material";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <Box>
      <Paper elevation={1} sx={{ minHeight: "100vh", py: 6, px: 20 }}>
        <Post name="Dasun Dasun" date="2023-04-16" time="06:50 PM" />
        <Post name="John Cena" date="2023-04-15" time="02:37 PM" />
        <Post name="Max Max" date="2023-04-15" time="07:30 AM" />
      </Paper>
    </Box>
  );
};

export default Feed;
