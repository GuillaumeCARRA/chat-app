// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const {
    REACT_APP_API_FIREBASE,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESS_SENDER_ID,
    REACT_APP_APPLI_ID
} = process.env


  
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: REACT_APP_API_FIREBASE,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId:  REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESS_SENDER_ID,
    appId: REACT_APP_APPLI_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// Create the db
export const db = getFirestore();

// Create a root reference
export const storage = getStorage();


