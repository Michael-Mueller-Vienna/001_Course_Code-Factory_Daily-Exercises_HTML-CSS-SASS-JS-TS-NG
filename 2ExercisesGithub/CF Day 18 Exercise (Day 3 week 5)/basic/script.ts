// take input from the user
const numberOne: any = prompt('Enter an integer: ');
console.log(numberOne)

// creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
   const result = i * numberOne;

    // display the result
    console.log(`${numberOne} * ${i} = ${result}`);
}
