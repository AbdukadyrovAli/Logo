import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../routes/AppRoutes";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      {/* <Toolbar /> */}
      <TypographyText variant="h5" component="div" sx={{color:'#7113be', fontWeight: "900", backgroundColor:'#e5e4de'}}>
        Logo
      </TypographyText>
      {/* <Divider /> */}

      <ListContaner>
        {[
          <NavLinkCont
            to="/courses"
            style={({ isActive }) => ({
              color: isActive ? "#505568" : "#2e8bd2",
              backgroundColor: isActive ? "#e2cff2" : "#FFF",
              width: "100%",
            })}
          >
            Courses
          </NavLinkCont>,
          <NavLinkCont
            to="/announcements"
            style={({ isActive }) => ({
              color: isActive ? "#505568" : "#2e8bd2",
              backgroundColor: isActive ? "#e2cff2" : "#FFF",
              width: "100%",
            })}
          >
            Anouncements
          </NavLinkCont>,
          <NavLinkCont
            to="/notification"
            style={({ isActive }) => ({
              color: isActive ? "#505568" : "#2e8bd2",
              backgroundColor: isActive ? "#e2cff2" : "#FFF",
              width: "100%",
            })}
          >
            Notification
          </NavLinkCont>,
          <NavLinkCont
            to="/schedule"
            style={({ isActive }) => ({
              color: isActive ? "#505568" : "#2e8bd2",
              backgroundColor: isActive ? "#e2cff2" : "#FFF",
              width: "100%",
            })}
          >
            Schedule
          </NavLinkCont>,
        ].map((link) => (
          <ListItem disablePadding >
            {link}
            {/* <ListItemButton></ListItemButton> */}
          </ListItem>
        ))}
      </ListContaner>
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor:'#e5e4de'
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          
        }}
      >
        <Toolbar  />
        <AppRoutes />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;

const TypographyText = styled(Typography)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "70px",
    fontSize: "30px",
  };
});



const ListContaner = styled(List)(() => {
  return {
    height: "300px",
    width: "250px",
    fontSize: "25px",
  };
});

const NavLinkCont = styled(NavLink)(() => {
  return {
    textDecoration: "none",
    fontWeight: "600",
  };
});
