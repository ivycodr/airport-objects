const Passenger = require('./passenger');

describe("Passenger test Scenarions", () => {

    test("has a name", () => {
        const passenger = new Passenger('James Brown'); // stub
        expect(passenger.name).toBe('James Brown'); // spies

    })


})