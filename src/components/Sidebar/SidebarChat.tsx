import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";

interface Props {
  id: string;
  chatName: string;
}

function SidebarChat({ id, chatName }: Props) {
  return (
    <SidebarChatDiv>
      <Avatar />
      <div className="sidebarChat_info">
        <h3>{chatName}</h3>
        <p>whats up</p>
        <small>timestamp</small>
      </div>
    </SidebarChatDiv>
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
