import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGncpBp24WXjqEPH5Go63_I7992BYtWu8",
  authDomain: "abuzar-portfolio.firebaseapp.com",
  projectId: "abuzar-portfolio",
  storageBucket: "abuzar-portfolio.appspot.com",
  messagingSenderId: "693300927442",
  appId: "1:693300927442:web:8686e3155535841b0dc60b"
};

 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore();