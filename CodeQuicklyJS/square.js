//Get an input number
var inputNum = prompt ('Type a number between 1 and 100');

//If valid, display its square
if (inputNum >= 1 && inputNum <= 100) {
    document.write (`The square of ${inputNum} is ${inputNum*inputNum}`);
}
else {
    document.write('Invalid Number!');
}

