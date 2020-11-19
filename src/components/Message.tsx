import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/mainReducer";

interface Props {
  message?: any;
  photo?: string;
  timestamp?: any;
  uid?: string;
}

function Message({ message, timestamp, photo, uid }: Props) {
  const user = useSelector(selectUser).userInfo;

  return (
    <MessageDiv
      className={user?.uid === uid ? "message_sender" : "other_people"}
    >
      <Avatar src={photo} />
      <p>{message ? message : "there is no message"}</p>
      <small>{new Date(timestamp.toDate()).toLocaleString()}</small>
    </MessageDiv>
  );
}

const MessageDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  justify-content: space-between;
  margin: 15px;
  margin-bottom: 30px;

  & > p {
    background: #f3f3f5;
    font-size: medium;
    padding: 15px;
    margin: 10px;
    border-radius: 20px;
    margin-right: auto;
  }

  & > small {
    color: gray;
    position: absolute;
    font-size: 8px;
    bottom: -5px;
    right: -100px;
  }
`;

export default Message;
