const express = require('express');
const router = express.Router();
const especialidadeController = require('../controllers/especialidadeController');

router.get('/', especialidadeController.getAllEspecialidades);
router.post('/', especialidadeController.createEspecialidade);
router.get('/:id', especialidadeController.getEspecialidadeById);
router.put('/:id', especialidadeController.updateEspecialidade);
router.delete('/:id', especialidadeController.deleteEspecialidade);

module.exports = router;
