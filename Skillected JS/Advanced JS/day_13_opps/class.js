// Creating a class named 'person'
class person {
  // Constructor that initializes name and age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to introduce the person
  introduce() {
    console.log(`hi I am ${this.name} I am ${this.age}`);
  }
}

// Creating a new object from the 'person' class with parameters
const person1 = new person("Tauheed", 30);

// Calling the 'introduce' method on the object
person1.introduce();


class car{
  constructor(brand,model){
    this.brand = brand,
    this.model = model
  }

  introduce(){
    console.log(`car: ${this.brand}, ${this.model}`)
  }
}

const car1 = new car("maruti", "suzuki")

car1.introduce()