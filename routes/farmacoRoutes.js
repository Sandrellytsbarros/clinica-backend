const express = require('express');
const router = express.Router();
const farmacoController = require('../controllers/farmacoController');

router.get('/', farmacoController.getAllFarmacos);
router.post('/', farmacoController.createFarmaco);
router.get('/:id', farmacoController.getFarmacoById);
router.put('/:id', farmacoController.updateFarmaco);
router.delete('/:id', farmacoController.deleteFarmaco);

module.exports = router;
