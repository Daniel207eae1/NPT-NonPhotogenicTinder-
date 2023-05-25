import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQyvLtXYpRaR8TXjLlySbheiLlf2FsCG4",
  authDomain: "nonphotogenictinder-7d03b.firebaseapp.com",
  projectId: "nonphotogenictinder-7d03b",
  storageBucket: "nonphotogenictinder-7d03b.appspot.com",
  messagingSenderId: "711996948477",
  appId: "1:711996948477:web:76117b49a7afc0d1152394",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

auth.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
        //const uid = user.uid;
      } else {
        reject;
      }
    });
  });
};

export { auth, provider };
