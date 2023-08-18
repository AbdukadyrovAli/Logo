import {
  AppBar,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { styled } from "@mui/material";

const drawerWidth = 240;

export const Courses = () => {
  //   const params = useParams();
  //   const productId = params.materials;
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <ListCon>
          {[
            <NavLinkCon
              to="/courses/materials"
              style={({ isActive }) => ({
                borderBottom: isActive ? "5px solid orange" : "0",
                color: isActive ? "#283940" : "#FFF",
              })}
            >
              Materials
            </NavLinkCon>,
            <NavLinkCon
              to="/courses/studens"
              style={({ isActive }) => ({
                borderBottom: isActive ? "5px solid orange" : "0",
                color: isActive ? "#283940" : "#FFF",
              })}
            >
              Studens
            </NavLinkCon>,
            <NavLinkCon
              to="/courses/rating"
              style={({ isActive }) => ({
                borderBottom: isActive ? "5px solid orange" : "0",
                color: isActive ? "#283940" : "#FFF",
              })}
            >
              Rating
            </NavLinkCon>,
          ].map((link) => (
            <ListItem disablePadding>
              <ListItemButton>{link}</ListItemButton>
            </ListItem>
          ))}
        </ListCon>
      </AppBar>
      <Outlet />
    </div>
  );
};

const ListCon = styled(List)(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "70px",
    width: "500px",
    fontSize: "25px",
  };
});
const NavLinkCon = styled(NavLink)(() => {
  return {
    textDecoration: "none",
    fontWeight: "900",
  };
});
