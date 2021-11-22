const Airport = require('./airport');


describe("Airport test Scenarions", () => {

    test("has a code", () => {
        const airport = new Airport('DFW'); // stub
        expect(airport.airportCode).toBe('DFW'); // spies

    })
    
    test("airport has several airplanes", () => {
        const airport = new Airport('DFW',['American', 'Delta', 'United']); // stub
        expect(airport.airplanes.length).toEqual(3);

    })




})