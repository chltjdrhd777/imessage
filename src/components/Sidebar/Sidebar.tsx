import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SidebarChat from "./SidebarChat";
import { selectUser } from "redux/mainReducer";
import { useSelector, useDispatch } from "react-redux";
import db from "../../firebase";
import PopUp from "./PopUp";
import { addUserToggleAction } from "redux/Slices/appSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [chats, setChats] = useState([] as any);

  useEffect(() => {
    db.collection("chats").onSnapshot((snap) =>
      setChats(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);
  console.log(chats);

  const addUserFunc = () => {
    dispatch(addUserToggleAction());
  };

  return (
    <SideBarDiv>
      <div className="sidebar_header">
        <Avatar className="sidebar_header_avatar" src={user.userInfo?.photo} />

        <div className="sidebar_header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>

        <IconButton className="sidebar_header_inputIcon" onClick={addUserFunc}>
          <KeyboardHideIcon />
        </IconButton>

        <PopUp />
      </div>
      {/* Sidebar_header_end */}

      <div className="sidbar_chats">
        {chats.map(({ id, data: { chatName } }: any) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </SideBarDiv>
  );
}

const SideBarDiv = styled.div`
  flex: 0.35;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-right: 1px solid lightgray;

  & .sidebar_header {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 50px;
    position: relative;

    & .sidebar_header_avatar {
      cursor: pointer;
      margin: 10px;
    }

    & .sidebar_header_search {
      display: flex;
      align-items: center;
      flex: 1;
      background-color: #e1e1e1;
      color: gray;
      border-radius: 5px;
      margin: 0 10px;
      height: 70%;

      & > svg {
        margin: 0 5px;
      }

      & > input {
        background: transparent;
        border: none;
        outline: none;
      }
    }
  }
  //? sidebar_headerCss_end

  & .sidbar_chats {
    overflow: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #555e70;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background: gray;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
  }
`;

export default Sidebar;
