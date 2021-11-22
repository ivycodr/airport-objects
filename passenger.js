const Bag = require("./bag");
const Person = require('./person');


class Passenger extends Person {

    constructor(name, bagWeight, passportNumber, seatNumber) {
        super(name);
        super.addBag(new Bag(bagWeight));
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;


    }

    callAttendant() {
        return ('Excuse Me');
    }
}

module.exports = Passenger;