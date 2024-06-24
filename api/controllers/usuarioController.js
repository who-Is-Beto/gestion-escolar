// api/controllers/usuarioController.js
const { db } = require('../config/firebase');
const { collection, addDoc } = require('firebase/firestore');

const addAlumno = async (req, res) => {
  const { firstName, lastName, birthYear } = req.body;

  if (!firstName || !lastName || !birthYear) {
    return res.status(400).send({ error: "Todos los campos son requeridos" });
  }

  try {
    const docRef = await addDoc(collection(db, "usuarios"), {
      firstName,
      lastName,
      birthYear
    });
    res.status(201).send({ message: "Alumno agregado con éxito", id: docRef.id });
  } catch (e) {
    console.error("Error adding document: ", e);
    res.status(500).send({ error: "Error al agregar el alumno" });
  }
};

module.exports = { addAlumno };
