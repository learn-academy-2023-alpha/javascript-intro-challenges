// const greeting = () => {
//     return "Hello there LEARN student!"
// }
// console. log(greeting())

// const greeting = (name) => {
//     return `Hello there ${name}`

// }
// console.log(greeting("Dennis"))

// const tallEnough = (height) => {
//     if (height < 40) {
//         return "Cannot ride the rollercoaster"
//     }
//         else if (height >= 40) {
//         return "buckle up, lets ride" 
//         }
//         else {
//             return 
//         }
    
// }
// console.log(tallEnough("dennis"))

// const multiplier = (num1, num2) => {
//     return num1 * num2
// }
// console.log(multiplier(5, 3))

// Write a function named marco that returns "polo".
const marco = (marco) => {
    return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name} !`
}
console.log(greeting("Dennis"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if (number % 2 == 0){
        return "is even"
    } else{
        return "odd"
    
    }
}
    
console.log(oddOrEven(1))
console.log(oddOrEven(2))


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
 return number * 3
}
console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply ( 4, 7))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleByy = (num1, num2) => {
    let numsx = (num1/num2)
        return `10 is evenly divisible by 5`
    }

console.log(divisibleByy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (score) => {
    if (score > 90){
        return `A`
    } else if (score >=80){
        return`B`
    } else if (score >=70){
        return `C`
    }   else if (score >=60){
    return `D`
    }   else if (score >= 59){
        return `F`
    }   else {
        return `Error`
    }
}
    
    console.log(assignGrade (91))
    console.log(assignGrade (85))
    console.log(assignGrade (77))
    console.log(assignGrade (67))
    console.log(assignGrade ("what"))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (Bella, dennis) => {
}
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".