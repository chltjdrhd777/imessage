import Imessage from "components/Imessage";
import Login from "components/Login";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./redux/mainReducer";
import { auth } from "./firebase";
import { login, logout } from "redux/Slices/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const user = useSelector(selectUser).userInfo;
  return <div className="App">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
