// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
// Does 5 evaluate to the same as "5"?
// Does 5 strictly equal "5"?
// Does !3 strictly equal 3?
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
// Does "LEARN" contain the subset "RN"?
// Does "LEARN" contain the subset "rn"?
// Does "LEARN"[0] strictly equal "l"?
// Modify the code from the previous question to return true.
// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.


// Is 34 divided by 3 greater than 67 divided by 2?
// var num = (34 / 3) > (67 / 2)
// console.log(num)
// ---> false

// Does 5 evaluate to the same as "5"?
// var num = 5
// var str = "5"
// console.log(num === str)
// ---> false

// Does !3 strictly equal 3?

// var num = !3
// console.log(num === 3)
// ---> false

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?


// console.log(('LEARN'.length == 5) && ('student'.length === 7))
// ---> true


// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

// console.log(("LEARN".length === 5) || ('student'.length === 10))
// ---> false

// Does "LEARN" contain the subset "RN"?

// console.log('LEARN'.includes('RN'))
// ---> true

// Does "LEARN" contain the subset "rn"?

// console.log('LEARN'.includes('rn'))
// ---> false

// Does "LEARN"[0] strictly equal "l"?

// console.log('LEARN'[0] === 'l')
// ---> false

// Modify the code from the previous question to return true.
// console.log('LEARN'[0] === 'L')
// ---> true

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// var num = 100

// if (num === 100){
//     console.log('in budget')
// }

// ---> 'in budget'

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

// var hungry = true

// if (hungry === true){
//     console.log('eat food')
//   } else if (hungry === false) {console.log('keep codin')}

// ---> 'eat food'

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

// var trafficLight = 'green'

// if (trafficLight === 'green'){
//     console.log('go')
// } else if (trafficLight === "yellow"){
//     console.log('slow down')
// } else if (trafficLight === 'red'){
//     console.log('stop')
// }

// --->'go'

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// var num1 = 200
// var num2 = 200

// if (num1 < num2){
//     console.log(num2)
//  } else if (num1 > num2){ 
//     console.log(num1)
// } else if (num1 === num2){
//     console.log('the numbers are the same')
// }
// ---> 'the numbers are the same'


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var num = 