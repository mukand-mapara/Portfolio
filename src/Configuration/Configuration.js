import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_DJMXGiQoTnqYNgEQBVK91S0Y1hVVvS4",
  authDomain: "website-3bd7d.firebaseapp.com",
  projectId: "website-3bd7d",
  storageBucket: "website-3bd7d.firebasestorage.app",
  messagingSenderId: "939758507298",
  appId: "1:939758507298:web:e65574a7791bcc7aa3017b",
  measurementId: "G-BCTJJQ7KM1",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const db = getFirestore(app);

export { messaging, db };
