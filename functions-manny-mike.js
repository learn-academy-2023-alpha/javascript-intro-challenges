// Write a function named marco that returns "polo".

const marco = () =>{    //declare function with no paramaters passed in argument
    return "polo"       //return the string "polo"
}
console.log(marco())    //invoke function marco inside console.log to show output

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (name) =>{         //declare function greeting with parameter name passed in argument
    return `Welcome, ${name}!`      //string interpolation returning the ouput message 
}
console.log(greeting("Mike"))       //invoke function greeting inside console.log with string "Mike" parameter passed in function

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (number) =>{      //declare function oddOrEven with paramter number passed in argument
    if(number % 2 === 0){           //Conditional statement checking if number is even, using modulo to compare remainder to 0
        return `${number} is even`  //string interpolation to return output message 
    } else if(number % 2 === 1){    //conditional statement checking if number is odd, using modulo to compare remainder to 1
        return `${number} is odd`   //string interpolation to return output message
    } else{
        return "Error: Please input a number"   //Catch-all conditional to output error message
    }
}
console.log(oddOrEven(2))           //invoke function and pass in even number to check first conditional statement
console.log(oddOrEven(3))           //invoke function and pass in odd number to check second conditional statement
console.log(oddOrEven("hi"))        //invoke function and pass in string to check error message

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (num) =>{            //declare function triple with parameter num passed in argument
    return num * 3                  //Output: num multiplied by 3
}
console.log(triple(5))              //invoke function and pass in a number

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1, num2) =>{   //declare function multiply with two parameters passed in argument
    return num1 * num2              //Ouput: num1 multiplied by num2
}
console.log(multiply(5, 5))         //invoke function and pass in two numbers

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the 
// second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (number1, number2) =>{  //declare function divisibleBy with two parameters passed in argument
    if(number1 % number2 === 0){            //conditional statement to check if number1 is divisble by number2, using modulo and comparing remainder to 0
        return `${number1} is evenly divisible by ${number2}`   //string interpolation to return output
    } else if(number1 % number2 === 1){                         //conditional statement to check if number1 is not divisble by number2, using modulo and comparing remainder to 1
        return `${number1} is not divisble by ${number2}`       //string interpolation to return output
    } else{
        return "Error: Please input two numbers"                //Catch-all error message if anything other than numbers are inputed in function call
    }
}
console.log(divisibleBy(10, 5))             //invoke function and pass in two numbers that are divisble by each other
console.log(divisibleBy(7, 3))              //invoke function and pass in two numbers that are not divisble by each other
console.log(divisibleBy("hi", "bye"))       //invoke function and pass in two strings to check error message

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (score) =>{
    if(score >= 90 && score <= 100){
        return "A"
    } else if(score >= 80 && score <= 89){
        return "B"
    } else if(score >= 70 && score <= 79){
        return "C"
    } else{
        return "You failed, study more next time!"
    }
}
console.log(assignGrade(100))
console.log(assignGrade(90))
console.log(assignGrade(89))
console.log(assignGrade(80))
console.log(assignGrade(79))
console.log(assignGrade(70))
console.log(assignGrade(65))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (string1, string2) =>{
    if(string1.length > string2.length){
        return string1
    } else if(string2.length > string1.length){
        return string2
    } else if(string1.length ===  string2.length){
        return `${string1} and ${string2} have the same amount characters or type coercion if two numbers inputted`
    } else{
        return "Erorr: Please input strings"
    }
}
console.log(isLonger("good", "morning"))
console.log(isLonger("apples", "hi"))
console.log(isLonger("apples", "apples"))
//console.log(isLonger("", ""))
console.log(isLonger(5, 6)) //type coercion

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (n1, n2) => {
    if(n1 > n2){
        return n1
    } else if(n1 < n2){
        return n2
    } else if(n1 === n2){
        return `${n1} and ${n2} are equal`
    } else{
        return "Error: Please input two numbers"
    }
}
console.log(greaterNum(5, 2))
console.log(greaterNum(2, 6))
console.log(greaterNum(2, 2))
console.log(greaterNum("hi", "bye")) //type coercion

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// Question sounds simple, but can be misleading. Simple use of toUpperCase would give you correct output. But, what if user 
// inputs a number? boolean value? typeof operator checks if input is a string. 

const yelling = (message) =>{
    if(typeof message === "string"){
        return message.toUpperCase()
    } else{
        return "Error: Input is not a string"
    }
}
console.log(yelling("good morning! how are you today?"))    //invoke function to check if input returns uppercase letters
console.log(yelling(5))     //invoke function to check if typeof operator checks if parameter is a string, expect error


// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. 
//Ensure you function works for at least 5 languages. Have your function default to returning English.

const world = "Hello World!"        //global const variable for function helloWorld to use

const helloWorld = (code) =>{
  if(code === "es"){
    return "Hola Mundo!"
  } else if(code === "de"){
    return "Hallo Welt!"
  } else if(code === "fr"){
    return "Bonjour le monde!"
  } else if(code === "it"){
    return "Ciao mondo!"
  } else{
    return world            //Ouputs by default
  }
}
console.log(helloWorld("fr")) //invoke function to check if correct language code passed works
console.log(helloWorld("")) //invoke function to check if default output works

// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// // Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const pluralizer = (numberOne, noun) => {
    if(numberOne === 1){
    return noun === "goose" ? `${numberOne} geese` : `${numberOne} what are geese?`
    } else if(numberOne === 2){
        return noun === "child" ? `${numberOne} children` : `${numberOne} what are children?`
    } else if(numberOne === 3){
        return noun === "person" ? `${numberOne} people` : `${numberOne} what are people?`
    } else if(numberOne === 4){
        return noun === "species" ? `${numberOne} species` : `${numberOne} what are species?`
    } else {
        return "Error: First input is not a number"
    }
}   

console.log(pluralizer(1, "goose")) //invoke function to check first conditional
console.log(pluralizer(2, "child")) //invoke function to check second conditional truthy condition
console.log(pluralizer(2, "children")) //invoke function to check second conditional falsey condition
console.log(pluralizer("hi", "species")) //invoke function to check if number input is correct, error expected 