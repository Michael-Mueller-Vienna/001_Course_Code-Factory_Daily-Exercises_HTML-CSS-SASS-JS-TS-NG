// Car
let car = {
    name: "Tesla Model 3",
    brand: "Tesla",
    model: 3,
    type: "sedan",
    color: "red",
    weight: 1750,
    age: 2019,
    showCarInfo: function() {
      console.log(`This is a ${this.name} car, of the brand ${this.brand}, model ${this.model}, type ${this.type}, color ${this.color}, weight ${this.weight}, and age ${this.age}.`);
      document.getElementById("result1").innerHTML = `This is a ${this.name} car, of the brand ${this.brand}, model ${this.model}, type ${this.type}, color ${this.color}, weight ${this.weight}, and age ${this.age}.`;
    }
  };

  car.showCarInfo();
  
  // Animal
  let animal = {
    name: "Bobo",
    type: "dog",
    color: "brown",
    weight: 10,
    age: 2,
    showAnimalInfo: function() {
      console.log(`This is ${this.name}, a ${this.color} ${this.type}, weight ${this.weight} kg, and age ${this.age}.`);
      document.getElementById("result2").innerHTML = `This is ${this.name}, a ${this.color} ${this.type}, weight ${this.weight} kg, and age ${this.age}.`;
    }
  };
  
  animal.showAnimalInfo();


  // Person
  let person = {
    name: "John Doe",
    age: 35,
    weight: 75,
    height: 180,
    shoeSize: 10,
    showPersonInfo: function() {
      console.log(`This is ${this.name}, age ${this.age}, weight ${this.weight} kg, height ${this.height} cm, and shoe size ${this.shoeSize}.`);
      document.getElementById("result3").innerHTML = `This is ${this.name}, age ${this.age}, weight ${this.weight} kg, height ${this.height} cm, and shoe size ${this.shoeSize}.`;
    }
  };

  person.showPersonInfo();
