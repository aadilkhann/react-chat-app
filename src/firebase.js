import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsPhbmMLT3QIF8ZEYK77Zb1KZwnB7zSRo",
  authDomain: "chatapp-ff32e.firebaseapp.com",
  projectId: "chatapp-ff32e",
  storageBucket: "chatapp-ff32e.appspot.com",
  messagingSenderId: "291783878607",
  appId: "1:291783878607:web:279c4baabbc8b8503514ba"
};


export const app = initializeApp(firebaseConfig);
// export const auth= getAuth();
