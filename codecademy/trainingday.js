// The scope of `random` is too loose 
const randomEvent = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (randomEvent === 0) {
    return 'Marathon';
  } else if (randomEvent === 1) {
    return 'Triathlon';
  } else if (randomEvent === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = trainingDayEvent => {

  if (trainingDayEvent === 'Marathon') {
    let days = 50;
  } else if (trainingDayEvent === 'Triathlon') {
    let days = 100;
  } else if (trainingDayEvent === 'Pentathlon') {
    let days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
  const eventName = 'Nala';
  console.log(`${eventName}'s event is: ${event}`);
};

const logTime = days => {
  const timeName = 'Nala';
  console.log(`${timeName}'s time to train is: ${days} days`);
};

const randomEvent = getRandEvent();
const days = getTrainingDays(trainingDayEvent);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(randomEvent);
logTime(days);
