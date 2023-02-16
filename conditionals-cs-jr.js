// Is 34 divided by 3 greater than 67 divided by 2? false
console.log((34/3)>(67/2)) 
// Does 5 evaluate to the same as "5"? loosely
console.log(5 == "5")
console.log(5 === "5")
// Does 5 strictly equal "5"? false
console.log(5 === "5")
// Does !3 strictly equal 3? false
console.log(!3 === 3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7? true
console.log("LEARN".length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10? true
console.log("LEARN".length === 5 || "Student".length === 10)
// Does "LEARN" contain the subset "RN"? true
console.log("LEARN".includes("RN"))
// Does "LEARN" contain the subset "rn"? false
console.log("LEARN".includes("rn"))
// Does "LEARN"[0] strictly equal "l"? false
console.log("LEARN"[0] === "l")
// Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L")

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var items = 50
if(items < 100){
       console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false
if(hungry){
    console.log("eat food")
}else{
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "blue"
if(trafficLight === "green"){
    console.log("go")
}else if(trafficLight === "yellow"){
    console.log("slow down")
}else if(trafficLight === "red"){
    console.log("stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var numberOne = 75
var numberTwo = 50

if(numberOne === numberTwo){
    console.log("the numbers are the same")
}else if(numberOne < numberTwo){
    console.log(numberTwo)
}else if(numberOne > numberTwo){
    console.log(numberOne)
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var numberThree = "cat"

if(numberThree === 0){
    console.log("zero")
}else if (numberThree % 2 === 1){
    console.log("odd")
}else if (numberThree % 2 === 0){
    console.log("even")
} else {
    console.log("try again")
}