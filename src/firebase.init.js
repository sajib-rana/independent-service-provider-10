// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE_mGJuNAK5UlZhVeFBRzxwURkInA3trU",
  authDomain: "independent-service-prov-a6421.firebaseapp.com",
  projectId: "independent-service-prov-a6421",
  storageBucket: "independent-service-prov-a6421.appspot.com",
  messagingSenderId: "755166159336",
  appId: "1:755166159336:web:e299cf03ee3e978a38445d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
