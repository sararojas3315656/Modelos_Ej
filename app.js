const express = require('express');
const cors = require('cors');
const pqrsRoutes = require('./routes/pqrsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/pqrs', pqrsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API de PQRS funcionando' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
