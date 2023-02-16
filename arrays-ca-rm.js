// var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
// console.log(groceryList)
// groceryList.push("soda")
// console.log(groceryList)
// Write the code that will add "granola" to the end of array without altering the original array.

// console.log (groceryList.concat ("granola"))
// console.log(groceryList);
// Write the code that will return a subset of the array containing only "chips" and "dip".
// console.log(groceryList[0], groceryList[1]);
// Write the code that will add "beans" to the "chips" and "dip" array.
// var snackList = [groceryList[0], groceryList[1]]
// snackList.push ("beans")
// console.log(snackList);

//  var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
// numbers = numbers.reverse ()
// numbers.push (0)
// numbers = numbers.reverse ()
// console.log(numbers);
// Write the code that will add the number 12 to the end of the array.
// numbers.push (12)
// console.log(numbers);
// Write the code that will remove the first number from the array.
// numbers = numbers.reverse ()
// numbers.pop ()
// numbers = numbers.reverse ()
// console.log(numbers);
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// console.log(numbers.reverse().concat(0).reverse());
// numbers = numbers.reverse ()
// console.log(numbers);
// Consider the variable:
// var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
// console.log(numSet.indexOf(2));
// Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2));
// Write the code that returns the number at the third index.
// console.log(numSet [2]);

//var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
// var aString = characters.join("")
// console.log(aString);
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// var charsReversed = characters.reverse()
// console.log(charsReversed);
// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
//var charsReversed = characters.reverse().join("*")
//console.log(charsReversed);
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// var charsReversed = characters.reverse().join("")
// console.log(charsReversed);
// Create two arrays consisting of three first names of your cohort members in each.
// var firstNamesOne = ["Mike", "Joey", "Dennis"]
// var firstNamesTwo = ["Ira", "Joel", "Brandon"]
//console.log(firstNamesOne); console.log(firstNamesTwo);
// Write the code that sorts the names in alphabetical order.
// firstNamesOne.sort()
// firstNamesTwo.sort()
// console.log(firstNamesOne); console.log(firstNamesTwo)
// Write the code that sorts the names in reverse alphabetical order.
// firstNamesOne.sort().reverse()
// firstNamesTwo.sort().reverse()
// console.log(firstNamesOne); console.log(firstNamesTwo)
// Write the code that sorts all the names in alphabetical order in a single array.
// var oneArray = firstNamesOne.concat (firstNamesTwo).sort()
// console.log(oneArray);

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.
// for(let i = 0; i < numbers.length; i ++){
//     if(numbers[i] % 2 === 1){
//         console.log(numbers[i]);
//     }
// }
// Write the code that adds the values from odd indexes into the oddIndexes array.
for(let i = 0; i < numbers.length; i ++){
    if(numbers[i] % 2 === 1){
        oddIndexes.push(i);
    }
}
console.log(oddIndexes);