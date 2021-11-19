const Crew = require('./crew');

describe("Crew test Scenarions", () => {

    test("has a name", () => {
        const crew = new Crew('John Doe'); // stub
        expect(crew.name).toBe('John Doe'); // spies

    })


})