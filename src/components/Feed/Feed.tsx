import { Avatar, Box, Paper } from "@mui/material";
import Post from "../Post/Post";
import postImage1 from "../../assets/post1.jpg";
import postImage2 from "../../assets/post2.jpg";
import postImage3 from "../../assets/post-image.jpg";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";

const Feed = () => {
  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          maxHeight: "100vh",
          py: 6,
          px: 30,
          overflow: "scroll",
        }}
      >
        <Post
          name="Dasun Dasun"
          date="2023-04-16"
          time="06:50 PM"
          image=<img width={"100%"} src={postImage2} alt="post" />
          avatar=<Avatar src={avatar1} alt="post" />
        />
        <Post
          name="John Cena"
          date="2023-04-15"
          time="02:37 PM"
          image=<img width={"100%"} src={postImage1} alt="post" />
          avatar=<Avatar src={avatar3} alt="post" />
        />
        <Post
          name="Max Max"
          date="2023-04-15"
          time="07:30 AM"
          image=<img width={"100%"} src={postImage3} alt="post" />
          avatar=<Avatar src={avatar2} alt="post" />
        />
      </Paper>
    </Box>
  );
};

export default Feed;
