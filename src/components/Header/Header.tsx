import { AppBar, Badge, Box, Toolbar } from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Diversity3Icon />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Badge badgeContent={1} color="error">
            <MailIcon sx={{ color: "white" }} />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications sx={{ color: "white" }} />
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
