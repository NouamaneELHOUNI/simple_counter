import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSwk7MckorqdLs4uqGky5cTRD1MQzrbWc",
    authDomain: "counter-c738e.firebaseapp.com",
    databaseURL: "https://counter-c738e-default-rtdb.firebaseio.com",
    projectId: "counter-c738e",
    storageBucket: "counter-c738e.appspot.com",
    messagingSenderId: "1018808548885",
    appId: "1:1018808548885:web:f9929961e20e6ec02b181c",
    measurementId: "G-CNGYLZTG0G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
