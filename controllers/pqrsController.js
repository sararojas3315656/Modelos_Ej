const PQRS = require('../models/pqrsModel');

exports.getAll = (req, res) => {
  const result = PQRS.findAll();
  res.json(result);
};

exports.getById = (req, res) => {
  const result = PQRS.findById(req.params.id);
  if (!result) return res.status(404).json({ error: 'PQRS no encontrada' });
  res.json(result);
};

exports.create = (req, res) => {
  const { tipo, descripcion, solicitante } = req.body;
  if (!tipo || !descripcion || !solicitante) {
    return res.status(400).json({ error: 'tipo, descripcion y solicitante son requeridos' });
  }
  const result = PQRS.create({ tipo, descripcion, solicitante });
  res.status(201).json(result);
};

exports.update = (req, res) => {
  const result = PQRS.update(req.params.id, req.body);
  if (!result) return res.status(404).json({ error: 'PQRS no encontrada' });
  res.json(result);
};

exports.remove = (req, res) => {
  const result = PQRS.delete(req.params.id);
  if (!result) return res.status(404).json({ error: 'PQRS no encontrada' });
  res.json(result);
};
