// Create a for loop that logs each number from 1 - 20.
for(let i = 1; i < 21; i++) {
    console.log(i)
 } //correct

// Create a for loop that logs every other number from 1 - 20.
for(let i = 1; i <21; i+=2) {
    console.log(i);
} //correct

// Create a for loop that logs the result of each number from 1 - 20 tripled.
for(let i = 1; i < 21; i++) {
    console.log(i * 3)
 }

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
for(let i = 1; i < 21; i++) {
    if (i % 2 !== 1) {
        console.log(i) 
    } else 
        console.log("ODD")
} // correct

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc


const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.
console.log(nums[4])
//--> 67

// Create the code that will log the smallest number from the array.
console.log(nums[2])
//--> -9

// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
for(let i = 0; i < nums.length; i++) {
    console.log(nums[i] % 2);
} //--> 1,1,-1,0,1


const myString = "learn student"

// Create the code that will log the number of times the letter "e" occurs in the string.
 console.log(myString.split("e").length -1)
//--> 2

// Create the code that will log every other character in the string.
for (let i = 0; i < myString.length; i+=2){
console.log(myString[i]);
}