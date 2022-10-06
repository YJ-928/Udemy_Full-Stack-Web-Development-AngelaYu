var readlineSync = require('readline-sync');

// input
var myAge = readlineSync.question("Am I older than 25 ?");

console.log("You entered " + myAge);
// processing
if (myAge === "no")
{
    // output
    console.log("You are right!");
}
else
{
    // output
    console.log("You are wrong!");
}