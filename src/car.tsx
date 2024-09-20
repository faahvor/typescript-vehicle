// Step 1: Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Step 2: Implement the Car class that implements the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Step 3: Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2021);

// Step 4: Call the start method
myCar.start(); // This should log: "Car engine started"