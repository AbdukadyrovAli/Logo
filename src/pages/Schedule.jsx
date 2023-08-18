import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Schedule = () => {
  const navigate = useNavigate();

  return (
    <div>
      Schedule
      <Button onClick={() => navigate("/notification")} variant="contained">
        Go to notification page
      </Button>
    </div>
  );
};
