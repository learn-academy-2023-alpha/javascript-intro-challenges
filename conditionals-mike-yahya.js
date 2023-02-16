// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 62 / 2) //output: false
// Does 5 evaluate to the same as "5"?
console.log(5 == "5") //output: true
// Does 5 strictly equal "5"?
console.log(5 === "5") //output: false
// Does !3 strictly equal 3?
console.log(!3 === 3) //output: false
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "student".length === 7) //output: true
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "student".length === 10) //output: true
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN")) //output: true
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn")) //output: false
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l") //output: false
// Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L") //output: true

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 99
if(item <= 100){
    console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = "yes"
if(hungry === "yes"){
    console.log("eat food")
} else {
    console.log("keep coding")
} 
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
if(trafficLight === "green"){
    console.log("go")
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else if (trafficLight === "red") {
console.log("stop")
} else { 
    console.log("where is the light?")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var numOne = 99
var numTwo = 100
if (numOne > numTwo){
console.log("this number is greater")
} else if (numOne === numTwo){
    console.log("the numbers are the same")
} else {
    console.log("no number")
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = 29
if (num % 2 == 0) {
    console.log("the number is even")
}
else if (num % 2 == 1) {
    console.log("the number is odd")
}
else if (num === 0){
    console.log("the number is equal to 0")
}
else {
    console.log("not a whole number, try again")
}

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 45
if (grade === 100){
    console.log("Perfect score")
}
else if (grade >= 90){
    console.log("You get an A, great job")
}
else if (grade >= 80 && grade < 90){
    console.log("You get an B, good job")
}
else if (grade >= 70 && grade < 80){
        console.log("You get an C, you did ok")
    }
else if (grade === 0) {
console.log("no grade available")
}
else {
    console.log("Your dog ate your homework?")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
console.log(typeof true)

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var password = "javascriptconditionals!"
if (password.length >=12 && password.includes("!")) {
    console.log("That is a mighty strong password!")
}
else if (password.length >=8 || password.includes("!")) {
    console.log("That password is strong enough")
}
else {
    console.log("That is not a valid password")
}