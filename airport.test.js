const Airport = require('./airport');

describe("Airport test Scenarions", () => {

    test("has a code", () => {
        const airport = new Airport('DFW'); // stub
        expect(airport.airportCode).toBe('DFW'); // spies

    })


})