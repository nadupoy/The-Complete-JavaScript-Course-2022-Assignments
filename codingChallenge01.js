////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John

TEST DATA 1: Mark weighs 78kg and is 1.69m tall.
John weighs 92kg and is 1.95m tall.
TEST DATA 2: Mark weighs 95kg and is 1.88m tall.
John weighs 85kg and is 1.76m tall.
*/

// TEST DATA 1:
let massMark, heightMark;
massMark = 78;
heightMark = 1.69;

let massJohn, heightJohn;
massJohn = 92;
heightJohn = 1.95;

let markBMI = massMark / (heightMark * heightMark);
let johnBMI = massJohn / (heightJohn * heightJohn);

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// TEST DATA 2:
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

markBMI = massMark / (heightMark * heightMark);
johnBMI = massJohn / (heightJohn * heightJohn);

console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);