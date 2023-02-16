// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 > 67/2)
// false

// Does 5 evaluate to the same as "5"?
console.log(5=="5")
// true

// Does 5 strictly equal "5"?
console.log(5==="5")
// false

// Does !3 strictly equal 3?
console.log(!3===3)
// false

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
var learn = "LEARN"
var student = "student"
console.log(learn.length === 5 && student.length === 7)
// = true

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log(learn.length === 5 || student.length === 10 )
// = true

// Does "LEARN" contain the subset "RN"?
console.log(learn.includes("RN"))
// = true

// Does "LEARN" contain the subset "rn"?
console.log(learn.includes("rn"))
// = false

// Does "LEARN"[0] strictly equal "l"?
console.log(learn[0] === "l")
// = false

// Modify the code from the previous question to return true.
console.log(learn[0]==="L")
// = true


// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var price = 100 
if(price < 100 ){
console.log("This is within budget")
}else{
    console.log("This item is too expensive")
}
// this item is too expensive 

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = true

if(hungry === true){
    console.log("Go eat food")
}else{
    console.log("Keep coding")
}
// = Go eat food

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "yellow"

if(trafficLight === "green"){
    console.log("Go")
} else if(trafficLight === "yellow") {
    console.log("Slow Down")
} else {
    console.log("Stop")
}
// = will be caught in second condition statement - "Slow Down"

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var firstNumber = 25
var secondNumber = 37

if(firstNumber === secondNumber) {
    console.log("The number are the same")
} else if (secondNumber > firstNumber){
    console.log(`The Second number is larger which was ${secondNumber}`)
}
// = Second number was larger of 37

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var num = 8

if(num % 2 === 0 && num > 0){
    console.log("even Number")
}else if(num % 2 != 0 && num > 0){
    console.log("Odd Number")
}else {
    console.log("The number is 0 ")
}
// = number is even

// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade = 100

if(grade === 100 ){
    console.log("Perfect score")
} else if(0<grade>100){
    console.log("you have a grade but its not 100%")
}else {
    console.log("No grade available")
}
// = Perfect score

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var dataType = true

if(typeof dataType === "boolean"){
    console.log("variable is a boolean")
} else if (typeof dataType === "string"){
    console.log("Variable is a string")
}else if(typeof dataType === "number") {
 console.log("Variable is a number")
} else {
    console.log("we have no idea what this is")
}

// = var was true so the out put is a boolean


// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "tammylovesdogs!"

if(password.length >= 12 && password.includes("!")){
    console.log("That is a mighty strong password")
} else if(password.length >= 8 || password.includes("1")){
    console.log("That password is strong enough")
}else {
    console.log("this is not a valid password")
}

// = this is a mighty strong password
