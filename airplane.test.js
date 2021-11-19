
const Airplane = require('./airplane');

describe("Airplane test scenarion", () => {

    test("has a name", () => {
        const airplane = new Airplane('American Airlines'); // stub
        expect(airplane.name).toBe('American Airlines'); // spies

    })


})