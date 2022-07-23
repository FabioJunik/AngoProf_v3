import firebase from "firebase/app";
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCxfGctAT7_ah0OYIEE25z7pEz_x-1xo2E",
    authDomain: "angoprof.firebaseapp.com",
    projectId: "angoprof",
    storageBucket: "angoprof.appspot.com",
    messagingSenderId: "535090185600",
    appId: "1:535090185600:web:36979442d5929fc1b52d65"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const database = firebase.database();

export {database,firebase};