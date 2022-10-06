var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I hv your name ? ');

var welcomeMessage = "Welcome! " + userName;

console.log(welcomeMessage);