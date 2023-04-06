import { AppBar, Box, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>box</Box>
        <Box>box</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
