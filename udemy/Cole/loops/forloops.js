/*

// for loop Prints console 6x
for (let i = 0; i < 6; i ++) {
    console.log("Da ba dee da ba daa")
}




// for loop Counts from 1 to 10 by 1 in console
for (let i = 1; i <= 10; i ++) {
    console.log(i)
}




// for loop Counts by 2 to 100 in console
for (let i = 0; i <= 100; i+= 2) {
    console.log(i)
}




// for loop Counts DOWN by 10 from 100 to 0
for (let i = 100; i >= 0; i-= 10) {
    console.log(i)
}



// for loop Count down from 25 to 0 increments of 5
for (let i = 25; i >= 0; i-= 5) {
    console.log(i)
}




// for loop counting sheep from 1 to 100
for (let sheepCounted = 1; sheepCounted <= 100; sheepCounted++){
    console.log(`I have counted ${sheepCounted} sheep`);
}
console.log('I am asleep now. I counted 100 sheep');




// While loop counting sheep from 1 to 100
let sheepCounted = 1;
while (sheepCounted <= 100) {
  console.log(`I have counted ${sheepCounted} sheep`);
  sheepCounted++;
}
console.log('I am asleep now. I counted 100 sheep');


// Looping over Arrays

const animals = [ 'lions', 'tigers', 'bears' ];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}



// HOW LOOPS WORK:
for (setupWhateverYourDoing | ie. let varible = 0; | conditionTrueorFalse; | ie. variable <= 10; | increment ++ -- etc | ie variable++) {
    console.log('PRINT HERE');
}


// Making array items uppercase
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i <= people.length; i++) {
    console.log(people[i].toUpperCase())
}





for (let i = 1; i <= 20; i++) {
    console.log(i);
}


//Animals in a zoo

let animals =['lions', 'tigers', 'bears', 'snakes'];

for (let i=0; i< animals.length; i++){
    console.log(`This zoo contains ${animals[i]}.`)
}



//Adding a word "Awesome in front of animal array
let animals = ['cat','lemur','fish','Komodo Dragon'];
for (let i=0; i < animals.length; i++){
    console.log(`Awesome ${animals[i]}`)
}


for (let i=0; i <= 10; i++){
    console.log(i)
}

for (let i =0; i <=100; i+=5){
    console.log(i)
}

for loop syntax
for (initial expression; "boolean - True or False" condition; increment expression)

*****below is an example that loops from 0 to 10*****
for(let i=0; i <= 10; i++)
  console.log(i)

*****below is an example that only prints even numbers*****
for (let i = 1; i <= 20; i += 2)
console.log(i)

*****below is an example that only prints even numbers*****
for (let i = 0; i <= 20; i += 2)
console.log(i)

***i is only the placeholder. You can use any name there***


const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length - 2; i++) {
  console.log(`Awesome ${animals[0]}, Awesome ${animals[1]}, Awesome ${animals[2]}`);
}

for (let i = 0; i <= animals.length -1; i++) {
    console.log(`Awesome ${animals[i]}`)
}

for (let i = 1; i <= 10; i++){
  console.log(`i is: ${i}`);
for (let j = 1; j <= 2; j++){
  console.log(`                  j is: ${i}`)
}
}


const seatingChart =[
  ['Adam', 'Thomas', 'James'],
  ['Kristen', 'Bria', 'Sandy'],
  ['Jack', 'Erica', 'Yuma']
]

for(let i=0; i < seatingChart.length; i++){
  const seatingRow = seatingChart[i];
     console.log(`ROW #${i + 1}`)
  for(let j = 0; j < seatingRow.length; j++) {
    console.log(seatingRow[j])
  }
}

//NEW FOR LOOP. MAKES BEST SENSE WITH ARRAYS OR THINGS WERE MATH MAKES 0 SENSE. IE DOESNT SUPPORT
for (let seatingRow of seatingChart) {
  for (let student of seatingRow) {
    console.log(student)
  }
}



for(let char of 'HELLO WORLD'){
  console.log(char);
}


const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

for(let num of numbers){
    console.log(num * num)
}

 for loop syntax
for (initial expression; "boolean - True or False" condition; increment expression)

*****below is an example that loops from 0 to 10*****
for(let i=0; i <= 10; i++)
  console.log(i)

*****below is an example that only prints even numbers*****
for (let i = 1; i <= 20; i += 2)
console.log(i)

*****below is an example that only prints even numbers*****
for (let i = 0; i <= 20; i += 2)
console.log(i)

***i is only the placeholder. You can use any name there***


const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length - 2; i++) {
  console.log(`Awesome ${animals[0]}, Awesome ${animals[1]}, Awesome ${animals[2]}`);
}

for (let i = 0; i <= animals.length -1; i++) {
    console.log(`Awesome ${animals[i]}`)
}

for (let i = 1; i <= 10; i++){
  console.log(`i is: ${i}`);
for (let j = 1; j <= 2; j++){
  console.log(`                  j is: ${i}`)
}
}


const seatingChart =[
  ['Adam', 'Thomas', 'James'],
  ['Kristen', 'Bria', 'Sandy'],
  ['Jack', 'Erica', 'Yuma']
]

for(let i=0; i < seatingChart.length; i++){
  const seatingRow = seatingChart[i];
     console.log(`ROW #${i + 1}`)
  for(let j = 0; j < seatingRow.length; j++) {
    console.log(seatingRow[j])
  }
}


const seatingChart =[
  ['Adam', 'Thomas', 'James'],
  ['Kristen', 'Bria', 'Sandy'],
  ['Jack', 'Erica', 'Yuma']
]

for(let row of seatingChart) {
  console.log(`${row}`)
}
*/

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

for(num of numbers)
console.log(num * num)