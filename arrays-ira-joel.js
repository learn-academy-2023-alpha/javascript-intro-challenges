// Write the code that will add "soda" to the end of the original array.
var groceryList = ["chips", "dip", "cookies"]
console.log(groceryList.push("soda"))
console.log(groceryList)
// --> soda Added

// Write the code that will add "granola" to the end of array without altering the original array.
var groceryList2 = ["granola"]
console.log(groceryList.concat(groceryList2)) 
// output: chips, dip, cookies, soda, granola

// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0,2))
//output: Chips, Dip

// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(groceryList.unshift("beans"))
console.log(groceryList.pop());
console.log(groceryList.pop());
console.log(groceryList)
// Output: 'Beans', 'chips' 'dip'


// Consider the variable:[2,4,6,8,10]

// Write the code that will add the number 0 to the beginning of the array.
var evens = ["2, 4, 6, ,8, 10"]
console.log(evens.unshift("0"))
console.log(evens)
//output: 0,2,4,6,8,10

// Write the code that will add the number 12 to the end of the array.
console.log(evens.push("12"))
console.log(evens)
//output: 0,2,4,6,8,10,12

// Write the code that will remove the first number from the array.
console.log(evens.shift())
console.log(evens)
// output: 2,4,6,8,10

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var evens1 = ["0"]
console.log(evens1.concat(evens))
// output: 0,2,4,6,8,10,12

// Write the code that finds the index of the first appearance of the number 2.
var numSet = [2, 13, 6, 8, 4, 2]
console.log(numSet.indexOf(2))
//output: 0

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))
//output: 5

// Write the code that returns the number at the third index.
console.log(numSet.index[6])

