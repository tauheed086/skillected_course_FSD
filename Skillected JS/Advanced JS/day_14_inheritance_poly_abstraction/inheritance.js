//1
class Vehicle{
  start(){
    console.log("Vehicle starts")
  }
}

class Bike extends Vehicle{
  ride(){
    console.log("Ride Starting")
  }
}

const b = new Bike();
b.start();
// b.ride()

