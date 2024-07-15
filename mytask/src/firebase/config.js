import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Importar do firebase
import { getFirestore } from "firebase/firestore"; // Importar do firebase

const firebaseConfig = {
  apiKey: "AIzaSyDehlMd2otyFv4of_uoVKRAn_ghJ7Xwz70",
  authDomain: "my-task-2cb32.firebaseapp.com",
  projectId: "my-task-2cb32",
  storageBucket: "my-task-2cb32.appspot.com",
  messagingSenderId: "560912396158",
  appId: "1:560912396158:web:f66c9f63ab1c421c38cd2f"
};

// app =>  Objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => Ojbeto com as configurações de authentication
export const auth = getAuth(app)
// firestore => Objeto com as configurações do Firestore
export const db = getFirestore(app)