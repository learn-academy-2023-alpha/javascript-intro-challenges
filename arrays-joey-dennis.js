// 💻 Challenges - Joey & Dennis


var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.

console.log(groceryList.push("soda"))
console.log(groceryList)
// --> 4 [ 'chips', 'dip', 'cookies', 'soda' ]


// Write the code that will add "granola" to the end of array without altering the original array.
console.log(groceryList.push("granola"))
console.log(groceryList)
// --> 5 [ 'chips', 'dip', 'cookies', 'soda', 'granola' ]

// Write the code that will return a subset of the array containing only "chips" and "dip".
groceryList.pop("")
groceryList.pop("")
groceryList.pop("")
console.log(groceryList)
// --> [ 'chips', 'dip' ]


// Write the code that will add "beans" to the "chips" and "dip" array.
groceryList.push("beans")
console.log(groceryList)
// --> [ 'chips', 'dip', 'beans' ]


// Consider the variable:

var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.

numbers.unshift(0)
console.log(numbers)
// --> [ 0, 2, 4, 6, 8, 10 ]

// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// -->[
//     0, 2,  4,  6,
//     8, 10, 12
//   ]

// Write the code that will remove the first number from the array.
numbers.reverse().pop()
numbers.reverse()
console.log(numbers)
// -->[ 2, 4, 6, 8, 10, 12]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

numbers.reverse().push(0)
numbers.reverse()
console.log(numbers)
// --> [
//     0,  2,  4, 6,
//     8, 10, 12
//   ]


var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))
// --> 0


// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))
// --> 5

// Write the code that returns the number at the third index.
console.log(numSet[3])
// --> 8

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))
// --> "yarra"
 
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

var charsReversed = characters.reverse()
console.log(charsReversed)
// --> [ 'a', 'r', 'r', 'a', 'y' ]

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

console.log(charsReversed.join("*"))
// --> a*r*r*a*y

// Write the code that brings all the letters in the charsReversed array together into a string without separators.

console.log(charsReversed.join(""))
// --> array

// Create two arrays consisting of three first names of your cohort members in each.

var cohortNames1 = ["dennis", "joey", "sarah"]
var cohortNames2 = ["cj", "josh", "yahya"]
console.log(cohortNames1)
console.log(cohortNames2)
// --> [ 'dennis', 'joey', 'sarah' ]
// [ 'CJ', 'josh', 'Yahya' ]


// Write the code that sorts the names in alphabetical order.
cohortNames1.sort()
console.log(cohortNames1)
cohortNames2.sort()
console.log(cohortNames2)
// --> [ 'dennis', 'joey', 'sarah' ]
// [ 'cj', 'josh', 'yahya' ]

// Write the code that sorts the names in reverse alphabetical order.
console.log(cohortNames1.sort().reverse())
console.log(cohortNames2.sort().reverse())
// --> [ 'sarah', 'joey', 'dennis' ]
// [ 'yahya', 'josh', 'cj' ]

// Write the code that sorts all the names in alphabetical order in a single array.
var allNames = cohortNames1.concat(cohortNames2)
allNames.sort()
console.log(allNames)
// --> [ 'cj', 'dennis', 'joey', 'josh', 'sarah', 'yahya' ]

// Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.

// ________ we tried :(___________
// for(let i = 0; i<6; i++){
//    if(i = 1 || 3 || 5){
//     oddIndexes.push(numbers[i])
//     i++
//    }

// }
// console.log(oddIndexes)

oddIndexes.push(numbers[1])
oddIndexes.push(numbers[3])
oddIndexes.push(numbers[5])
console.log(oddIndexes)

// --> [ 221, 7, 87 ]





// Write the code that adds the values from odd indexes into the oddIndexes array.

console.log(oddIndexes)
// --> [ 221, 7, 87 ]