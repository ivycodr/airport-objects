const Bag = require('./bag');

describe("Bag test Scenarions", () => {

    test("has a weight", () => {
        const bag = new Bag(16); // stub
        expect(bag.weight).toBe(16); // spies

    })


})