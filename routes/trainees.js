const express = require('express');

const traineesController = require('../controllers/trainees');

const router = express.Router();

router.get('/', traineesController.getTrainees);

router.get('/:id', traineesController.getTraineeById);

router.post('/', traineesController.createUpdateTrainees);

router.put('/', traineesController.createUpdateTrainees);

router.delete('/:id', traineesController.DeleteTrainees);

module.exports = router;