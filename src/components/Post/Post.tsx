import { MoreVert } from "@mui/icons-material";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import postImage from "../../assets/post-image.jpg";

const Post = () => {
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
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
              <Grid item>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </Grid>

              <Grid item>
                <Typography variant="caption">John Cena</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item xs={12}>
              <Typography variant="caption">2023-04-10</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">8.30 PM</Typography>
            </Grid>
          </Grid>
          <MoreVert />
        </Grid>
        <img width={"100%"} src={postImage} alt="post" />
      </Paper>
    </Box>
  );
};

export default Post;
