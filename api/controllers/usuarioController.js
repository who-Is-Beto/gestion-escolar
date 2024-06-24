// api/controllers/usuarioController.js

const { db } = require('../config/firebase');
const { collection, doc, setDoc, getDocs } = require('firebase/firestore');

const addAlumno = async (req, res) => {
  try {
    const estudiantesRef = collection(db, "estudiantes");
    const { nombre, apellidos, nacimiento, curp, boleta } = req.body;

    // Guardar los datos en Firestore
    await setDoc(doc(estudiantesRef, boleta), {
      nombre,
      apellidos,
      nacimiento,
      curp,
      boleta
    });

    // Redirigir a la página de datos académicos (ajusta la ruta según tu estructura)
    res.redirect('/datos_academicos'); // Ajusta la ruta según tu estructura de archivos estática

  } catch (error) {
    console.error('Error al registrar el documento:', error);
    res.status(500).send('Error interno al registrar el estudiante');
  }
};

const getUsuarios = async (req, res) => {
  try {
    const usuariosRef = collection(db, "estudiantes");
    const querySnapshot = await getDocs(usuariosRef);
    const usuarios = [];

    querySnapshot.forEach((doc) => {
      usuarios.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error getting documents:", error);
    res.status(500).json({ error: "Error al obtener los estudiantes" });
  }
};

module.exports = { addAlumno, getUsuarios };
