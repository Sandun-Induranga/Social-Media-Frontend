import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Group, Notifications, Widgets } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar sx={{ position: "sticky" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Widgets sx={{ mr: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            SANDU
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Badge badgeContent={4} color="error">
            <Group sx={{ color: "white" }} />
          </Badge>
          <Badge badgeContent={1} color="error">
            <MailIcon sx={{ color: "white" }} />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications sx={{ color: "white" }} />
          </Badge>
          <Avatar sx={{ ml: 2 }} alt="User" src="/static/images/avatar/2.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
