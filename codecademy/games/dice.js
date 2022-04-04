const num1 = Math.floor(Math.random ()* 6) + 1; 
const num2 = Math.floor(Math.random() * 6) + 1; 

if(num1 === 1 && num2 === 1){
  console.log(`You rolled a ${num1} & ${num2}. SNAKE EYES`)
} else if(num1 === 6 && num2 === 6){
  console.log(`You rolled a ${num1} & ${num2}. BOXCARS`)
} else if(num1 === num2){
  console.log(`You rolled a ${num1} & ${num2}. DOUBLES!!`)
} else {
  console.log(`You rolled ${num1} & ${num2}. Total dice roll is ${num1 + num2}`)
}


/*
//IN FUNCTION 
const die1 = Math.floor(Math.random ()* 6) + 1; 
const die2 = Math.floor(Math.random ()* 6) + 1; 

function rollDice(die1, die2){
console.log(die1, die2)

if(die1 === 1 && die2 === 1){
    console.log(`You rolled a ${die1} & ${die2}. SNAKE EYES`)
  } else if(die1 === 6 && die2 === 6){
    console.log(`You rolled a ${die1} & ${die2}. BOXCARS`)
  } else if(die1 === die2){
    console.log(`You rolled a ${die1} & ${die2}. DOUBLES!!`)
  } else {
    console.log(`You rolled ${die1} & ${die2}. Total dice roll is ${die1 + die2}`)
  }
}
rollDice(die1, die2);

/*
function getRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
console.log(`You rolled ${getRandomNumber()} & ${getRandomNumber()}`);


//die with larger numbers can be added by adding a parameter to the function. IE: upper
function getRandomNumber(upper){
    const randomNumber = Math.floor(Math.random() * upper) + 1;
    return randomNumber;
}
console.log(`You rolled ${getRandomNumber(5000)} & ${getRandomNumber(10000)}`);
*/