import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6KxOKwk9TUJC0mnOvXoTLiX70O3Lmmy4",
  authDomain: "katiwala-7eefe.firebaseapp.com",
  projectId: "katiwala-7eefe",
  storageBucket: "katiwala-7eefe.appspot.com",
  messagingSenderId: "171126609671",
  appId: "1:171126609671:web:4e72fe3901d6c8a15397a2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
