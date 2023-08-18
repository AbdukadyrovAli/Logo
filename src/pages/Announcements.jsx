import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Announcements = () => {
    const navigate = useNavigate();

  return (
    <div>
      Announcements
      <Button onClick={() => navigate("/courses/studens")} variant="contained">
        Go to studens page
      </Button>
    </div>
  );
};
