const CrewMember = require('./crewmember');

describe("CrewMember test Scenarions", () => {

    test("has position and staffNumber", () => {
        const crew = new CrewMember('John Doe', 'Pilot', 2322); // stub
        expect(crew.name).toBe('John Doe'); // spies
        expect(crew.position).toBe('Pilot'); // spies
        expect(crew.staffNumber).toBe(2322); // spies

    })


})