const firebase = require("../config/firebase.js");
const User = require("../models/users.model.js");
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

const db = getFirestore(firebase);

export const createAlumno = async (req, res, next) => {
  try {
    const { nombre, apellidos, nacimiento, curp, boleta } = req.body;
    const alumno = new User(nombre, apellidos, nacimiento, curp, boleta);

    // TO DO: Añadir un middeleware que valide la estructura de los datos recibidos de usuario
    await addDoc(collection(db, "estudiantes"), alumno);

    res.status(200).send("Usuario creado correctamente.");
    res.redirect("/datos_academicos"); // Ajusta la ruta según tu estructura de archivos estática
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await getDocs(collection(db, "estudiantes"));
    const alumnosArray = [];

    if (alumnos.length === 0) {
      res.status(400).send("No hay alumnos registrados.");
      return;
    }

    alumnos.forEach((doc) => {
      const user = new User(
        doc.id,
        doc.data().nombre,
        doc.data().apellidos,
        doc.data().nacimiento,
        doc.data().curp,
        doc.data().boleta
      );
      alumnosArray.push(user);
    });

    res.status(200).send(alumnosArray);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAlumno = async (req, res) => {
  try {
    const id = req.params.id;
    const alumno = doc(db, "estudiantes", id);
    const data = await getDoc(alumno);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send("alumno not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateAlumno = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const alumno = doc(db, "estudiantes", id);
    await updateDoc(alumno, data);
    res.status(200).send("alumno updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteAlumno = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, "estudiante", id));
    res.status(200).send("alumno deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
