const express = require('express');

const staffsController = require('../controllers/staffs');

const router = express.Router();

router.get('/', staffsController.getStaffs);

router.get('/:id', staffsController.getStaffById);

router.post('/', staffsController.createUpdateStaffs);

router.put('/', staffsController.createUpdateStaffs);

router.delete('/:id', staffsController.DeleteStaffs);

module.exports = router;