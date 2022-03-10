const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput 
      }else {
        console.log('User Error. Please enter Rock, Paper or Scissors')
      }
    }
    
    const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() *3) 
      switch(randomNumber) {
        case 0: return 'rock'
        break;
        case 1: return 'paper'
        break;
        case 2: return 'scissors'
      }
    }

     // console.log(getComputerChoice())
    
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return console.log('The game is a tie!');
      }  else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return console.log('You won! :)');
      } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return console.log('You won! :)');
      } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return console.log('You won! :)');
      } else if (userChoice === 'bomb'){
        return console.log(`${userChoice} always wins!`)
      } else {
        return console.log('You lost! :(');
      }
    };
    
    const playGame = () => {
       const userChoice = getUserChoice('bomb');
       const computerChoice = getComputerChoice();
       console.log('You threw: ' + userChoice);
       console.log('The computer threw:' + computerChoice);
       console.log(determineWinner(userChoice, computerChoice));
    };
     
    playGame();
    
    console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
    console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
    console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
         