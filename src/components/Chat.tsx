import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (e: any) => {
    e.preventDefault();

    setInput("");
  };

  return (
    <ChatDiv>
      <div className="chat_header">
        <h4>
          To: <span className="channel_name">test channel</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* header end */}
      <div className="chat_messages">message</div>
      {/* messages end */}
      <div className="chat_input">
        <form>
          <input
            type="text"
            placeholder="imessage"
            value={input}
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
      & .channel_name {
        color: black;
      }
    }
  }
  //? Chat_header_css end
  & .chat_messages {
    flex: 1;
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
