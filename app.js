//appjs
const express = require('express');
const app = express();
const path = require('path');

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Requiere y usa las rutas definidas en la carpeta 'routes'
const indexRouter = require('./api/routes/index.js');
const datosAcademicosRouter = require('./api/routes/datos_academicos.js');
const horarioRouter = require('./api/routes/horario.js');
const calificacionesRouter = require('./api/routes/calificaciones.js');
const solicitarDocumentosRouter = require('./api/routes/solicitar_documentos.js');

app.use(express.json()); // Para analizar JSON en el cuerpo de la solicitud
// Middleware para parsear el cuerpo de las solicitudes POST
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/datos_academicos', datosAcademicosRouter);
app.use('/horario', horarioRouter);
app.use('/calificaciones', calificacionesRouter);
app.use('/solicitar_documentos', solicitarDocumentosRouter);

// Maneja cualquier otra ruta y envía el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});


