import React from "react";
import styled from "styled-components";
import Chat from "./Chat";
import Sidebar from "./Sidebar/Sidebar";

function Imessage() {
  return (
    <ImessageDiv>
      <Sidebar />
      <Chat />
    </ImessageDiv>
  );
}
const ImessageDiv = styled.div`
  display: flex;
`;

export default Imessage;
