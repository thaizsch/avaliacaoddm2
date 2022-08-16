// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlYtJzdQYxDlcJLTAZrepZjTQJhLf4kFY",
  authDomain: "thaisscnheiderheppavaliacao2.firebaseapp.com",
  projectId: "thaisscnheiderheppavaliacao2",
  storageBucket: "thaisscnheiderheppavaliacao2.appspot.com",
  messagingSenderId: "1079068775111",
  appId: "1:1079068775111:web:79128a13b20ffa01f364e2"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };