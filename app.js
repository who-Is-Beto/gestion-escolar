const express = require('express');
const app = express();
const path = require('path');

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Requiere y usa las rutas definidas en la carpeta 'routes'
const indexRouter = require('./routes/index');
const datosAcademicosRouter = require('./routes/datos_academicos');
const horarioRouter = require('./routes/horario');
const calificacionesRouter = require('./routes/calificaciones');
const solicitarDocumentosRouter = require('./routes/solicitar_documentos');

app.use('/', indexRouter);
app.use('/datos_academicos', datosAcademicosRouter);
app.use('/horario', horarioRouter);
app.use('/calificaciones', calificacionesRouter);
app.use('/solicitar_documentos', solicitarDocumentosRouter);

// Maneja cualquier otra ruta y envía el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
