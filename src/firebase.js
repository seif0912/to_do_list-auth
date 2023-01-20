
import  { initializeApp }  from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf8P3vZtPc6nDL7Bdt5tGeh6F7l6TltHA",
  authDomain: "to-do-list-b4f91.firebaseapp.com",
  projectId: "to-do-list-b4f91",
  storageBucket: "to-do-list-b4f91.appspot.com",
  messagingSenderId: "144241813626",
  appId: "1:144241813626:web:e90c3fa43eac5009a6f3c3",
  measurementId: "G-YN57X9Z58N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const firestore = getFirestore(firebaseConfig);
export const auth = getAuth(app)
export default app