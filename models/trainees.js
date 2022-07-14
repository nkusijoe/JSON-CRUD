const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(__dirname),
    'data',
    'trainees.json'
);

const getTrainees = tf => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err)
            tf([]);
        } else {
            tf(JSON.parse(fileContent));
        }
    });
};

module.exports = class Trainees {
    // Model contain 4 property’s { id, title, description, published }
    constructor(id, name, age, stack) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.stack = stack;
    }

    save() {
        getTrainees(Trainees => {
            if (this.id) {
                const existingTraineesIndex = Trainees.findIndex(
                    train => train.id === this.id
                );
                const updatedTrainees = [...Trainees];
                updatedTrainees[existingTraineesIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedTrainees), err => {
                    console.log(err);
                });
            } else {
                this.id = (new Date()).getTime().toString();
                Trainees.push(this);
                fs.writeFile(p, JSON.stringify(Trainees), err => {
                    console.log(err);
                });
            }
        });
    }

    static deleteTraineeById(id) {
        getTraineesFromFile(Trainees => {
            const updatedTrainees = Trainees.filter(train => train.id !== id);
            fs.writeFile(p, JSON.stringify(updatedTrainees), err => {
            });
        });
    }

    static fetchAll(cb) {
        getTrainees(tf);
    }

    static getTraineeById(id, tf) {
        getTrainee(Trainees => {
            const Trainees = Trainees.find(t => t.id === id);
            tf(Trainers);
        });
    }
};