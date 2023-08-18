import React from "react";
import { Route, Routes } from "react-router-dom";
import { MATERIALS, STUDENS } from "../constant/halpers/helper";
import { Announcements } from "../pages/Announcements";
import { Courses } from "../pages/Courses";
import { Late } from "../pages/Late";
import { MaterialDeteils } from "../pages/MaterialDeteils";
import { Materials } from "../pages/Materials";
import { Notification } from "../pages/Notification";
import { Rating } from "../pages/Rating";
import { Schedule } from "../pages/Schedule";
import { Studens } from "../pages/Studens";
import { StudentDeteils } from "../pages/StudentDeteils";
import { Submitted } from "../pages/Submitted";
import { Waiting } from "../pages/Waiting";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/courses/*" element={<Courses />}>
        <Route path="materials/*" element={<Materials />} />
        <Route
          path="materials/:id/materialsDeteils/*"
          element={<MaterialDeteils materials={MATERIALS} />}
        >
          <Route path=":id/submited" element={<Submitted />} />
          <Route path=":id/waiting" element={<Waiting />} />
          <Route path=":id/late" element={<Late />} />
        </Route>

        <Route path="studens/*" element={<Studens />} />
        <Route path="rating" element={<Rating />} />
        <Route
          path="studens/:id/studentDeteils"
          element={<StudentDeteils studens={STUDENS} />}
        />
      </Route>
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
};
