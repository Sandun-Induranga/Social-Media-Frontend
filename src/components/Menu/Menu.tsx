import {
  Diversity3,
  Home,
  Logout,
  Settings,
  SwitchAccount,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

const Menu = () => {
  return (
    <Box>
      <Paper elevation={0} sx={{ minHeight: "100vh" }}>
        <List>
          {/* Home */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {/* Account */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SwitchAccount />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
          {/* Friends */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Diversity3 />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          {/* Settings */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          {/* Logout */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Menu;
