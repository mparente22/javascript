var userName = 'Cambria';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion = 'Will this work?'; {
console.log(`${userName} asked, ${userQuestion}`);
}
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
case 0:
eightBall = 'It is certain';
break;
case 1:
'It is decidedly so';
break;
case 2:
'Reply hazy try again';
break;
case 3:
'Cannot predict now';
break;
case 4:
'Do not count on it';
break;
case 5:
'My sources say no';
break;
case 6:
'Outlook not so good';
break;
case 7:
'Signs point to yes';
break; 
}
{
console.log(`The eight ball answered: ${eightBall}`); 
}