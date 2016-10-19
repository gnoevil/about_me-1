'use strict';

var welcome = alert('Welcome to my site! We will be playing a guessing game that builds on itself!');
console.log('Welcome to my site! We will be playing a guessing game that builds on itself!');

var userName = prompt('First question! What is your name?');
console.log('First question! What is your name?');

if (userName === null) {
  var userName = 'n00b';
}

console.log(userName);

alert('Your name is ' + userName + '? Pleasure to meet you, my name is Nikko!');
console.log('Your name is ' + userName + '? Pleasure to meet you, my name is Nikko!');

var question2 = prompt('Ok, ' + userName + ' the rest of our questions will be in a YES or NO format. Are you cool with that? (Just type YES or NO, this is not case sensitive!)').toUpperCase();
console.log('Ok, ' + userName + ' the rest of our questions will be in a YES or NO format. Are you cool with that? (select OK for YES) (Just type YES or NO, this is not case sensitive!)');
console.log(question2);

if (question2 === 'YES') {
  var question3 = prompt('Thanks for playing along! Next question: Are you interested in coding?').toUpperCase();
  console.log('Thanks for playing along! Next question: Are you interested in coding? Remember, OK means YES!');
  console.log(question3);
} else if (question2 === 'NO') {
  alert('Well my friend, you don\'t have to play!');
  console.log('Well my friend, you don\'t have to play!');
}

if (question3 === 'YES') {
  var question4 = prompt('Awesome, me too! I\'ve learned quite a bit about you ' + userName + '! Are you ready for one more question? If so, type YES!').toUpperCase();
  console.log('Awesome, me too! I\'ve learned quite a bit about you ' + userName + '! Are you ready for one more question? If so, type YES!');
  console.log(question4);
} else if (question3 === 'NO') {
  alert('Well maybe you should give coding a try! Try again =)');
  console.log('Well maybe you should give coding a try! Try again =)');
}

if (question4 === 'YES') {
  var question5 = prompt('Ok! Now that we\'ve been acquainted and know we have similar interests, do you think we can be friends ' + userName + '? YES or NO?').toUpperCase();
  console.log('Ok! Now that we\'ve been acquainted and know we have similar interests, do you think we can be friends ' + userName + '?');
  console.log(question5);
} else if (question4 === 'NO') {
  alert('Well either way, thank you for taking the time to visit my site. Take care ' + userName + '!');
  console.log('Well either way, thank you for taking the time to visit my site. Take care ' + userName + '!');
}

if (question5 === 'YES') {
  alert('Thanks for playing along! I\'ve left some fun facts about me on this site for you to read about. Take care ' + userName + '!');
  console.log('Thanks for playing along! I\'ve left some fun facts about me on this site for you to read about. Take care ' + userName + '!');
} else if (question5 === 'NO') {
  alert('Well either way, thank you for taking the time to visit my site. Take care ' + userName + '!');
  console.log('Well either way, thank you for taking the time to visit my site. Take care ' + userName + '!');
}
