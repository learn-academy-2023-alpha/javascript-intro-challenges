// Write a function named marco that returns "polo".
// const marco = () => {
//     return "polo"
// }
// console.log(marco())
// output: polo

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (yourName) => {
//     return `Welcome, ${yourName}!`
// }
// console.log(greeting("Leo"));
// output: Welcome, Leo!

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//     if (number % 2 !== 0){
//         return "this number is odd"
//     } else if (number === 0){
//         return "this number is zero"
//     } else {
//         return "this number is even"
//     }
// }
// console.log(oddOrEven(0))
// output: "this number is zero"

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (nums) => {
//     return nums * 3
// }
// console.log(triple(5))
// output: 12

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (numOne, numTwo) => {
//     return numOne * numTwo
// }
// console.log(multiply(5, 6));
// output: 30

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (numberOne, numberTwo) => {
//     if (numberOne / numberTwo % 2 === 0){
//         return `${numberOne} is evenly divisible by ${numberTwo}`
//     } else {
//         return `${numberOne} is not evenly divisible by ${numberTwo}`
//     }
// }
// console.log(divisibleBy(12, 5));
// output: 12 is not evenly divisible by 5

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (score) => {
//     if (score === 10){
//         return "A"
//     } else if (score < 10 && score >= 8) {
//         return "B"
//     } else if (score < 8 && score >= 6) {
//         return "C"
//     } else if (score < 6 && score >= 4) {
//         return "D"
//     } else if (score < 4 && score >= 0) {
//         return "F"
//     } else {
//         return "please input a number between 0-10"
//     }    
// }    
// console.log(assignGrade(20));
// output: please input a number between 0-10

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (stringOne, stringTwo) => {
//     if (stringOne.length > stringTwo.length){
//         return `${stringOne}`
//     } else {
//         return `${stringTwo}`
//     }
// }
// console.log(isLonger("short", "shortest"));
// output: shortest

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (number3, number4) => {
//     if (number3 > number4){
//         return number3
//     } else {
//         return number4
//     }
// }
// console.log(greaterNum(40,10));
// output: 40

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const yelling = (words) => {
//     return words.toUpperCase()
// }
// console.log(yelling("hello"))
// output: HELLO

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// const helloWorld = (language) => {
//     if (language === "es"){
//         return "hola mundo!"
//     } else if (language === "de"){
//         return "hallo welt!"
//     } else if (language === "en"){
//         return "hello World!"
//     } else if (language === "pr"){
//         return "ola mundo!"
//     } else if (language === "fr"){
//         return "bonjour le monde!"
//     } else {
//         return "please in put one of these languages: es, de, en, pr, fr"
//     }
// }
// console.log(helloWorld("hello"));
// output: please in put one of these languages: es, de, en, pr, fr


// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
const pluralizer = (number5, noun) => {
    if (number5 <= 1){
        return `${number5} ${noun}`
    } else if (number5 > 1){
        return `${number5} ${noun}s`
    }
    if (number5 === 1 && noun === "people"){
        return `${number5} "person"`
    }
}
console.log(pluralizer(1, "people"));