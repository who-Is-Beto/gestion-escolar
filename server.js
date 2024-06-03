const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let students = [
  { id: 1, name: 'John Doe', progress: { math: 85, science: 90, literature: 88 } },
  { id: 2, name: 'Jane Doe', progress: { math: 92, science: 87, literature: 91 } }
];

// Obtener el progreso de todos los estudiantes
app.get('/students', (req, res) => {
  res.json(students);
});

// Obtener el progreso de un estudiante por ID
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');
  res.json(student);
});

// Actualizar el progreso de un estudiante por ID
app.put('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');

  student.progress = req.body.progress;
  res.json(student);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
