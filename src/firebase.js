import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA7hUQuKkUl4HW3qlszPhsTJpSfUy2IqVg",
  authDomain: "polyline-contact.firebaseapp.com",
  projectId: "polyline-contact",
  storageBucket: "polyline-contact.appspot.com",
  messagingSenderId: "744467227400",
  appId: "1:744467227400:web:638f3022e93f1d8aa402bd",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar DB
export { db };