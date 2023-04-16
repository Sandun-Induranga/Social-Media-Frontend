import Header from "../Header";
import Menu from "../Menu";
import Feed from "../Feed";
import { Box, Grid } from "@mui/material";
import Message from "../Message/Message";

const Content = () => {
  return (
    <>
      <Header />
      <Grid container sx={{ position: "fixed" }}>
        <Grid item xs={2}>
          <Box sx={{ position: "fixed" }}>
            <Menu />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Feed />
        </Grid>
        <Grid item xs={3}>
          <Message />
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
