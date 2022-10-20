// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
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

// Create a root reference
export const storage = getStorage();


// Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, 'mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name;           // true
// mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 