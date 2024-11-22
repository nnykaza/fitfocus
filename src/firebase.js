// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtxior7EMY-jlh6-LcKU69ldvs-lU8tv0",
  authDomain: "fitfocus-f6340.firebaseapp.com",
  projectId: "fitfocus-f6340",
  storageBucket: "fitfocus-f6340.firebasestorage.app",
  messagingSenderId: "785649671741",
  appId: "1:785649671741:web:29f1f05430d19dd2c3d454"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
