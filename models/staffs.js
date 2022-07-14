const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(__dirname),
    'data',
    'staff.json'
);

const getStaffs = sf => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err)
            sf([]);
        } else {
            sf(JSON.parse(fileContent));
        }
    });
};

module.exports = class Trainees {
    // Model contain 4 property’s { id, title, description, published }
    constructor(id, name, age, email, phone, isManager ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.isManager = isManager;
    }

    save() {
        getStaffs(Staffs => {
            if (this.id) {
                const existingStaffsIndex = Staffs.findIndex(
                    staff => staff.id === this.id
                );
                const updatedStaffs = [...Staffs];
                updatedStaffs[existingStaffsIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedStaffs), err => {
                    console.log(err);
                });
            } else {
                this.id = (new Date()).getTime().toString();
                Staffs.push(this);
                fs.writeFile(p, JSON.stringify(Staffs), err => {
                    console.log(err);
                });
            }
        });
    }

    static deleteStaffById(id) {
        getStaffs(Staffs => {
            const updatedStaffs = Staffs.filter(staff => staff.id !== id);
            fs.writeFile(p, JSON.stringify(updatedStaffs), err => {
            });
        });
    }

    static fetchAll(sf) {
        getStaffs(sf);
    }

    static getStaffById(id, sf) {
        getStaff(Staffs => {
            const Staffs = Staffs.find(s => s.id === id);
            sf(Staff);
        });
    }
};