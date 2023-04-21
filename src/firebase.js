import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQMXn-Zdv7acAE6D9ZDCk0DFsWIfzhZLU",
  authDomain: "login-app-baf8f.firebaseapp.com",
  projectId: "login-app-baf8f",
  storageBucket: "login-app-baf8f.appspot.com",
  messagingSenderId: "526974249501",
  appId: "1:526974249501:web:e99e7469528124d8d4f4f4",
  measurementId: "G-9H0SX33BN9",
};

const email = "gabrielslim153@gmail.com";
const password = "bznhd13";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

signInWithEmailAndPassword(auth, email, password).then(() => {
  console.log("Signed In Successfuly");
});

export { auth, firestore };
