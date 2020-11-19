import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Message from "./Message";
import { selectApp, selectUser } from "../redux/mainReducer";
import { useSelector } from "react-redux";
import db from "../firebase";
import firebase from "firebase";

interface Messages {
  id: string;
  message: string;
  timestamp: string;
  uid: string;
  email: string;
  displayName: string;
  photo: string;
}

function Chat() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatInfo = useSelector(selectApp).chatInfo;
  const [messages, setMessages] = useState([] as Messages[]);

  useEffect(() => {
    if (chatInfo.chatId) {
      db.collection("chats")
        .doc(chatInfo.chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snap) =>
          setMessages(
            snap.docs.map((doc): any => ({ id: doc.id, ...doc.data() }))
          )
        );
    }
  }, [chatInfo]);

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (chatInfo.chatId) {
      db.collection("chats").doc(chatInfo.chatId).collection("messages").add({
        timestamp: new Date(),
        message: input,
        uid: user.userInfo?.uid,
        photo: user.userInfo?.photo,
        email: user.userInfo?.email,
        displayName: user.userInfo?.displayName,
      });
    }

    setInput("");
  };

  return (
    <ChatDiv>
      <div className="chat_header">
        <h4>
          To: <span className="chat_name">{chatInfo.chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* header end */}
      <div className="chat_messages">
        {messages.map(({ id, message, timestamp, uid, photo }: Messages) => (
          <Message
            key={id}
            message={message}
            timestamp={timestamp}
            photo={photo}
            uid={uid}
          />
        ))}
      </div>
      {/* messages end */}
      <div className="chat_input">
        <form>
          <input
            type="text"
            placeholder="imessage"
            value={input}
            disabled={!chatInfo.chatId}
            onChange={(e: any) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={sendMessage}>Send message</button>
        </form>

        <IconButton>
          <MicNoneIcon className="input_MicIcon" />
        </IconButton>
      </div>
    </ChatDiv>
  );
}

const ChatDiv = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;

  & .chat_header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    background-color: #f5f5f5;

    & > h4 {
      font-weight: 500;
      color: gray;
      & .chat_name {
        color: black;
      }
    }
  }
  //? Chat_header_css end
  & .chat_messages {
    flex: 1;

    & > .message_sender {
      margin-left: auto;
      & > p {
        background-color: lightblue;
        color: darkblue;
      }
      & > small {
        right: 10px;
        top: 60px;
      }
    }
  }

  //? Chat_messages css end
  & .chat_input {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-top: 1px solid lightgray;
    background-color: #f5f5f5;

    & > form {
      flex: 1;
      & > input {
        width: 98%;
        outline: none;
        border: 1px solid lightgray;
        border-radius: 100px;
        padding: 5px;

        ::-webkit-input-placeholder {
          color: gray;
        }
      }

      & > button {
        display: none;
      }
    }
  }
`;
export default Chat;
