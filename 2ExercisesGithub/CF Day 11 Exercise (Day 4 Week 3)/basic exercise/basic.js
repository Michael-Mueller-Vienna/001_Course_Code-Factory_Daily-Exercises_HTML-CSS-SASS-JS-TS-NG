//exercise 1

function getWeather() {
    let temp = Math.random() * 30 - 5;
    if (temp <= 10) {
      console.log("The weather is cold.");
    } else {
      console.log("The weather is moderate.");
    }
  }
  
  getWeather();

  /*This program uses Math.random() to generate a random number between 0 and 1, 
  and then multiplies it by 30 and subtracts 5 to get a temperature value between 
  -5 and 25. The function getWeather checks if the temperature is less than or 
  equal to 10, and prints "The weather is cold." or "The weather is moderate." 
  accordingly.*/

  //exercise 2

  let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood() {
  let randomIndex = Math.floor(Math.random() * favoriteFoods.length);
  return favoriteFoods[randomIndex];
}

  console.log(randomFood());

randomFood();

//exercise 3
  
  
  function crystalGazer(numOfChildren, partnerName, geoLocation, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numOfChildren} children.`);
  }
    
  crystalGazer();

//exercise 4

function ageCalculator(birthYear, currentYear) {
    let age1 = currentYear - birthYear;
    let age2 = age1 - 1;
    return `You are either ${age1} or ${age2}.`;
  }

  console.log(ageCalculator(1994,2023));

  ageCalculator();

  
  // Example usage:
  // console.log(ageCalculator(1994, 2023));
  // Output: "You are either 29 or 28."

// exercise 5

function ageCalculator(birthYear) {
    let currentYear = new Date().getFullYear();
    let age1 = currentYear - birthYear;
    let age2 = age1 - 1;
    return `You are either ${age1} or ${age2}.`;
  }

console.log(ageCalculator(1994))

ageCalculator();

// ex 6

// Function to convert degrees to radians
function convertDegToRad(degrees) {
    // Multiply the input degrees by pi/180 to get the result
    return degrees * (Math.PI/180);
  }
  
  // Test the function
  console.log(convertDegToRad(90)); // Output: 1.57079

  convertDegToRad();

  // ex 7

  function calculateBox(width, height, depth) {
    // calculate area
     let area = width * height;
   
    // calculate volume
     let volume = width * height * depth;
   
    // return area and volume
     return `The area of the box is: ${area} \nThe volume of the box is: ${volume}`;
   }
   
   // call the function with three different numbers
   let result = calculateBox(2, 7, 5);
   
   // print the result
   console.log(result);
  