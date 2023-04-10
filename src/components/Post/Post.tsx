import { BorderColor } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Post = () => {
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Grid>
          <Typography variant="h6">John Cena</Typography>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Post;
