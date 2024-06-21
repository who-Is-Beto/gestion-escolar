const express = require('express');
const router = express.Router();
const path = require('path');
const app = require('../config/firebase');
const { collection, doc, setDoc } = require('firebase/firestore');


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../c./public', 'index.html'));
});

const estudiantesRef = collection(app.db, "estudiantes");

router.post('/registro', async (req, res) => {
  
  await setDoc(doc(estudiantesRef, "boleta"), {
    firstName: "Luis", lastName: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });

    res.redirect('/datos_academicos');
});

module.exports = router;
