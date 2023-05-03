// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlq2Zj51QMFlvIIrvoseH-8_vtAsGDcJw",
  authDomain: "chef-recipe-hunter-60072.firebaseapp.com",
  projectId: "chef-recipe-hunter-60072",
  storageBucket: "chef-recipe-hunter-60072.appspot.com",
  messagingSenderId: "146672195593",
  appId: "1:146672195593:web:9052b6b1ffc5f63dd7c0d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app