// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement
*/

// TEST DATA 1:
let massMark, heightMark;
massMark = 78;
heightMark = 1.69;

let massJohn, heightJohn;
massJohn = 92;
heightJohn = 1.95;

let markBMI = massMark / (heightMark ** 2);
let johnBMI = massJohn / (heightJohn ** 2);

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
    
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log("John's BMI is higher than Mark's!");
    
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// TEST DATA 2:
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

markBMI = massMark / (heightMark ** 2);
johnBMI = massJohn / (heightJohn ** 2);

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");

    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log("John's BMI is higher than Mark's!");

    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}