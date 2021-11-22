
const Airplane = require('./airplane');
const Passenger = require('./passenger');
const CrewMember = require('./crewmember');

describe("Airplane test scenarion", () => {

    test("has a name", () => {
        const airplane = new Airplane('American Airlines'); // stub
        expect(airplane.name).toBe('American Airlines'); // spies

    })

    test("board a passenger", () => {
        const airplane = new Airplane('American Airlines'); // stub
        const passenger = new Passenger('James Brown', 12, 'A1234', 'D34');
        airplane.boardPassenger(passenger);

    })

    test("board a crew member", () => {
        const airplane = new Airplane('American Airlines'); // stub
        const crewMember = new CrewMember('John Doe', 'Pilot', 2322); // stub
        airplane.boardCrewMember(crewMember);
    })

})