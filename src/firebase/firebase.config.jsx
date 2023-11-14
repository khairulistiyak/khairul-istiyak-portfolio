// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.piKey);
const firebaseConfig = {
  piKey: "AIzaSyAR0kKnRztsLxvhDTSASVt9MGtD1dzzCp0",
  uthDomain: "khairulistiyak-4d14f.firebaseapp.com",
  rojectId: "khairulistiyak-4d14f",
  torageBucket: "khairulistiyak-4d14f.appspot.com",
  essagingSenderId: "419313468475",
  ppId: "1:419313468475:web:fd7d82eb27c88bb4ab881e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
