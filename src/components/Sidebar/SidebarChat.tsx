import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setChat, setDefaultChat } from "redux/Slices/appSlice";
import { selectUser } from "../../redux/mainReducer";
import db from "../../firebase";

interface Props {
  id: string;
  chatName: string;
}

function SidebarChat({ id, chatName }: Props) {
  const [defaultState, setDefaultState] = useState([] as any);
  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .onSnapshot((snap) =>
        setDefaultState(snap.docs.map((doc) => ({ ...doc.data() })))
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(defaultState);
  const dispatch = useDispatch();

  return (
    <>
      {defaultState.length === 0 ? null : (
        <SidebarChatDiv
          onClick={() => {
            dispatch(
              setChat({
                chatId: id,
                chatName,
              })
            );
          }}
        >
          <Avatar
            src={defaultState.length === 0 ? "" : defaultState[0].photo}
          />
          <div className="sidebarChat_info">
            <h3>{chatName}</h3>
            <p>{defaultState.length === 0 ? "" : defaultState[0].message}</p>
            <small>
              {defaultState.length === 0
                ? ""
                : new Date(defaultState[0].timestamp.toDate()).toLocaleString()}
            </small>
          </div>
        </SidebarChatDiv>
      )}
    </>
  );
}

const SidebarChatDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #3e93fd;
    color: white;
  }

  & .sidebarChat_info {
    margin-left: 15px;
    position: relative;
    width: 100%;

    & > small {
      position: absolute;
      top: 5px;
      right: 0;
    }
  }
`;

export default SidebarChat;
