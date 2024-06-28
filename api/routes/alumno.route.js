import express from "express";

import {
  createAlumno,
  deleteAlumno,
  getAllAlumnos,
  getAlumno,
  updateAlumno
} from "../controllers/usuarioController";

const router = express.Router();

router.get("/", getAllAlumnos);
router.post("/new", createAlumno);
router.get("/alumno/:id", getAlumno);
router.put("/update/:id", updateAlumno);
router.delete("/delete/:id", deleteAlumno);

export default router;
