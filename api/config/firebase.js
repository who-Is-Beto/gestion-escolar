// public/scripts/firebase.js
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNcYoxyQaQHdKKHiTdE_OtpXVf1kNTptc",
  authDomain: "gestionescolar-eef72.firebaseapp.com",
  projectId: "gestionescolar-eef72",
  storageBucket: "gestionescolar-eef72.appspot.com",
  messagingSenderId: "585636664728",
  appId: "1:585636664728:web:452b14de3068bf6f9087ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { app, db };
