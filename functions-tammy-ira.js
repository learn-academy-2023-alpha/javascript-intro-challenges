// Write a function named marco that returns "polo".
const marco = () => {return "polo"}
console.log(marco())
//Output: Polo

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (personName) => {return `welcome ${personName}`}
console.log(greeting("Ira")) 
//output: Welcome Ira

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if ( number % 2 == 0) {return "even"}
    else if (number %2 !== 0) {return "odd"}
    else ("return error")
}
console.log(oddOrEven(8))
// output: Even

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (num) => {
    return (num * 3)
}
console.log(triple(6))
//output: 18

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
   return num1 * num2
}
console.log(multiply(4,7))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num3, num4) => {
    if (num3 % num4 == 0) {
        return `${num3} is evenly divisible by ${num4}`
    } else {return "Error"}
}
console.log(divisibleBy(10, 5))
// output: 10 is easily divisible by 5

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (score) => {
 if (score === 100) { return "you got a perfect score"

} else if (score > 89 && score < 100 ){return "You got an A"}
  else if (score > 79 && score < 89) {return "you got a B"}
  else if (score > 69 && score < 80) {return "you got a C"}
  else {return "you did not pass"}
}
console.log(assignGrade(80))
// Output Yout got a B


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
    if (string1.length > string2.length) {return `${string1}`
}   else if (string2.length > string1.length) {return `${string2}`
}   else if (string2.length == string1.length) {return "These equal the same amount"}
    else {return "error"} 
}
console.log(isLonger("Tammy", "Ira"))
//output:Tammy

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => { 
    if (num1 > num2) {return `${num1}`}
    else if (num2 > num1) {return `${num2}`}
    else if (num1 == num2) {return "these are equal"
 } else {return "Error"}

}
console.log(greaterNum(28, 39))
//output: 39

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (wordHere) => {
    return wordHere.toUpperCase()
}
console.log(yelling("finished"))