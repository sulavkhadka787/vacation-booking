import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDZWkovyeNr2Aib9daK2PRYYg_iQpq1xlw",
    authDomain: "vacation-4e49f.firebaseapp.com",
    projectId: "vacation-4e49f",
    storageBucket: "vacation-4e49f.appspot.com",
    messagingSenderId: "994159772231",
    appId: "1:994159772231:web:5f46a1242387dfbb78a762"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export
  export const auth=firebase.auth();
  export const googleAuthProvider=new firebase.auth.GoogleAuthProvider();