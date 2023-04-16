import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import game from "../../assets/game.jpg";
import game2 from "../../assets/game2.jpg";

const Message = () => {
  return (
    <Box sx={{ p: 6 }}>
      <Card elevation={1}>
        <Grid container sx={{ p: 2 }} gap={2}>
          <Grid item>
            <Typography variant="h6">Games</Typography>
          </Grid>
          <Grid item>
            <img src={game} alt="" width={"100%"} />{" "}
          </Grid>
          <Grid item>
            <img src={game2} alt="" width={"100%"} />
          </Grid>
          <Grid item>
            <Button>View More</Button>
          </Grid>
        </Grid>
      </Card>
      <Card elevation={1} sx={{ mt: 5 }}>
        <Grid container sx={{ p: 2 }} rowGap={2}>
          <Grid item>
            <Typography variant="h6">Friends</Typography>
          </Grid>
          <Grid container columnGap={1}>
            <Grid item>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </Grid>
            <Grid item>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </Grid>
            <Grid item>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </Grid>
            <Grid item>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </Grid>
            <Grid item>
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </Grid>
          </Grid>
          <Grid item>
            <Button>View More</Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Message;
