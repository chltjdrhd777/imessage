import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKhg6W7wAPE5cS6yhB6elKc1p-WWfc3aQ",
  authDomain: "imessage-10b89.firebaseapp.com",
  databaseURL: "https://imessage-10b89.firebaseio.com",
  projectId: "imessage-10b89",
  storageBucket: "imessage-10b89.appspot.com",
  messagingSenderId: "807648873557",
  appId: "1:807648873557:web:efd61fa1a4a2a2d9d558dc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
export default db;
