import { List, ListItem, ListItemButton, styled } from "@mui/material";
import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

export const MaterialDeteils = ({ materials = [] }) => {
  const { id } = useParams();

  const findedStudent = materials.find((el) => el.id === +id);
  console.log(findedStudent);

  return (
    <>
      <h1>{findedStudent.name}</h1>

      <div style={{ position: "absolute" }}>MaterialDeteils</div>

      <ListCon>
        {[
          <NavLink
            to={`${id}/submited`}
            style={({ isActive }) => ({
              borderBottom: isActive ? "5px solid orange" : "0",
              color: isActive ? "#283940" : "#FFF",
            })}
          >
            Sabmitted
          </NavLink>,
          <NavLink
            to={`${id}/waiting`}
            style={({ isActive }) => ({
              borderBottom: isActive ? "5px solid orange" : "0",
              color: isActive ? "#283940" : "#FFF",
            })}
          >
            Waiting
          </NavLink>,
          <NavLink
            to={`${id}/late`}
            style={({ isActive }) => ({
              borderBottom: isActive ? "5px solid orange" : "0",
              color: isActive ? "#283940" : "#FFF",
            })}
          >
            Late
          </NavLink>,
        ].map((link) => (
          <ListItem disablePadding>
            <ListItemButton>{link}</ListItemButton>
          </ListItem>
        ))}
      </ListCon>
      <Outlet />
    </>
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
    backgroundColor: "#15ae9e",
    "& a": { textDecoration: "none" },
  };
});
