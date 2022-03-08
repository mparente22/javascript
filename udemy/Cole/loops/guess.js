let maximum = parseInt(prompt ('enter the maximum number'));
while (!maximum) {
    maximum = parseInt(prompt ('enter a VALID number'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

console.log(targetNum)

let guess = parseInt(prompt('enter your first guess'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if(guess > targetNum){
        guess = prompt(`You guessed ${guess}. Too high! Try again!`);
    } else {
        guess = prompt(`You guessed ${guess}. Too low! Try again!`)
    }
}
if(guess === 'q'){
    console.log('QUITTER!')
} else {
console.log(`You got it! Took you ${attempts} attempts!!`)
}