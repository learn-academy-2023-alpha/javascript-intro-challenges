// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (yourName) => {
return `Welcome, ${yourName}!`
}
console.log(greeting("Marilyn"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
    if (num % 2 === 1){
        return "odd"
    } else if (num % 2 === 0){
        return "even"
    }
    else {
        return "please input a number"
    }
}
console.log(oddOrEven(4))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (numIn) => {
    return 3 * numIn
}
console.log(triple(5))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(17, 5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (numerator, denonimator) => {
    if (numerator % denonimator === 0){
        return `${numerator} is evenly divisible by ${denonimator}`
    } else if (numerator % denonimator > 0) {
        return `${numerator} is not evenly divisible by ${denonimator}`
    } else {
        return "Please input two numbers"
    }
}
console.log(divisibleBy(12, 5))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (score) => {
    if (score >= 90){
        return "A"
    } else if (score >= 80) {
        return "B"
    }  else if (score >= 70) {
        return "C"
    }  else if (score >= 60) {
        return "D"
    }  else if (score < 60) {
        return "F"
    } else {
        return "not a valid score"
    }
}
console.log(assignGrade(75))



// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
    if (string1.length > string2.length){ 
        return string1
    } else if (string1.length < string2.length) {
        return string2
    } else if (string1.length == string2.length) {
        return "both strings are the same length"
    } else {
        return "please input two strings"
    }
}
console.log(isLonger("marilyn", "christopher"))


// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => {
    if (num1 > num2) { 
        return num1
    } else if (num1 < num2) {
        return num2
    } else if (num1 === num2) {
        return "these numbers are the same"
    } else {
        return "please input two numbers"
    }
}
console.log(greaterNum(100, 50))


// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (prompt) => {
    return prompt.toUpperCase()
}
console.log(yelling("hello world"))



// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.

// Have your function default to returning English.



const helloWorld = (language = "en") => {   // iso 639-1 googled to find language codes
    switch(language) { // switch is a type of loop 
        case "en": // english
            return "Hello World!"
            break; 
        case "es": // spanish
            return "¡Hola Mundo!"
            break;
        case "de": // german
            return "Hallo Welt!"
            break;
        case "fr": // french
            return "Bonjour le Monde!"
            break;
        case "zh": // chinese
            return "你好世界!"
            break;
        default:  // catch all similiar to else
            return `${language} is not a supported language.`
    } 
}
console.log(helloWorld())





// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

// Psuedocode:
// - Check to make sure inputs are accurate arguments
// - If number is 1, outputs the same input
// - Check for specified exceptions (ex. "sheep", "goose", "person", "species")
//      - "us" -> "i" (ex. alumnus -> alumni)
//      - "f" / "fe" -> "ves" (ex. thief -> thieves)
//      - "um" / "on" -> "a" (ex. bacterium -> bacteria)
//      - vowel change (ex. man -> men , goose -> geese)
//      - irregular plural nouns -> do not change at all (ex. rice, deer, moose -> rice, deer, moose)
// - Regular plural nouns -> add "s" (ex. dog -> dogs)
// - Return the output


const pluralizer = (num, singularNoun) => {
    if (isNaN(num)) {      // isNaN checks if first parameter is "Not A Number"
        return "Please input a number."
    } 
    if (typeof singularNoun !== 'string') {    // checking if a string is input for second parameter
        return "Please input a noun."
    }          
}
console.log(pluralizer(2, 2))