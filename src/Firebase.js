// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqNANbDMFmgiajhxD7tfthIEIVAquGI_4",
    authDomain: "fir-22eb6.firebaseapp.com",
    projectId: "fir-22eb6",
    storageBucket: "fir-22eb6.appspot.com",
    messagingSenderId: "215172780985",
    appId: "1:215172780985:web:0698e392f32a75ca031c68",
    measurementId: "G-6YMRR19DH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const login = async() => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    const userDetails = result.user;
    return [userDetails.displayName];
}