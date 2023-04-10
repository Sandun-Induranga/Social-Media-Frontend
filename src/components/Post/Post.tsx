import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";

const Post = () => {
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid
            item
            sx={{
              width: 5 / 6,
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Grid item xs={12}>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              <Typography variant="caption">John Cena</Typography>
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
        </Grid>
      </Paper>
    </Box>
  );
};

export default Post;
