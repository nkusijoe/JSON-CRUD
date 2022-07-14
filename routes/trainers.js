const express = require('express');

const trainersController = require('../controllers/trainers');

const router = express.Router();

router.get('/', trainersController.getTrainers);

router.get('/:id', trainersController.getTrainerById);

router.post('/', trainersController.createUpdateTrainers);

router.put('/', trainersController.createUpdateTrainers);

router.delete('/:id', trainersController.DeleteTrainers);

module.exports = router;