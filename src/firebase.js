// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCBL2KscfG1YrTn2UlQtFa9w4dvHuRXQuo",

  authDomain: "first-cloud-messaging-945d8.firebaseapp.com",

  projectId: "first-cloud-messaging-945d8",

  storageBucket: "first-cloud-messaging-945d8.appspot.com",

  messagingSenderId: "1056742655812",

  appId: "1:1056742655812:web:b96f7860614e712adf3911",

  measurementId: "G-148EZ3Z95N"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

