import { Button, styled, Typography } from "@mui/material";
import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { Modal } from "../components/Modal";
import { MATERIALS } from "../constant/halpers/helper";

export const Materials = () => {
  const [search, setSearch] = useSearchParams();

  const modalState = search.get("modal");

  const openModal = () => {
    setSearch({ modal: "addNewMaterial" });
  };

  const closeModal = () => {
    setSearch({});
  };
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          gap: "20px",
          width: "200px",
          flexDirection: "column",
        }}
      >
        <Button
          variant="contained"
          onClick={openModal}
          sx={{ marginTop: "20px", backgroundColor:'#e88338', borderRadius:'10px' }}
        >
          Add new material
        </Button>
        {MATERIALS.map((user) => (
          <div key={user.id} style={{ display: "flex", gap: "20px", alignItems:'center' }}>
            <h3>{user.name}</h3>
            <ButtonText to={`/courses/materials/${user.id}/materialsDeteils`}>
              Details
            </ButtonText>
          </div>
        ))}
      </Typography>

      {modalState && (
        <Modal onClose={closeModal}>
          <div>
            <h2>Add new material modal</h2>
            <p>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit. Blanditiis <br />
              quasi nobis labore aliquam fuga voluptates <br />
              nemo. Veritatis ducimus excepturi vitae.
            </p>
          </div>

          <Button onClick={closeModal}>Close modal</Button>
        </Modal>
      )}
      <Outlet />
    </>
  );
};
const ButtonText = styled(NavLink)(() => {
  return {
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#15ae9e",
    padding: "1px 20px",
    textDecoration: "none",
    height:'40px'
  };
});
