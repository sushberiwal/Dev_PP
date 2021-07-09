import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyDoXBSqEiv49GvRVN8ujHp1D6J-aZeWugE",
    authDomain: "react-login-5c44c.firebaseapp.com",
    projectId: "react-login-5c44c",
    storageBucket: "react-login-5c44c.appspot.com",
    messagingSenderId: "1003948189105",
    appId: "1:1003948189105:web:2ebc3fa622ee41342a4990"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig);
export let firebaseAuth = firebaseApp.auth();
export let firebaseStorage = firebaseApp.storage();
export let firebaseDB = firebaseApp.firestore();