// Create a for loop that logs each number from 1 - 20.
for(let i=1; i<21; i++){
    console.log(i)
}

// Create a for loop that logs every other number from 1 - 20.
for(let i=1; i<21; i+=2){
    console.log(i)
}

// Create a for loop that logs the result of each number from 1 - 20 tripled.
for(let i=1; i<21; i++){
    console.log(i*3)
}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
const myArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(let i=1; i<21; i++)
    if(myArray[i] %2 == 0)
    {
    console.log(i)
    }
else if(myArray[i] %2 !== 0)
    {
        console.log("ODD")
    }

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
console.log(nums[4])

// Create the code that will log the smallest number from the array.
console.log(nums[2])

// Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1

for(let i=0; i<nums.length; i++)
{
    console.log(nums[i]% 2)
}

// const myString = "learn student"
// // Create the code that will log the number of times the letter "e" occurs in the string.

// // Create the code that will log every other character in the string.
// var ourString = myString.split("") 
// console.log(ourString) // output: ['l', 'e', 'a', 'r', 'n', ' ', 's', 't', 'u', 'd', 'e', 'n', 't']
  

// for(let i=0; i<myString.length; i+=2)
// {
//     console.log(ourString)
