import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_Dn9lOAH1AoskRj-v6wIsaCM_e76PSdQ",
  authDomain: "chat-ea642.firebaseapp.com",
  projectId: "chat-ea642",
  storageBucket: "chat-ea642.appspot.com",
  messagingSenderId: "114279838007",
  appId: "1:114279838007:web:ab1aa7804240b0e2b4aab2"
};


export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage= getStorage();
export const db= getFirestore();
