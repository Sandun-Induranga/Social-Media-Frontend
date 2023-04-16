import { Box, Paper } from "@mui/material";
import Post from "../Post/Post";
import postImage from "../../assets/post-image.jpg";

const Feed = () => {
  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          minHeight: "100vh",
          py: 6,
          px: 20,
          overflow: "scroll",
          maxHeight: "100vh",
        }}
      >
        <Post
          name="Dasun Dasun"
          date="2023-04-16"
          time="06:50 PM"
          image=<img width={"100%"} src={postImage} alt="post" />
        />
        <Post
          name="John Cena"
          date="2023-04-15"
          time="02:37 PM"
          image=<img width={"100%"} src={postImage} alt="post" />
        />
        <Post
          name="Max Max"
          date="2023-04-15"
          time="07:30 AM"
          image=<img width={"100%"} src={postImage} alt="post" />
        />
      </Paper>
    </Box>
  );
};

export default Feed;
