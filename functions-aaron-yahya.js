// Write a function named marco that returns "polo".
// const marco = () => {
//     return "polo"
// }
// console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `Welcome, ${name}!`
// }
// console.log(greeting("Yahya"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (numOddOrEven) => {
//     if(numOddOrEven % 2 !== 0){
//         return "This number is odd"
//     } else return "This number is even"
// }
// console.log(oddOrEven(42))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (numTriple) =>{
//     return numTriple * 3
// }
// console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) =>{
//     return num1 * num2
// }
// console.log(multiply(2,90))


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) =>{
//     if(num1 % num2 == 0){
//         return `${num1} is evenly divisible by ${num2}`
//     } else{ return `${num1} is NOT evenly divisible by ${num2}`
//     }
// }
// console.log(divisibleBy(96, 13))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (score) =>{
//     if(score === 100){
//         return "perfect score"
//     } else if(score === 0){
//         return "no grade available"
//     } else if(score >= 90 && score < 100){
//         return "A"
//     } else if(score >= 80 && score < 90){
//         return "B"
//     } else if(score >= 70 && score < 80){
//         return "C"
//     } else if(score >= 60 && score < 70){
//         return "D"
//     } else if(score > 0 && score < 60){
//         return"F"
//     }
// }
// console.log(assignGrade(33))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (string1, string2) =>{
//     if(string1.length > string2.length){
//         // You CAN use string interpolation, but if you are already returning a var that is a string, it is unneeded
//         return `${string1}`
//     } else {
//         return string2
//     }
// }
// console.log(isLonger("short","rly"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) =>{
//     if(num1>num2){
//         return num1
//     } else{ return num2
//     }
// }
// console.log(greaterNum(9001,9000))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const yelling = (string) =>{
//     return string.toUpperCase()
// }
// console.log(yelling("now I am yelling"))



// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer
// english(en), spanish(es), french(fr), italian(it), german(de)

// const helloWorld = (langCode) =>{
//     if (langCode ==="es"){
//         return "¡Hola Mundo!"
//     } else if (langCode === "fr"){
//         return "Bonjour le Monde"
//         } else if (langCode === "it"){
//             return "Ciao Mondo"
//         } else if (langCode === "de"){
//             return "Hallo Welt"
//         } else {
//             return "Hello World!"
//         }
//     }
// console.log(helloWorld("ff"))


// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"

// create two arrays with singular and plural versions of words with matching indices
// if noun entered into pluralizer is in the array, give the correct item 

// Create a set of arrays that include singular and plural forms of nouns, respectively at the same index locations
const pluralNoun = ["people", "dogs", "cats", "sheep", "geese", "species"]
const singulNoun = ["person", "dog", "cat", "sheep", "goose", "species"]

const pluralizer = (num, noun) =>{
    // grab the index of the noun, then return the index of the opposite array this works 
    if (pluralNoun.includes(noun) && num == 1){
        let i = pluralNoun.indexOf(noun)
        return `${num} ${singulNoun[i]} `
        // if noun is plural, and is greater than one, keep it plural, and return as normal
    } else if (pluralNoun.includes(noun) && num > 1){
        let i = pluralNoun.indexOf(noun)
        return `${num} ${pluralNoun[i]} `
        // if noun is plural, but there are none, return as 0 plural
    } else if (pluralNoun.includes(noun) && num == 0){
        let i = pluralNoun.indexOf(noun)
        return `No ${pluralNoun[i]} `
        // if noun is singular, and is number is singular, keep it singular and return
    }   else  if (singulNoun.includes(noun) && num == 1){
        let i = singulNoun.indexOf(noun)
        return `${num} ${singulNoun[i]} `
        // if noun is singular, and is greater than one, change it plural, and return as normal
    } else if (singulNoun.includes(noun) && num > 1){
        let i = singulNoun.indexOf(noun)
        return `${num} ${pluralNoun[i]} `
        // if noun is suingular and is zero, return 'no (plural form)
    } else if (singulNoun.includes(noun) && num == 0){
        let i = singulNoun.indexOf(noun)
        return `No ${pluralNoun[i]} `

        // general purpose 
    } else if(num == 0){
        return `No ${noun}s`
    } else if(num > 1) {
        return `${num} ${noun}s`
} else{
    return `${num} ${noun}`
} 
}
console.log(pluralizer(34, "dragons"))
