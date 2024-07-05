import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6BuI1toKoDsu0HpxUB0uW4kmNIjTjDzc",
    authDomain: "newsmania-a80b1.firebaseapp.com",
    projectId: "newsmania-a80b1",
    storageBucket: "newsmania-a80b1.appspot.com",
    messagingSenderId: "929536790787",
    appId: "1:929536790787:web:3770fcc44882017abd5936",
    measurementId: "G-HKETJD4QMH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);