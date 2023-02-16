// Challenges

// Create a for loop that logs each number from 1 - 20.
// for (let i = 0; i < 21; i++) {
//     console.log(i);
// }

// Create a for loop that logs every other number from 1 - 20.
// for (let i = 0; i < 21; i+=2) {
//     console.log(i);
// }
// Create a for loop that logs the result of each number from 1 - 20 tripled.
// for (let i = 0; i < 21; i++) {
//         console.log(i * 3);
//     }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// for (let i = 0; i < 21; i++) {
//     if (i % 2 !== 0) {
//         console.log("ODD")
//     } else {
//         console.log(i);
//     }
// }


// Consider this variable:

// const nums = [3, 57, -9, 20, 67]
// var largestNum = 0;
// var smallestNum = 0;

// Create the code that will log the largest number from the array.
// for (let i = 0; i < nums.length; i++) {
//     if (largestNum < nums[i]) {
//         largestNum = nums[i];
//     }
// } console.log(largestNum);


// Create the code that will log the smallest number from the array.
// for (let i = 0; i < nums.length; i++) {
//     if (smallestNum > nums[i]) {
//         smallestNum = nums[i];
//     }
// } console.log(smallestNum);
// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
// const nums = [3, 57, -9, 20, 67]
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i] % 2) ;
// }

// Consider this variable:

// const myString = "learn student"
// let allTheEs = 0
// // Create the code that will log the number of times the letter "e" occurs in the string.
// for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === "e") {
//         allTheEs++
//     } 
// }console.log(allTheEs);

// Create the code that will log every other character in the string.
// for (let i = 0; i < myString.length; i+=2) {
//         console.log(myString[i]);
//     }


// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.

// const stretchNumbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] 

// for (let i = 0; i < stretchNumbers.length; i++) {
//     if (i % 2 !== 0) {
//                 console.log(`${stretchNumbers[i]} is even`)
//             } else {
//                 console.log(`${stretchNumbers[i]} is odd`);
//             }
// }

// for (let i = 0; i < stretchNumbers.length; i++) {
//     if (i % 2 === 0) {
//                 console.log(`${stretchNumbers[i]} is odd`)
//             } else {
//                 console.log(`${stretchNumbers[i]} is even`);
//             }
// }
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        console.log("fizz");
    } else if 
        (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log("fizzbuzz")
    } else {
        console.log(i);
    }
}

// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc