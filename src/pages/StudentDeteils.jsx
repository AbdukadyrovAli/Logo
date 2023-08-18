import React from "react";
import { Outlet, useParams } from "react-router-dom";

export const StudentDeteils = ({ studens = [] }) => {
  const params = useParams();

  const findedStudent = studens.find((el) => el.id === +params.id);
  console.log(findedStudent);

  return (
    <>
      <h1>{findedStudent.name}</h1>

      <div style={{ position: "absolute" }}>StudentDeteils</div>
      <Outlet />
    </>
  );
};
