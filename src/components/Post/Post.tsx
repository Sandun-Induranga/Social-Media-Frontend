import {
  FavoriteBorder,
  MoreVert,
  ChatBubbleOutline,
  Share,
  TurnedInNot,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

type PostProps = {
  name: string;
  date: string;
  time: string;
  image: React.ReactNode;
  avatar: React.ReactNode;
};

type PostState = {};

const Post = (props: PostProps) => {
  return (
    <Box>
      <Paper sx={{ p: 2, mb: 4 }}>
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}
        >
          <Grid
            item
            sx={{
              width: 4 / 6,
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Grid container sx={{ alignItems: "center", gap: 1 }}>
              <Grid item>{props.avatar}</Grid>

              <Grid item>
                <Typography variant="h6">{props.name}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item xs={12}>
              <Typography variant="caption">{props.date}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">{props.time}</Typography>
            </Grid>
          </Grid>
          <MoreVert />
        </Grid>
        {props.image}
        <IconButton aria-label="add to favorites">
          <FavoriteBorder />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ChatBubbleOutline />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Share />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <TurnedInNot />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Post;
