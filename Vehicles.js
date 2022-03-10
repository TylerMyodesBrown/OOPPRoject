class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'beep'
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
    }
    numWheels(){
        return '4 wheels'
    }
}

class Motorcylce extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
    }
    numWheels(){
        return '2 wheels'
    }
    revEngine(){
        return 'VROOM'
    }
}

class Garage{
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
      }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
    }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
    }
        this.vehicles.push(newVehicle);
            return "Vehicle added!";
    }    
}