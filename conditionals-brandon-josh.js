//set one

// Is 34 divided by 3 greater than 67 divided by 2?
console.log((34 / 3)>(67 / 2)); //output: False
// Does 5 evaluate to the same as "5"?
console.log(eval(5) === eval('5')); //output: True
// Does 5 strictly equal "5"?
console.log(5 === '5'); //output: False
// Does !3 strictly equal 3?
console.log(!3 === 3); //output: False
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log(("LEARN".length === 5) && ("Student".length === 7)); //output :True
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log(("LEARN".length === 5) || ("Student".length === 10)); //output: True
// Does "LEARN" contain the subset "RN"?
console.log(("LEARN".includes("RN"))); //output: True
// Does "LEARN" contain the subset "rn"?
console.log(("LEARN".includes("rn"))); //output: False
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l"); //output: False
// Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L"); //output: True



// SET 2

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 100
if (item <= 100) {
    console.log("in budget");
} //output: in budget

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true
if (hungry === true) {
    console.log("eat food");
} else {
    console.log("keep coding");
} //output: eat food

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = 'blue'
if (trafficLight === 'green') {
    console.log('go');
} else if (trafficLight === 'yellow') {
    console.log('slow down');
} else if (trafficLight === 'red') {
    console.log('stop');
} else {
    console.log('call Gene to fix it');
} //output: call Gene to fix it

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var numOne = 34;
var numTwo = 34;

if (numOne > numTwo) {
    console.log(numOne);
} else if (numOne === numTwo) {
    console.log('the numbers are the same');
} else {
    console.log(numTwo);
} //output: the numbers are the same


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = 55

if (num === 0) {
    console.log(0);
} else if (num & 1) {
    console.log('odd');
} else {
    console.log('even');
} //output: odd


//stretch goals

var gradePercentage = 100
// 100 = perfect score
// 90-99 = A
// 80-89 = B
// 70-79 = C
// 60-69 = D
// 1-59 = F
// 0 = no grade available

if (gradePercentage === 100) {
    console.log('perfect score');
} else if ()