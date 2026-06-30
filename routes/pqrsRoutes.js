const express = require('express');
const router = express.Router();
const pqrsController = require('../controllers/pqrsController');

router.get('/', pqrsController.getAll);
router.get('/:id', pqrsController.getById);
router.post('/', pqrsController.create);
router.put('/:id', pqrsController.update);
router.delete('/:id', pqrsController.remove);

module.exports = router;
