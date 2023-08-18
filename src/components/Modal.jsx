import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalOverlay>
    </>,
    document.getElementById("modal")
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #6aa4eb;
  padding: 20px;
  border-radius: 10px;
`;
