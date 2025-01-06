import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQYT_riWG30cy7IY86Lt3Sm1vcAiJ0a3E",
  authDomain: "sampleform-ad8a7.firebaseapp.com",
  projectId: "sampleform-ad8a7",
  storageBucket: "sampleform-ad8a7.firebasestorage.app",
  messagingSenderId: "624751236972",
  appId: "1:624751236972:web:5e84b1fac4afad8d850549",
  measurementId: "G-D2ZSERBNLY"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
