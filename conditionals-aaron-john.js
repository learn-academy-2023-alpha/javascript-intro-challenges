// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 / 2)
// Does 5 evaluate to the same as "5"?
console.log(5 == "5")
// Does 5 strictly equal "5"?
console.log(5 === "5")
// Does !3 strictly equal 3?
console.log(!3 === 3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10)
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"))
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"))
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l")
// Modify the code from the previous question to return true.
console.log("LEARN"[0] == "L")
// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 10
    if(item < 100){
        console.log("In budget")
    }
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true
    if(hungry === true){
        console.log("eat food")
    } else{
        console.log("keep coding")
    }
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
    if(trafficLight === "green"){
        console.log("go")
    } else if(trafficLight === "yellow"){
        console.log("slow down")
    } else if(trafficLight === "red"){
        console.log("stop")
    }
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var num1 = 5
var num2 = 10
    if(num1 > num2){
        console.log(num1)
    } else if(num2 > num1){
        console.log(num2)
    } else if(num1 === num2){
        console.log("the numbers are the same")
    }
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num3 = 4
    if(num3 === 0){
        console.log("zero")
    } else if(num3 % 2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 79.9
    if(grade === 100){
        console.log("perfect score")
    } else if(grade === 0){
        console.log("no grade available")
    } else if(grade >= 90 && grade < 100){
        console.log("A")
    } else if(grade >= 80 && grade < 90){
        console.log("B")
    } else if(grade >= 70 && grade < 80){
        console.log("C")
    } else if(grade >= 60 && grade < 70){
        console.log("D")
    } else if(grade > 0 && grade < 60){
        console.log("F")
    }
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var Stretch = true
    console.log(typeof Stretch)
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var password = "password!"
    if(password.length >= 12 && password.includes("!")){
        console.log("That is a mighty strong password!")
    } else if(password.length >= 8 || password.includes("!")){
        console.log("That password is strong enough.")
    } else {
        console.log("That is not a valid password.")
    }
