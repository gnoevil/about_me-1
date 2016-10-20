'use strict';

var guitarsOwned = ['les paul', 'stratocaster', 'dot'];
var myFaveNum = Math.floor(Math.random() * 30);   //myFaveNum will be a whole number between 1 and 29//

alert('Welcome to my site! We will be playing a small game that builds on itself!');
console.log('Welcome to my site! We will be playing a small game that builds on itself!');
function guessingGame(){
    for (var i = 0; i < 7; i++) {
        if (i === 0) {
            var userName = prompt('First question! What is your name?');
            console.log('First question! What is your name?');

            if (userName === null) {
                var userName = 'n00b';
            }

            alert('Your name is ' + userName + '? Pleasure to meet you, my name is Nikko!');
            console.log('Your name is ' + userName + '? Pleasure to meet you, my name is Nikko!');

        } else if (i === 1) {
            var q2 = prompt('Ok ' + userName + ', I\'m going to ask you some questions. First question, how old are you?');
            console.log('Ok ' + userName + 'I\'m going to ask you some questions. First question, how old are you?');
            console.log(parseInt(q2));
        } else if (i === 2) {
            var q3 = prompt('Thanks for playing along! Next question: What\'s your favorite color?');
            console.log('Thanks for playing along! Next question: What\'s your favorite color?');
            console.log(q3);
        } else if (i === 3) {
            var q4 = prompt('How cool! Ok ' + userName + ', tell me your favorite hobby.');
            console.log('How cool! Ok ' + userName + ', tell me your favorite hobby.');
            console.log(q4);
        } else if (i === 4) {
            var q5 = prompt('Alright! Thanks for playing along thus far, ' + userName + '! In a moment you\'ll have a chance to guess something about me! But I have one more for you first. Name the city you live in!');
            console.log('Alright! Thanks for playing along thus far, ' + userName + '! In a moment you\'ll have a chance to guess something about me! But I have one more for you first. Name the city you live in!');
            console.log(q5);
        } else if (i === 5) {
            alert('Ok, now it\'s time for a guessing game! I want you to try and guess the number I\'m thinking of! Give it a go, but you only get four chances!');
            console.log('Ok, now it\'s time for a guessing game! I want you to try and guess the number I\'m thinking of! Give it a go, but you only get four chances!');
            for (var j = 1; j < 5; j++) {
                var q6 = prompt('What\'s my favorite number?');
                console.log('What\'s my favorite number?');
                console.log(q6);
                var userNumGuess = parseInt(q6);
                if (userNumGuess === myFaveNum) {
                    alert('Nice guess ' + userName + '! One more question!');
                    console.log('Nice guess ' + userName + '! One more question!');
                    guessCorrect = true;
                    break;
                } else if (userNumGuess < myFaveNum) {
                    alert('Oops! My favorite number is higher than your guess, try again!');
                    console.log('Oops! My favorite number is higher than your guess, try again!');
                    console.log(q6);
                } else if (userNumGuess > myFaveNum) {
                    alert('Oops! My favorite number is lower than your guess, try again!');
                    console.log('Oops! My favorite number is lower than your guess, try again!');
                    console.log(q6);
                    var guessCorrect = false;
                } else if (isNaN(userNumGuess)) {
                    alert('Hey! That\'s not a number, but that counts as a guess!');
                    console.log('Hey! That\'s not a number, but that counts as a guess!');
                    var guessCorrect = false;
                }
            }
            var numTries = j;
            if (guessCorrect === false) {
                alert('Uh oh! You didn\'t get the correct answer within 4 tries, it was ' + myFaveNum + '. Try the game over!');
                console.log('Uh oh! You didn\'t get the correct answer within 4 tries, it was ' + myFaveNum + '. Try the game over!');
                break;
            }
        } else if (i === 6) {
            for (var k = 1; k < 7; k++) {
                var q7 = prompt('Last question! I LOVE guitars! Can you guess what kind of guitar I have? I\'ll give you a hint, I have 3 guitars. The correct answer is a famous model of FENDER, GIBSON, or EPIPHONE. I only need the model name. Six attempts!');
                console.log('Last question! I LOVE guitars! Can you guess what kind of guitar I have? I\'ll give you a hint, I have 3 guitars. The correct answer is a famous model of FENDER, GIBSON, or EPIPHONE. I only need the model name. Six attempts!');
                if (isNaN(q7) && q7 !== null) {
                    if (q7.toLowerCase() === guitarsOwned[0] || q7.toLowerCase() === guitarsOwned[1] || q7.toLowerCase() === guitarsOwned[2]) {
                        alert('Wow! You did it ' + userName + '! Thanks for playing along!');
                        console.log('Wow! You did it ' + userName + '! Thanks for playing along!');
                        var guessCorrect2 = true;
                        break;
                    } else if (q7.toLowerCase() !== guitarsOwned[0] || q7.toLowerCase() !== guitarsOwned[1] || q7.toLowerCase() !== guitarsOwned[2]) {
                        alert('Oops! That\'s either a guitar that I don\'t own or it\'s spelled incorrectly, try again!');
                        console.log('Oops! That\'s either a guitar that I don\'t own or it\'s spelled incorrectly, try again!');
                    }
                } else {
                    alert('You should be inputting only letters, this is case insensitive!');
                    console.log('You should be inputting only letters, this is case insensitive!');
                }
            }
            var numTries2 = k;
            if (guessCorrect2 === false) {
                alert('Bummer! Sorry ' + userName + ', you didn\'t get the correct model within 6 tries, maybe play again?');
                console.log('Bummer! Sorry ' + userName + ', you didn\'t get the correct model within 6 tries, maybe play again?');
                break;
            }
        }
    }

    if (guessCorrect2 === true) {
        alert('Ok ' + userName + ', we\'ve made it to the end! Here\'s what you\'ve told me so far. You are: ' + parseInt(q2) + ' years old, your favorite color is: ' + q3 + ', your favorite hobby is: ' + q4 + ', and the city you live in is: ' + q5 + '. Also you answered the first guessing game in: ' + j + ' tries. In the second game you answered correctly in ' + k + ' tries. Oh, what fun it\'s been!');
        console.log('Ok ' + userName + ', we\'ve made it to the end! Here\'s what you\'ve told me so far. You are: ' + parseInt(q2) + ' years old, your favorite color is: ' + q3 + ', your favorite hobby is: ' + q4 + ', and the city you live in is: ' + q5 + '. Also you answered the first guessing game in: ' + j + ' tries. In the second game you answered correctly in ' + k + ' tries. Oh, what fun it\'s been!');
    }
}
guessingGame();
