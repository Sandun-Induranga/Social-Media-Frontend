import { MoreVert } from "@mui/icons-material";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

type PostProps = {
  name: string;
  date: string;
  time: string;
  image: React.ReactNode;
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
              <Grid item>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </Grid>

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
      </Paper>
    </Box>
  );
};

export default Post;
