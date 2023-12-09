import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBy4eSM2ATrB_tDxenkDPQyk-xFmM4WoLE",
    authDomain: "modul-9-1a88f.firebaseapp.com",
    databaseURL: "https://modul-9-1a88f-default-rtdb.firebaseio.com",
    projectId: "modul-9-1a88f",
    storageBucket: "modul-9-1a88f.appspot.com",
    messagingSenderId: "1037534428667",
    appId: "1:1037534428667:web:f6f1c188a16ef2938adf5e"
});

const FIREBASE = firebase;

export default FIREBASE;