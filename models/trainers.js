const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(__dirname),
    'data',
    'trainees.json'
);

const getTrainers = tf => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err)
            tf([]);
        } else {
            tf(JSON.parse(fileContent));
        }
    });
};

module.exports = class Trainers {
    constructor(id, name, age, task) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.task = task;
    }

    save() {
        getTrainers(Trainees => {
            if (this.id) {
                const existingTrainersIndex = Trainers.findIndex(
                    trainer => trainer.id === this.id
                );
                const updatedTrainers = [...Trainers];
                updatedTrainers[existingTrainersIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedTrainers), err => {
                    console.log(err);
                });
            } else {
                this.id = (new Date()).getTime().toString();
                Trainers.push(this);
                fs.writeFile(p, JSON.stringify(Trainers), err => {
                    console.log(err);
                });
            }
        });
    }

    static deleteTrainerById(id) {
        getTrainers(Trainers => {
            const updatedTrainers = Trainers.filter(train => train.id !== id);
            fs.writeFile(p, JSON.stringify(updatedTrainers), err => {
            });
        });
    }

    static fetchAll(cb) {
        getTrainers(tf);
    }

    static getTrainerById(id, tf) {
        getTrainer(Trainers => {
            const Trainers = Trainers.find(t => t.id === id);
            tf(Trainers);
        });
    }
};