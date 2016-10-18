'use strict';

var welcome = alert('Welcome to my site! We will be playing a guessing game that builds on itself!');
console.log('Welcome to my site! We will be playing a guessing game that builds on itself!');

var userName = prompt('First question! What is your name?');
console.log('First question! What is your name?');
console.log(userName);

if (userName === null) {
  var userName = 'n00b';
}

alert('Your name is ' + userName + '? Pleasure to meet you, my name is Nikko!');
console.log('Your name is ' + userName + '? Pleasure to meet you, my name is Nikko!');

var question2 = confirm('Ok, ' + userName + ' the rest of our questions will be in a YES or NO format. Are you cool with that? (select OK for YES)');
console.log('Ok, ' + userName + ' the rest of our questions will be in a YES or NO format. Are you cool with that? (select OK for YES)');
console.log(question2);

if (question2) {
  var question3 = confirm('Thanks for playing along! Next question: Are you interested in coding? Remember, OK means YES!');
  console.log('Thanks for playing along! Next question: Are you interested in coding? Remember, OK means YES!');
  console.log(question3);
} else if (question2 === false) {
  alert('Well my friend, you don\'t have to play!');
  console.log('Well my friend, you don\'t have to play!');
}

if (question3) {
  var question4 = confirm('Awesome, me too! I\'ve learned quite a bit about you ' + userName + '! Are you ready for one more question? If so, click OK');
  console.log('Awesome, me too! I\'ve learned quite a bit about you ' + userName + '! Are you ready for one more question? If so, click OK');
  console.log(question4);
} else if (question3 === false) {
  alert('Giving up now? You were almost done!');
  console.log('Giving up now? You were almost done!');
}

if (question4) {
  var question5 = confirm('Ok! Now that we\'ve been acquainted and know we have similar interests, do you think we can be friends ' + userName + '?');
  console.log('Ok! Now that we\'ve been acquainted and know we have similar interests, do you think we can be friends ' + userName + '?');
  console.log(question5);
} else if (question4 === false) {
  alert('Well either way, thank you for taking the time to visit my site. Take care ' + userName + '!');
  console.log('Well either way, thank you for taking the time to visit my site. Take care ' + userName + '!');
}

if (question5) {
  alert('Thanks for playing along! I\'ve left some fun facts about me on this site for you to read about. Take care ' + userName + '!');
  console.log('Thanks for playing along! I\'ve left some fun facts about me on this site for you to read about. Take care ' + userName + '!');
}
