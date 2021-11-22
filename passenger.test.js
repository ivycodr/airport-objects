const Passenger = require('./passenger');
const Person = require('./person');
const Bag = require('./bag');

describe("Passenger test Scenarions", () => {

    test("has a name", () => {
        const passenger = new Passenger('James Brown', 12, 'A1234', 'D34');
        
        expect(passenger.name).toBe('James Brown'); // spies

    })

    test("to see if call attendant button is working", () => {
        const passenger = new Passenger('James Brown', 12, 'A1234', 'D34');
        expect(passenger.callAttendant()).toBe('Excuse Me'); // spies

    })


})