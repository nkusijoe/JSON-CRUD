const Trainees = require('../models/trainees');
const TraineesData = require('../data/trainees.json')

exports.getTrainees = (req, res) => {
  res.status(200).json(TraineesData)
};

exports.getTraineeById = (req, res) => {
    const Id = req.params.id;
    Trainees.findById(Id, Trainees => {
        res.json(Trainees)
    });
};

exports.createUpdateTrainees = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const stack = req.body.stack;
    const updatedTrainees = new Trainees(
        id,
        name,
        age,
        stack
    );
    updatedTrainees.save();
    res.status(200).json({ message: id ? 'Trainee Updated Successfully' : 'Data is Successfully Inserted' })
};

exports.DeleteTrainees = (req, res) => {
    const Id = req.params.id;
    Trainees.deleteTraineeById(Id);
    res.status(200).json({ message: "Trainee deleted successfully" })
};
