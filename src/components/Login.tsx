import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, googleProvider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(googleProvider).catch((err) => alert(err.message));
  };

  return (
    <LoginDiv>
      <div className="login_logo">
        <img
          src="https://w.namu.la/s/9370fcd0df959daa1c102b74a9d4ecebc438f13ffdb29ddb15c2f6fe64cdf259721aee997f1cb82ba441ebd0abbaa3d5703b2c755d8d11b4627425168fb241d53f2281fa3c878d8f915d0fe2139bf8e575163d8b071f650f8b20784cccddb4a2"
          alt="logo"
        />
        <h1>iMessage</h1>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </LoginDiv>
  );
}

const LoginDiv = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  place-items: center;
  height: 100vh;
  width: 100%;

  & .login_logo {
    & > img {
      height: 150px;
      object-fit: contain;
    }
  }

  & > button {
    width: 300px;
    background-color: #4edf5a;
    color: #eff2f5;

    &:hover {
      background-color: brown;
      color: #3ea4fb;
    }
  }
`;

export default Login;
