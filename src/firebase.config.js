import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA6xMkd23y5URMurfdsufkv11pS02JUXI",
  authDomain: "facebook-auth-aman.firebaseapp.com",
  projectId: "facebook-auth-aman",
  storageBucket: "facebook-auth-aman.appspot.com",
  messagingSenderId: "768949772652",
  appId: "1:768949772652:web:b191f40d36ce916fe91349",
  measurementId: "G-0ZCD582XWV",
};

const analytics = firebase.analytics();

//Initialize firebase app
firebase.initializeApp(firebaseConfig);
