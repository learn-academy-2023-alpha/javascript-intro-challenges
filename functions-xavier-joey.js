// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
//psuedocode: function name: marco 
//return: "polo"
// const marco = ()=>{
//    return "polo"


// } 
// console.log(marco())
//----polo

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
//psuedocode : function name : greeting
//parameter: person's name 
//return: "welcomm, <person's name here>!"


// const greeting = (personName)=> {
//     return`Welcome, ${personName}`
// }
// console.log(greeting("Xavier"))

//---output : Welcome, Xavier 
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//psuedocode: input : function :oddOrEven
//Conditonal statment: to check on which number is inputed
//output: check to see wheter number is odd or even.

// const oddOrEven = (num)=>{
//     if (num%2==0){
//         return`${num} is an even number`
//     } else if(num%2!==0) {   
//         return`${num} is an odd number`

//     } else {
//         return`${num} this is not a number`
//     }
// } 
// console.log(oddOrEven(2))
// console.log(oddOrEven(5))

//output- 2 is even
//output- 5 is odd

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//psuedocode: function name: triple
//parameter: will be a number
//will multiple paramter by number 3
//output will be results of function

// const triple = (num)=>{
//     return`${num*3}`
// }
//  console.log(triple(3))

 //output-- 9

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
//psuedocode: input: Function- will be named multiply
//parameter: will take two numbers and multiply them together
//output: will be result of two numbers mulitplied
// const multiply = (num1,num2)=> {
//     return`${num1*num2}`
// } 
// console.log(multiply(5,5))

// //output--25


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//psuedocode : function name : divisibleBy 
//parameters: will have two numbers
// return: see wheter first number is evenly divisble by second number. 
//output: will be true or false

// const divisibleBy =(num1,num2)=> {
//     if(num1%num2==0){
//         return`${num1} is evenly divisble by ${num2}`
//     } 
//     else {
//         return`${num1} is not divisible by ${num2}`
//     }
// } 
// console.log(divisibleBy(25,5))
// console.log(divisibleBy(25,6))

//output--> 25 is divisble by 5
//output--> 25 is not divisble by 6


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
//psuedocode: function name: assignGrade
//Parameters: single number 
//conditonal statment: to see which grade the number falls into
//output: grade correlated with number chosen

// const assignGrade=(num)=>{
//     if(num==100){
//         return`you got 100 %`
//     }
//     else if(num>=90){
//         return`you got an A`
//     }
//     else if(num>=80){
//         return`you got an B`
//     } 
//      else if(num>=70){
//     return`you got an C`
//     } else 
//     return `you need to study !`
 
// }
// console.log(assignGrade(100))
// console.log(assignGrade(80))
// console.log(assignGrade(70))
// console.log(assignGrade(10))


//output----->
// you got 100 %
// you got an B
// you got an C
// you need to study !


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
//psuedocode: function name : isLonger
//parameters: two strings
//conditonal: comparing strings lengths
//output: longest string in comparsion

// const isLonger=(string1,string2)=>{
//     if(string1.length>string2.length){
//         return`${string1} is longer`
//      }
//       else{
//             return`${string2}  is longer`
        
//     }
// } 
// console.log(isLonger("Xavier", "Joey"))
// console.log(isLonger("Sleepy Joe", "Mr Putin"))

//output-->Xavier is longer
//Sleepy Joe is longer

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
//psuedocode: Function name: greaterNum
//parameters: two numbers
//output: returns whichever numbers is greater (higher) number.

// const greaterNum=(num1,num2)=> {
//     if (num1>num2) {
//         return`${num1} is greater`
//     }
//     else {
//         return`${num2} is greater`
//     }
// }
// console.log(greaterNum(20,67))
// console.log(greaterNum(23,83))

// // -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
//psuedocode: function name: yelling
//parameters: uses string as argument
//output: returns string in all uppercase letters

// const yelling=(yellLoud)=>{
//     return`${yellLoud.toUpperCase()}`

// } 
// console.log(yelling("hello"))

//output--> HELLO
