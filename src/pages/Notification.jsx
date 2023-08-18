import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Notification = () => {
  const navigate = useNavigate();
  return (
    <div>
      Notification
      <Button onClick={() => navigate("/courses")} variant='contained'>Go to COURSES page</Button>
    </div>
  );
};
