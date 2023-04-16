import { Box, Button, Card, Typography } from "@mui/material";
import game from "../../assets/game.jpg";
import game2 from "../../assets/game2.jpg";

const Message = () => {
  return (
    <Box sx={{ p: 6 }}>
      <Card elevation={1}>
        <Typography variant="h6">Games</Typography>
        <img src={game} alt="" width={"100%"} />
        <img src={game2} alt="" width={"100%"} />
        <Button>View More</Button>
      </Card>
    </Box>
  );
};

export default Message;
