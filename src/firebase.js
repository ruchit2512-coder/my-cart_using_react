import firebase from "firebase/compat/app";

import "firebase/compat/firestore";



const firebaseConfig = {

    apiKey: "AIzaSyDTLTLaR0Buygk5wR8Ndr0T4922qeTZL_c",
    authDomain: "ruchit-cart-app.firebaseapp.com",
    projectId: "ruchit-cart-app",
    storageBucket: "ruchit-cart-app.appspot.com",
    messagingSenderId: "61609128018",
    appId: "1:61609128018:web:8f22cac108f92c9c436f8b"

};



// Initialize Firebase

firebase.initializeApp(firebaseConfig);



export const firestore = firebase.firestore();
