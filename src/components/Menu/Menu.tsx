import { Home, Logout, Settings, SwitchAccount } from "@mui/icons-material";
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
      <Paper elevation={1} sx={{ width: 1 / 5, minHeight: "100vh" }}>
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
          {/* Profile */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          {/* Profile */}
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
