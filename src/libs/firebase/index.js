// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAr8wQWtPnPFb1FUSLZB0xsrhGB6macSpg",

  authDomain: "store-front-a5e2e.firebaseapp.com",

  databaseURL: "https://store-front-a5e2e-default-rtdb.firebaseio.com",

  projectId: "store-front-a5e2e",

  storageBucket: "store-front-a5e2e.appspot.com",

  messagingSenderId: "986885668446",

  appId: "1:986885668446:web:76f3e3e313f58a33c93ecf",

  measurementId: "G-Q5XP28ZLS8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)

export {auth, db}