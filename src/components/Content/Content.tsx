import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import Feed from "../Feed";
import { Box, Grid } from "@mui/material";

const Content = () => {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <Box sx={{ position: "fixed" }}>
            <Menu />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Feed />
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
