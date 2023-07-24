import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh1Ohfv8H7G7W5j8XknTbrTe6boZADvJc",
  authDomain: "crwn-clothing-db-46543.firebaseapp.com",
  projectId: "crwn-clothing-db-46543",
  storageBucket: "crwn-clothing-db-46543.appspot.com",
  messagingSenderId: "340971534741",
  appId: "1:340971534741:web:f56240604811e8f1671e9c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
