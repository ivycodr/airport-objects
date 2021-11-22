class Airplane {
    static passengers = [];
    static crewMembers = [];
    constructor(name) {
        this.name = name;
        
        
    }
    
    boardPassenger(passenger) {
        this.constructor.passengers.push(passenger);    
    }
    
    boardCrewMember(crewMember) {
        this.constructor.crewMembers.push(crewMember);
    }

}

module.exports = Airplane;