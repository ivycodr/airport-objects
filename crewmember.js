const Person = require('./Person');

class CrewMember extends Person{

    constructor(name,position, staffNumber) {
        super(name);
        this.position = position;
        this.staffNumber = staffNumber;
    }
}

module.exports = CrewMember;