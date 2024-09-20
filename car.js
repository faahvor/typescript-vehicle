"use strict";
// Step 2: Implement the Car class that implements the Vehicle interface
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Step 3: Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2021);
// Step 4: Call the start method
myCar.start(); // This should log: "Car engine started"
