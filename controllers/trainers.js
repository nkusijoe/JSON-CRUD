const Trainers = require('../models/trainers');
const TrainersData = require('../data/trainers.json')

exports.getTrainers = (req, res) => {
  res.status(200).json(TrainersData)
};

exports.getTrainerById = (req, res) => {
    const Id = req.params.id;
    Trainers.findById(Id, Trainers => {
        res.json(Trainers)
    });
};

exports.createUpdateTrainers = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const task = req.body.task;
    const updatedTrainees = new Trainers(
        id,
        name,
        age,
        task
    );
    updatedTrainers.save();
    res.status(200).json({ message: id ? 'Trainer Updated Successfully' : 'Data is Successfully Inserted' })
};

exports.DeleteTrainers = (req, res) => {
    const Id = req.params.id;
    Trainers.deleteTrainerById(Id);
    res.status(200).json({ message: "Trainee deleted successfully" })
};
