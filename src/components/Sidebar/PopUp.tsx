import React from "react";
import styled from "styled-components";

function PopUp() {
  return (
    <PopUpDiv>
      <form>
        <label htmlFor="sidbar_header_addUser">Add Channel</label>
        <input type="text" id="sidbar_header_addUser" />
      </form>
    </PopUpDiv>
  );
}

const PopUpDiv = styled.div`
  position: absolute;
  background: lightgray;
  top: 50px;
  right: 0px;
  padding: 20px;
  width: 300px;
`;

export default PopUp;
