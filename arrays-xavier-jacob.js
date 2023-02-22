// var groceryList = ["chips", "dip", "cookies"]
// // Write the code that will add "soda" to the end of the original array.
// // console.log(groceryList.push("soda"))
// // console.log(groceryList)

// // Write the code that will add "granola" to the end of array without altering the original array.
// var extraGranola = ["granola"]
// console.log (groceryList.concat(extraGranola))
// console.log (groceryList)

// // Write the code that will return a subset of the array containing only "chips" and "dip".
// console.log (groceryList.slice(0,2))

// // Write the code that will add "beans" to the "chips" and "dip" array.
// var addBeans =(groceryList.slice(0,2).concat("beans"))
// console.log(addBeans)





// var numbers = [2, 4, 6, 8, 10]
// // Write the code that will add the number 0 to the beginning of the array.
//  console.log (numbers.unshift("0"))

// // Write the code that will add the number 12 to the end of the array.
// console.log(numbers.push("12"))

// // Write the code that will remove the first number from the array.
// console.log(numbers.shift("0"))

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// var addZero = [0]
// console.log(addZero.concat(numbers))
// console.log(numbers)


// var numSet = [2, 13, 6, 8, 4, 2]
// // Write the code that finds the index of the first appearance of the number 2.
// console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.
// console.log(numSet[2])


// var characters = ["y", "a", "r", "r", "a"]
// var charsReversed =(characters.reverse())
// var bringTogether = (characters.join("*"))
// var bringTogether1 = (characters.join(""))


// Write the code that brings all the letters in the characters array together into a string.
// console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// console.log(bringTogether)

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
//  console.log(bringTogether1)

// Create two arrays consisting of three first names of your cohort members in each.
// var studentsNames = ["jacob","xavier", "chris"]
// var studentsNames1 = ["tammy","yayah", "joel"]
// var nameReverse = (studentsNames.reverse())
// var catName = (studentsNames.concat(studentsNames1))

// // Write the code that sorts the names in alphabetical order.
// // console.log(studentsNames.sort())
// // console.log(studentsNames1.sort())

// // Write the code that sorts the names in reverse alphabetical order.
// // console.log(nameReverse)

// // Write the code that sorts all the names in alphabetical order in a single array.
// // console.log(catName.sort())

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.

for (numbers) {
  if (numbers % 2 === 1) {
    odds.push(numbers);
  }
}
console.log(odds); 

// Write the code that adds the values from odd indexes into the oddIndexes array.


// const numbers = [8, 19, 5, 6, 14, 9, 13];

// const odds = [];
// for (const num of numbers) {
//   if (num % 2 === 1) {
//     odds.push(num);
//   }
// }
// console.log(odds); // [19, 5, 9, 13]
//added