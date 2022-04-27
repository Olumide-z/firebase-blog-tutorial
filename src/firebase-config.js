// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAZh0YGP75U1jhvz2Js8bsRb8y_j9Aiok4",
  authDomain: "blog-project-e0019.firebaseapp.com",
  projectId: "blog-project-e0019",
  storageBucket: "blog-project-e0019.appspot.com",
  messagingSenderId: "491157586127",
  appId: "1:491157586127:web:fb31225d23460171f077ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();