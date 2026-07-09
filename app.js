const express = require('express');
const cors = require('cors');
const pqrsRoutes = require('./routes/pqrsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/pqrs', pqrsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido al Sistema de Gestión Académica' });
});

app.get('/aprendices', (req, res) => {
  res.json({ message: 'Gestión de aprendices: aquí se administra la información, registro y seguimiento de los aprendices del sistema.' });
});

app.get('/programas', (req, res) => {
  res.json({ message: 'Gestión de programas de formación: aquí se gestionan los programas académicos, sus contenidos y la asignación a los aprendices.' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
