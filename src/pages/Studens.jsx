import { styled, Typography } from "@mui/material";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { STUDENS } from "../constant/halpers/helper";

export const Studens = () => {

  return (
    <>
      <Typography
        sx={{
          display: "flex",
          gap: "20px",
          width: "400px",
          flexDirection: "column",
        }}
      >
        {STUDENS.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <ButtonText to={`/courses/studens/${user.id}/studentDeteils`}>
              Details
            </ButtonText>
          </div>
        ))}
      </Typography>
      <Outlet />
    </>
  );
};
const ButtonText = styled(NavLink)(() => {
  return {
    borderRadius: "10px",

    backgroundColor: "#15ae9e",
    padding: "10px 20px",
    textDecoration: "none",
  };
});
