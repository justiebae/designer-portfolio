import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBf-FeNpVtyyEgEiIuzdSSojKESaLsudmo",
  authDomain: "alice-design-portfolio.firebaseapp.com",
  projectId: "alice-design-portfolio",
  storageBucket: "alice-design-portfolio.appspot.com",
  messagingSenderId: "527489920239",
  appId: "1:527489920239:web:92dea4a931a2d23b05bf1a",
  measurementId: "G-FXWKBFPXJH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
