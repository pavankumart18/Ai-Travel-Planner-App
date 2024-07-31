// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence ,initializeAuth } from "firebase/auth";
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore,collection } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_yppZOWbC3Rb9ClHSybiq7yyxTT5nhY8",
  authDomain: "fir-chat-48a7d.firebaseapp.com",
  projectId: "fir-chat-48a7d",
  storageBucket: "fir-chat-48a7d.appspot.com",
  messagingSenderId: "622042439081",
  appId: "1:622042439081:web:400a94261e063db4ac78b8",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{

    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

