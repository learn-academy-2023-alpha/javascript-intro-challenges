// Is 34 divided by 3 greater than 67 divided by 2?
var num = 34
console.log(num / 3 > 67 / 2); //output: false
// Does 5 evaluate to the same as "5"?
console.log("5" == 5); // output: == true
// Does 5 strictly equal "5"?
console.log("5" === 5); // output: false
// Does !3 strictly equal 3?
console.log(!3 === 3); // output: false
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5, "Student".length === 7); // output: true, true
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5, "Student". length === 10); // output: true, false
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN")); //output: true
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn")); //output: false
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l"); // output: false
// Modify the code from the previous question to return true.
console.log(!("LEARN" === "l")) // output: true

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var price = 95
if(price < 100){
    console.log("in budget")
} // output: in budget
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var working = "hungry"
if (working === "hungry"){console.log("eat food")}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.