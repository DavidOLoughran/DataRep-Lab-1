class Vehicle{
    //Constructor to read in height and weight
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //Logs the make, model and year in the console
    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Make: ${this.model}`);
        console.log(`Make: ${this.year}`);
    }

}

//Class Cars Created with Vehicle as the Parent Class
class Cars extends Vehicle{
   
    //Constructor to read in height and weight
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }
    //Logs the make, model and year in the console
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
//Creates new instance of Cars, and calls method Information to log details to console
let myCar = new Cars('VW', 'Passat', 2020, 5);
myCar.Information();

//let myVehicle = new Vehicle("VW", "Golf", 2000);
//myVehicle.Information();