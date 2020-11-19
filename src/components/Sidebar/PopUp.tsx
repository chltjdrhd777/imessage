import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectApp } from "../../redux/mainReducer";
import { addUserToggleAction, sideBarInput } from "redux/Slices/appSlice";
import db from "../../firebase";

function PopUp() {
  const app = useSelector(selectApp);
  const dispatch = useDispatch();
  if (!app.addUserToggle) {
    dispatch(sideBarInput(""));
  }

  const onSubmitFunc = (e: any) => {
    e.preventDefault();

    if (app.sideBarInput) {
      db.collection("chats").add({
        chatName: app.sideBarInput,
      });
    }

    dispatch(addUserToggleAction());
    dispatch(sideBarInput(""));
  };

  return (
    <PopUpDiv popup={app.addUserToggle}>
      <form onSubmit={onSubmitFunc}>
        <label htmlFor="sidbar_header_addUser">Add Channel</label>
        <input
          type="text"
          id="sidbar_header_addUser"
          value={app.sideBarInput}
          onChange={(e) => {
            dispatch(sideBarInput(e.target.value));
          }}
        />
        <button type="submit">confirm</button>
      </form>
    </PopUpDiv>
  );
}

interface PopupProps {
  popup?: boolean;
}

const PopUpDiv = styled.div<PopupProps>`
  position: absolute;
  background: lightgray;
  top: 60px;
  right: -100px;
  padding: 20px;
  width: 350px;
  border-radius: 30px;

  display: ${(prop) => (prop.popup ? "" : "none")};
  z-index: 100;
  opacity: 95%;

  & > form {
    display: flex;
    justify-content: space-between;
  }

  & > form > input {
    margin-left: 10px;
    border: none;
    outline: none;
    border-radius: 10px;
  }

  & > form > button {
    margin-left: 10px;
    border: none;
    border-radius: 10px;
    padding: 5px;
    outline: none;

    &:hover {
      transition: all 0.2s ease-in;
      background: #a8fd97;
      color: #ddadad;
    }
  }
`;

export default PopUp;
