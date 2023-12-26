import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBp8VLfBF3qxJ2HPpQ2OGD0Su0Xa450wuA",
  authDomain: "gasservise-3b957.firebaseapp.com",
  projectId: "gasservise-3b957",
  storageBucket: "gasservise-3b957.appspot.com",
  messagingSenderId: "299695626766",
  appId: "1:299695626766:web:dbf2b34c3924361933fa5f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };