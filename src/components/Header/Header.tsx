import { AppBar, Badge, Box, Toolbar } from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MailIcon from "@mui/icons-material/Mail";

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Diversity3Icon />
        </Box>
        <Box>
          <Badge badgeContent={4} color="error">
            <MailIcon color="secondary" />
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
