import {
  Diversity3,
  Home,
  Logout,
  Settings,
  SwitchAccount,
  PrivacyTip,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ads from "../../assets/ads.jpg";

const Menu = () => {
  return (
    <Box>
      <Paper elevation={0} sx={{ minHeight: "100vh" }}>
        <Typography variant="h5" sx={{ p: 2 }}>
          Menu
        </Typography>
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
          {/* Friends */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PrivacyTip />
              </ListItemIcon>
              <ListItemText primary="Privacy" />
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
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Ads
          </Typography>
          <img src={ads} alt="" width={280} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Menu;
