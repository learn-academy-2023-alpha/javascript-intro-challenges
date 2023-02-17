// Consider the variable:
var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
//[ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will add "granola" to the end of array without altering the original array.
groceryList[4]  = "granola"
console.log(groceryList)
//[ 'chips', 'dip', 'cookies', 'soda' ]

// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0, 2))
//[ 'chips', 'dip' ]

// Write the code that will add "beans" to the "chips" and "dip" array.
var chipDipArray = groceryList.slice(0, 2)
chipDipArray.push("beans")
console.log(chipDipArray)
//[ 'chips', 'dip', 'beans' ]

// Consider the variable:

var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift(0))
console.log(numbers)
//[ 0, 2, 4, 6, 8, 10 ]

// Write the code that will add the number 12 to the end of the array.
console.log(numbers.push(12))
console.log(numbers)
//[ 0,  2,  4, 6, 8, 10, 12}

// Write the code that will remove the first number from the array.
console.log(numbers.shift())
console.log(numbers)
//[ 2, 4, 6, 8, 10, 12 ]

// Write the code that will add the number 0 to the beginning of the array without 
// altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var zeroArray = [0]
console.log(zeroArray.concat(numbers))
// [ 0,  2,  4, 6, 8, 10, 12]

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))
//0

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))
//5

// Write the code that returns the number at the third index.
var [num1, num2, num3, num4] = [2, 13, 6, 8]
console.log(num4)
//8

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join())
//y,a,r,r,a

// Write the code that reverses the order of the letters in the characters array and saves it into a 
//variable called charsReversed.
var charsReversed = console.log(characters.reverse())
//[ 'a', 'r', 'r', 'a', 'y' ]

// Write the code that brings all the letters in the charsReversed array together into a string with 
//an asterisk between each letter.
console.log(characters.join("*"))
//a*r*r*a*y

// Write the code that brings all the letters in the charsReversed array together into 
//a string without separators.
console.log(characters.join(""))
//array

// Create two arrays consisting of three first names of your cohort members in each.
var array1 = ["mike", "brandon", "jacob"]
var array2 = ["manny", "marilyn", "aaron"]

// Write the code that sorts the names in alphabetical order.
console.log(array1.sort())
console.log(array2.sort())
//[ 'brandon', 'jacob', 'mike' ]
//[ 'aaron', 'manny', 'marilyn' ]

// Write the code that sorts the names in reverse alphabetical order.
console.log(array1.sort().reverse())
console.log(array2.sort().reverse())
//[ 'mike', 'jacob', 'brandon' ]
//[ 'marilyn', 'manny', 'aaron' ]

// Write the code that sorts all the names in alphabetical order in a single array.
var combinedArray = (array1.concat(array2))
console.log(combinedArray.sort())
//[ 'aaron', 'brandon', 'jacob', 'manny', 'marilyn', 'mike' ]

// Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.
var [odd1, odd2, odd3] = [42, 71, 18]
console.log(odd1, odd2, odd3)
//42 71 18

// Write the code that adds the values from odd indexes into the oddIndexes array.
const newArray = [42, 72, 18]
console.log(newArray.concat(oddIndexes))
//[ 42, 72, 18 ]