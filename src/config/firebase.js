// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbpNmgcWvdo0rgDkMc_XYBKeMBVgAW2w4",
  authDomain: "e-comm-app-915fe.firebaseapp.com",
  projectId: "e-comm-app-915fe",
  storageBucket: "e-comm-app-915fe.appspot.com",
  messagingSenderId: "336763804397",
  appId: "1:336763804397:web:a98dd2ddf39e73adac0ae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const Fire = initializeApp(firebaseConfig);

export default Fire;

// export {auth}