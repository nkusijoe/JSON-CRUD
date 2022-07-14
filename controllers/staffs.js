const Staff = require('../models/staffs');
const TrainersData = require('../data/staff.json')

exports.getStaffs = (req, res) => {
  res.status(200).json(StaffsData)
};

exports.getStaffById = (req, res) => {
    const Id = req.params.id;
    Staffs.findById(Id, Staffs => {
        res.json(Staffs)
    });
};

exports.createUpdateStaffs = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const task = req.body.task;
    const updatedStaffs = new Staffs(
        id,
        name,
        age,
        task
    );
    updatedStaffs.save();
    res.status(200).json({ message: id ? 'Trainer Updated Successfully' : 'Data is Successfully Inserted' })
};

exports.DeleteStaffs = (req, res) => {
    const Id = req.params.id;
    Trainers.deleteStaffById(Id);
    res.status(200).json({ message: "Trainee deleted successfully" })
};
