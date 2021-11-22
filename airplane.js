class Airplane {
    static passengers = [];
    static crewMembers = [];
    constructor(name) {
        this.name = name;
        this.passengers = [];
        this.crewMembers = [];
        
        
    }
    
    boardPassenger(passenger) {
        this.passengers.push(passenger);    
    }
    
    boardCrewMember(crewMember) {
        this.crewMembers.push(crewMember);
    }

}

module.exports = Airplane;