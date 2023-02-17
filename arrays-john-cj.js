// Consider the variable:

var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
// [ 'chips', 'dip', 'cookies', 'soda' ]
// Write the code that will add "granola" to the end of array without altering the original array.
console.log(groceryList.concat("granola"))
// [ 'chips', 'dip', 'cookies', 'soda', 'granola' ]
// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList[0], groceryList[1])
// chips dip
// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(groceryList.pop())
console.log(groceryList.pop())
console.log(groceryList.push("beans"))
console.log(groceryList)
// [ 'chips', 'dip', 'beans' ]

// Consider the variable:

var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift(0))
console.log(numbers)
// 6
// [ 0, 2, 4, 6, 8, 10 ]
// Write the code that will add the number 12 to the end of the array.
console.log(numbers.push(12))
console.log(numbers)
// 7
// [0,  2,  4, 6,8, 10, 12 ]
// Write the code that will remove the first number from the array.
console.log(numbers.shift())
console.log(numbers)
// 0
// [ 2, 4, 6, 8, 10, 12 ]
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var extraNum = [0]
console.log(extraNum.concat(numbers))
// 0,  2,  4, 6, 8, 10, 12]

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet[0])
// 2
// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet[5])
// 2
// Write the code that returns the number at the third index.
console.log(numSet[2])
// 6

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))
// yarra
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// var charsReversed = characters.reverse().join("")
//     console.log(charsReversed)
// array
// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// var charsReversed = characters.reverse().join("*")
//     console.log(charsReversed)
//    a*r*r*a*y    
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
var charsReversed = characters.reverse().join("")
    console.log(charsReversed)
// array    
// Create two arrays consisting of three first names of your cohort members in each.
var alphaOne = ["john", "cj", "dennis"]
var alphaTwo = ["joel", "josh", "jacob"]
console.log(alphaOne, alphaTwo)
// [ 'john', 'cj', 'dennis' ] [ 'joel', 'josh', 'jacob' ]
// Write the code that sorts the names in alphabetical order.
console.log(alphaOne.sort(), alphaTwo.sort())
// [ 'cj', 'dennis', 'john' ] [ 'jacob', 'joel', 'josh' ]
// Write the code that sorts the names in reverse alphabetical order.
console.log(alphaOne.sort().reverse(), alphaTwo.sort().reverse())
// [ 'john', 'dennis', 'cj' ] [ 'josh', 'joel', 'jacob' ]
// Write the code that sorts all the names in alphabetical order in a single array.
console.log(alphaOne.concat(alphaTwo).sort())
// [ 'cj', 'dennis', 'jacob', 'joel', 'john', 'josh' ]

// Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.
console.log(numbers[1], [3], [5])
// 221 [ 3 ] [ 5 ]
// Write the code that adds the values from odd indexes into the oddIndexes array.
// console.log(numbers.join())
var oddIndexes = [numbers[1], [3], [5]]
console.log(oddIndexes)
// [ 221, [ 3 ], [ 5 ] ]