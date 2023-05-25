// Import the functions you need from the SDKs you need
const firebase = require('firebase');
require('firebase/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQyvLtXYpRaR8TXjLlySbheiLlf2FsCG4",
  authDomain: "nonphotogenictinder-7d03b.firebaseapp.com",
  projectId: "nonphotogenictinder-7d03b",
  storageBucket: "nonphotogenictinder-7d03b.appspot.com",
  messagingSenderId: "711996948477",
  appId: "1:711996948477:web:76117b49a7afc0d1152394"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = db;